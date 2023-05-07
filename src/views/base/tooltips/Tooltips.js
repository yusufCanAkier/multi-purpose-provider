import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CTooltip,
  CRow,
  CCol,
  CSpinner,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Microsoft Azure Provider</strong>
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

export default Tooltips
