import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CSpinner,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {
  return (
    <CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Amazon Web Services Cluster</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/spinner#buttons">
                <CButton disabled>
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                </CButton>
                <CButton disabled>
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                  Loading...
                </CButton>
              </DocsExample>
              <DocsExample href="components/spinner#buttons">
                <CButton disabled>
                  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true" />
                </CButton>
                <CButton disabled>
                  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true" />
                  Loading...
                </CButton>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Tables
