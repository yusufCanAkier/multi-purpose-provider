import React from 'react'
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

const popovers = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Azure AKS</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#custom-select">
              <CInputGroup className="mb-3">
                <CFormSelect id="inputGroupSelect02">
                  <option>Upload your credential as a .env</option>
                  <option value="1">2.1.2</option>
                  <option value="2">2.1.3</option>
                  <option value="3">2.1.4</option>
                </CFormSelect>
                <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                  Versions
                </CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton type="button" color="secondary" variant="outline">
                  Generate
                </CButton>
                <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
                  <option>Instance Size</option>
                  <option value="1">m7g.medium</option>
                  <option value="2">m7g.large</option>
                  <option value="3">m7g.xlarge</option>
                </CFormSelect>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">@</CInputGroupText>
                <CFormInput
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient&#39;s username"
                  aria-label="Recipient&#39;s username"
                  aria-describedby="basic-addon2"
                />
                <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
              </CInputGroup>
              {/* <CFormLabel htmlFor="basic-url">Your vanity URL</CFormLabel> */}
              {/* <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
                <CFormInput id="basic-url" aria-describedby="basic-addon3" />
              </CInputGroup> */}
              {/* <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput aria-label="Amount (to the nearest dollar)" />
                <CInputGroupText>.00</CInputGroupText>
              </CInputGroup> */}
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Cluster Name" aria-label="Username" />
                <CInputGroupText>@</CInputGroupText>
                <CFormInput placeholder="Cluster Version" aria-label="Server" />
              </CInputGroup>
              {/* <CInputGroup>
                <CInputGroupText>With textarea</CInputGroupText>
                <CFormTextarea aria-label="With textarea"></CFormTextarea>
              </CInputGroup> */}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default popovers
