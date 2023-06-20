import React, { useContext, useState, useEffect } from 'react'
import {
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import UserContext from 'src/UserContext'
import '../accordion/accordion-style.css'


const Navs = () => {

  const { userID } = useContext(UserContext)
  const [data, setData] = useState([]);
  let apiUrl = 'http://localhost:7070/storage/getlistaws/' + userID
  const fields = [
    { key: 'name', _tag: 'th', header: 'Name' },
    { key: 'creationDate', _tag: 'th',header: 'Creation Date' },
    { key: 'id', _tag: 'td', header: '#' },
    
    
  ];
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => 
        // Her veri öğesine bir id özelliği ekleyin
        data.map((item, index) => ({ ...item, id: index + 1 }))
      )
      .then(dataWithID => setData(dataWithID))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <CTable
      items={data}
      fields={fields}
      tableFilter
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      className='styled-table'
    >
      <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Creation Date</CTableHeaderCell>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
    </CTable>
  )
}

export default Navs
