import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react';
import { DocsExample } from 'src/components';
import UserContext from 'src/UserContext';

const CreateAzureVM = () => {
  const [resourceGroupName, setResourceGroupName] = useState('');
  const [virtualMachineName, setVirtualMachineName] = useState('');
  const [virtualMachineSize, setVirtualMachineSize] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [location, setLocation] = useState('');
  const { userID } = useContext(UserContext);
  const [visible, setVisible] = useState(false)

  const handleCreate = async () => {
    const data = {
      resourceGroupName: resourceGroupName,
      vmName: virtualMachineName,
      vmSize: virtualMachineSize,
      adminUsername: adminUsername,
      adminPassword: adminUsername,
      location: location,
    };
    const url = 'http://localhost:7070/vm/createazure/' + userID;


    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
      console.error('Hata:', error);
    });

  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Azure Virtual Machine</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Resource Group Name"
                  aria-label="Resource Group Name"
                  value={resourceGroupName}
                  onChange={(e) => setResourceGroupName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Virtual Machine Name"
                  aria-label="Virtual Machine Name"
                  value={virtualMachineName}
                  onChange={(e) => setVirtualMachineName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Virtual Machine Size"
                  aria-label="Virtual Machine Size"
                  value={virtualMachineSize}
                  onChange={(e) => setVirtualMachineSize(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Admin Username"
                  aria-label="Admin Username"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  type="password"
                  placeholder="Admin Password"
                  aria-label="Admin Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Location"
                  aria-label="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </CInputGroup>
              <CButton onClick={handleCreate}>Create</CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                          <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Successfully</CModalTitle>
                          </CModalHeader>
                          <CModalBody>VM Successfully Created !</CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                              Close
                            </CButton>
                          </CModalFooter>
              </CModal>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateAzureVM;
