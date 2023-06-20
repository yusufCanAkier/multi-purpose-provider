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
  { key: 'location', label: 'Location', _style: { width: '10%'} },
  { key: 'administratorLogin', label: 'Admin Login', _style: { width: '15%'} },
  { key: 'backupRetentionDays', label: 'Backup Retention Days', _style: { width: '15%'} },
  { key: 'storageSizeGB', label: 'Storage Size (GB)', _style: { width: '15%'} },
  { key: 'version', label: 'Version', _style: { width: '10%'} },
  { key: 'skuName', label: 'SKU Name', _style: { width: '20%'} },
  { key: 'skuTier', label: 'SKU Tier', _style: { width: '15%'} },
];

const Accordion = () => {

  const { userID } = useContext(UserContext)
  const [data, setData] = useState([]);
  let apiUrl = 'http://localhost:7070/database/getdatabaseazure/' + userID

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
      .then(fetchedData => {
        const flattenedData = fetchedData.map(item => {
          return {
            location: item.location,
            administratorLogin: item.properties.administratorLogin,
            backupRetentionDays: item.properties.backup.backupRetentionDays,
            storageSizeGB: item.properties.storage.storageSizeGB,
            version: item.properties.version,
            skuName: item.sku.name,
            skuTier: item.sku.tier,
          };
        });
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
      className="styled-table"
    >
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Location</CTableHeaderCell>
          <CTableHeaderCell scope="col">Administrator</CTableHeaderCell>
          <CTableHeaderCell scope="col">Backup Retention Days</CTableHeaderCell>
          <CTableHeaderCell scope="col">Storage Size (GB)</CTableHeaderCell>
          <CTableHeaderCell scope="col">Version</CTableHeaderCell>
          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Tier</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
    </CTable>
  )
}

export default Accordion
