import React, { useContext, useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CTab,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTableDataCell
} from '@coreui/react'
import { DocsExample } from 'src/components'
import UserContext from 'src/UserContext'
import '../accordion/accordion-style.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#ffffff', padding: '10px', border: '1px solid #dddddd' }}>
        <p className="label">{`Date: ${label}`}</p>
        <p className="intro">{`Cost: ${payload[0].value} USD`}</p>
      </div>
    );
  }
  return null;
};

const Spinners = () => {

  const { userID } = useContext(UserContext)
  const [data, setData] = useState([]);

  let apiUrl = 'http://localhost:7070/billing/getbillingaws/' + userID

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(fetchedData => {
        const chartData = fetchedData.map(item => {
          return {
            start: item.TimePeriod.Start,
            end: item.TimePeriod.End,
            cost: item.Total.UnblendedCost.Amount,
            amount: item.Total.UnblendedCost.Amount,
            unit: item.Total.UnblendedCost.Unit,
          };
        });
        setData(chartData);
      })
      .catch(error => console.error('Error:', error));

  }, []);

  const tableData = data.map(item => ({
    start: item.start,
    end: item.end,
    amount: item.amount,
    unit: item.unit,
  }));

  const tableFields = [
    { key: 'start', label: 'Start Date' },
    { key: 'end', label: 'End Date' },
    { key: 'amount', label: 'Amount' },
    { key: 'unit', label: 'Unit' },
  ];



  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Resource Billing</h2>
      <h3 style={{ textAlign: 'center', color: '#888888',}}>Usage Cost</h3>
      <ResponsiveContainer width='100%' height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="start" padding={{ left: 30, right: 30 }} tick={{ fontSize: 14, fill: '#605F5E' }} />
          <YAxis tick={{ fontSize: 14, fill: '#605F5E' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <Line type="monotone" dataKey="cost" stroke="#8884d8" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
          <Area type='monotone' dataKey='cost' stroke='#8884d8' fillOpacity={0.3} fill='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
      <CTable
        items={tableData}
        fields={tableFields}
        striped
        hover
        caption="Chart Data"
        className="styled-table mt-5"
      >
        <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
          <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
          <CTableHeaderCell scope="col">Total Amount</CTableHeaderCell>
          <CTableHeaderCell scope="col">Price Unit</CTableHeaderCell>
        </CTableRow>
      </CTableHead>

      </CTable>
    </div>
  )
}

export default Spinners
