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
  { key: 'location', label: 'Location', _style: { width: '20%'} },
  { key: 'administratorLogin', label: 'Administrator Login', _style: { width: '20%'} },
  { key: 'skuName', label: 'SKU Name', _style: { width: '20%'} },
  { key: 'backup', label: 'Backup Retention Days', _style: { width: '20%'}}
];

const Breadcrumbs = () => {

  const { userID } = useContext(UserContext)
  const [data, setData] = useState([]);
  let apiUrl = 'http://localhost:7070/database/getdatabaseazure/' + userID

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
      .then(fetchedData => {
        // Gelen veriyi düz bir yapıya dönüştür
        const flattenedData = fetchedData.map(item => ({
          location: item.location,
          administratorLogin: item.properties.administratorLogin,
          skuName: item.sku.name,
          backup: item.properties.backup.backupRetentionDays
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
          <CTableHeaderCell scope="col">Location</CTableHeaderCell>
          <CTableHeaderCell scope="col">Administrator</CTableHeaderCell>
          <CTableHeaderCell scope="col">SKU Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Backup Retention Days</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
    </CTable>
  )
}

export default Breadcrumbs
