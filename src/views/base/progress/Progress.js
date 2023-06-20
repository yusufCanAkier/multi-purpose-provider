import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import axios from 'axios';
import { useEffect } from 'react';
import UserContext from 'src/UserContext';

const paginations = () => {
const [inputValue, setInputValue] = useState('');
const { userID } = useContext(UserContext)
const handleCreate = () => {
  // Create işlevi
  axios.post('http://localhost:7070/vm/createaws/4', { data: inputValue })
    .then(response => {
      // İstek başarılı olduğunda yapılacaklar
      console.log(response.config);
    })
    .catch(error => {
      // İstek hata verdiğinde yapılacaklar
      console.error(error);
    });
};

const handleDelete = () => {
  // Delete işlevi
  axios.delete('API_URL', { data: inputValue })
    .then(response => {
      // İstek başarılı olduğunda yapılacaklar
      console.log(response);
    })
    .catch(error => {
      // İstek hata verdiğinde yapılacaklar
      console.error(error);
    });
};

useEffect(() => {
  console.log(userID)
}, []); 

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Virtual Machine</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Image ID"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </CInputGroup>
              <CButton onClick={handleCreate}>Create</CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Delete Virtual Machine</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Image ID"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <CButton>Delete</CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default paginations
