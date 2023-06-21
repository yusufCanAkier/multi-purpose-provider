import React, { useContext, useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
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
  { key: 'AvailabilityZone', label: 'Availability Zone', _style: { width: '20%'} },
  { key: 'MasterUsername', label: 'Master Username', _style: { width: '20%'} },
  { key: 'DBInstanceClass', label: 'Instance Class', _style: { width: '20%'} },
  { key: 'BackupRetentionPeriod', label: 'Backup Retention Period', _style: { width: '20%'}},
  { key: 'DBInstanceStatus', label: 'Database Status', _style: { width: '20%'}}
];

const Collapses = () => {

  const { userID } = useContext(UserContext)
  const [data, setData] = useState([]);
  let apiUrl = 'http://localhost:7070/database/getdatabaseaws/' + userID

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
      .then(fetchedData => {
        // Gelen veriyi düz bir yapıya dönüştür
        const flattenedData = fetchedData.map(item => ({
          AvailabilityZone: item.AvailabilityZone,
          MasterUsername: item.MasterUsername,
          DBInstanceClass: item.DBInstanceClass,
          BackupRetentionPeriod: item.BackupRetentionPeriod,
          DBInstanceStatus: item.DBInstanceStatus
        }));
        setData(flattenedData);
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
          {fields.map(field => (
            <CTableHeaderCell key={field.key} scope="col" style={field._style}>
              {field.label}
            </CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((item, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{item.AvailabilityZone}</CTableDataCell>
            <CTableDataCell>{item.MasterUsername}</CTableDataCell>
            <CTableDataCell>{item.DBInstanceClass}</CTableDataCell>
            <CTableDataCell>{item.BackupRetentionPeriod}</CTableDataCell>
            <CTableDataCell>{item.DBInstanceStatus}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default Collapses
