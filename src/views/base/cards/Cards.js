import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInputGroup,
  CFormInput,
  CFormSelect,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import UserContext from 'src/UserContext';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const [resourceGroup, setResourceGroup] = useState('');
  const [location, setLocation] = useState('');
  const [serverName, setServerName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [version, setVersion] = useState('');
  const [visible, setVisible] = useState(false)
  const [delModal, setDelModal] = useState(false);
  const { userID } = useContext(UserContext)
  let navigate = useNavigate();
  const handleCreateDatabase =  () => {
    const formData = {
      resourceGroup,
      location,
      serverName,
      adminName,
      adminPassword,
      version
    };

  fetch('http://localhost:7070/database/createdatabaseazure/' + userID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
      if(response.ok) {  // HTTP status kodu 200-299 arasında ise
        setVisible(!visible)
        return response.json(); // json veriyi döndür ve sonraki then bloğuna geç.
      } else {
        console.log("olmadi")
      }
      })
      .then(data => {
        console.log(data)
          // Burada "data" nesnesi ile istediğiniz işlemi yapabilirsiniz.
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDeleteDatabase = () => {
    const formData = {
      resourceGroup,
      serverName
    };

    fetch('http://localhost:7070/database/deletedatabaseazure/' + userID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const handleModal = () => {
    setVisible(false);
    navigate('/base/accordion');
  };
  const handleDelModal = () => {
    handleDeleteDatabase();
    setDelModal(false);
    navigate('/base/accordion');
   };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Azure Database</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Resource Group"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={resourceGroup}
                  onChange={(e) => setResourceGroup(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Location"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Server Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Admin Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  type="Password"
                  placeholder="Admin Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect id="inputGroupSelect02" value={version} onChange={(e) => setVersion(e.target.value)}>
                  <option>Choose your version</option>
                  <option value="11">11</option>
                </CFormSelect>
                <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                  Versions
                </CInputGroupText>
              </CInputGroup>
              <CButton onClick={handleCreateDatabase}>Create</CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                  <CModalTitle>Successfully</CModalTitle>
                </CModalHeader>
                <CModalBody>Database Successfully Created !</CModalBody>
                <CModalFooter>
                  <CButton color='secondary' onClick={handleModal}>
                    Go AWS Database List
                  </CButton>
                </CModalFooter>
              </CModal>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Delete Azure Database</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Resource Group"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={resourceGroup}
                  onChange={(e) => setResourceGroup(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Server Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
              </CInputGroup>
              <CButton onClick={() => setDelModal(true)}>Delete</CButton>
              <CModal visible={delModal} onClose={() => setDelModal(false)}>
                <CModalHeader onClose={() => setDelModal(false)}>
                  <CModalTitle>Warning</CModalTitle>
                </CModalHeader>
                <CModalBody>Do you want to delete your database ?</CModalBody>
                <CModalFooter>
                  <CButton color='danger' onClick={handleDelModal}>
                    Delete
                  </CButton>
                  <CButton color='secondary' onClick={() => setDelModal(false)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
