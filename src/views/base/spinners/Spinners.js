import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CSpinner, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Google Compute Engine Cluster</strong>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
