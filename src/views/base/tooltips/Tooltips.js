import React, { useState } from 'react';
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
} from '@coreui/react';
import { DocsExample } from 'src/components';

const CreateAzureVM = () => {
  const [resourceGroupName, setResourceGroupName] = useState('');
  const [virtualMachineName, setVirtualMachineName] = useState('');
  const [virtualMachineSize, setVirtualMachineSize] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleCreate = () => {
    const data = {
      resourceGroupName,
      virtualMachineName,
      virtualMachineSize,
      adminUsername,
      adminPassword,
      location,
    };

    // Create işlevi
    axios.post('http://localhost:7070/vm/createazure/4', data)
      .then(response => {
        console.log(data)
        // İstek başarılı olduğunda yapılacaklar
        console.log(response);
      })
      .catch(error => {
        eastus
        // İstek hata verdiğinde yapılacaklar
        console.error(error);
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
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateAzureVM;
