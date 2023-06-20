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


const fields = [
  { key: 'InstanceID', label: 'Instance ID', _style: { width: '25%'} },
  { key: 'InstanceType', label: 'Instance Type', _style: { width: '25%'} },
  { key: 'PublicDNSName', label: 'Public DNS Name', _style: { width: '25%'} },
  { key: 'State', label: 'State', _style: { width: '25%'} },
];

const Navs = () => {

  const { userID } = useContext(UserContext)
  const [data, setData] = useState([]);
  let apiUrl = 'http://localhost:7070/vm/getlistaws/' + userID

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(fetchedData => {
      // PublicDNSName değeri boş olan kayıtların bu değerini 'N/A' yap
      const updatedData = fetchedData.instances.map(item => {
        if (item.PublicDNSName === '') {
          return { ...item, PublicDNSName: 'N/A' };
        }
        return item;
      });
      setData(updatedData);
    })
    .catch(error => console.error('Error:', error));

  }, []);

  return (
    <CTable
      items={data}
      fields={fields}
      striped
      itemsPerPage={5}
      pagination
      hover
      sorter
      className='styled-table'
    >
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Instance ID</CTableHeaderCell>
          <CTableHeaderCell scope="col">Instance Type</CTableHeaderCell>
          <CTableHeaderCell scope="col">Public DNS Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">State</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
    </CTable>
  )
}

export default Navs
