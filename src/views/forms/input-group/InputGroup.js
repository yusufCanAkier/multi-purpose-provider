import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CRow,
  CFormSelect,
  CInputGroupText,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Select = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create EKS</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Cluster Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect id="inputGroupSelect02">
                  <option>Choose your cluster version</option>
                  <option value="1">2.1.2</option>
                  <option value="2">2.1.3</option>
                  <option value="3">2.1.4</option>
                </CFormSelect>
                <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                  Versions
                </CInputGroupText>
              </CInputGroup>
              <CButton href="#">Create</CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Select
