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
  CFormSelect,
  CInputGroupText,
} from '@coreui/react';
import { DocsExample } from 'src/components';

const CreateEKS = () => {
  const [clusterName, setClusterName] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');

  const handleCreate = () => {
    const data = {
      clusterName,
      selectedVersion,
    };
    console.log(data)
    // Create işlevi
    axios.post('http://localhost:7070/k8s/createeks/4', data)
      .then(response => {
        // İstek başarılı olduğunda yapılacaklar
        console.log(response.data, response);
      })
      .catch(error => {
        // İstek hata verdiğinde yapılacaklar
        console.error(error);
      });
  };

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
                  aria-label="Cluster Name"
                  value={clusterName}
                  onChange={(e) => setClusterName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect
                  id="inputGroupSelect02"
                  value={selectedVersion}
                  onChange={(e) => setSelectedVersion(e.target.value)}
                >
                  <option>Choose your cluster version</option>
                  <option value="1.24">1.24</option>
                  <option value="1.25">1.25</option>
                  <option value="1.26">1.26</option>
                </CFormSelect>
                <CInputGroupText
                  component="label"
                  htmlFor="inputGroupSelect02"
                >
                  Versions
                </CInputGroupText>
              </CInputGroup>
              <CButton onClick={handleCreate}>Create</CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateEKS;
