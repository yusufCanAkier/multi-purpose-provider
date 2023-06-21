import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CInputGroup,
  CFormSelect,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import UserContext from 'src/UserContext';
import { useNavigate } from 'react-router-dom';

const CreateEKS = () => {
  const [clusterName, setClusterName] = useState('');
  const [clusterVersion, setSelectedVersion] = useState('');
  const [visible, setVisible] = useState(false);
  const [clusters, setClusters] = useState([]);
  const [delModal, setDelModal] = useState(false);
  const [deleteClusterName, setDeleteClusterName] = useState(''); // Delete işlemi için seçilen clusterName'i tutar
  const { userID } = useContext(UserContext);
  let navigate = useNavigate();
  
  const handleCreate = () => {
    const data = {
      clusterName,
      clusterVersion,
    };
    // Create işlevi
    axios.post('http://localhost:7070/k8s/createeks/' + userID, data)
      .then(response => {
        if (response.status === 200) {
          setVisible(!visible);
          return response.json();
        } else {
          console.log("olmadi");
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const handleModal = () => {
    setVisible(false);
    navigate('/base/list-groups');
  };

  const handleDelete = () => {
    // Delete işlevi
    const formData = {
      clusterName: deleteClusterName,
    };
    console.log(formData);
    // Delete isteği burada gerçekleştirilir
    fetch(`http://localhost:7070/k8s/deleteeks/${userID}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.status === 200) {
          // İstek başarılı olduysa işlem yapabilirsiniz
          setDelModal(false)
          console.log(response)
        } else {
          console.log("olmadi");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:7070/k8s/geteks/' + userID)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch clusters');
        }
      })
      .then(data => {
        if (data.clusters && Array.isArray(data.clusters)) {
          setDelModal(false)
          setClusters(data.clusters);
        } else {
          throw new Error('Invalid cluster data');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [userID]);

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
                  value={clusterVersion}
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
              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                  <CModalTitle>Successfully</CModalTitle>
                </CModalHeader>
                <CModalBody>Database Successfully Created!</CModalBody>
                <CModalFooter>
                  <CButton color='secondary' onClick={handleModal}>
                    Go AWS Database List
                  </CButton>
                </CModalFooter>
              </CModal>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Clusters</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Cluster Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-end">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <tbody>
                {clusters.map((cluster, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{cluster}</CTableDataCell>
                    <CTableDataCell className="text-end">
                      <CButton color="danger" onClick={() => {
                        setDeleteClusterName(cluster);
                        setDelModal(true);
                      }}>
                        Delete
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </tbody>
            </CTable>
            <CModal visible={delModal} onClose={() => setDelModal(false)}>
              <CModalHeader onClose={() => setDelModal(false)}>
                <CModalTitle>Attention</CModalTitle>
              </CModalHeader>
              <CModalBody>Do you want to delete your database?</CModalBody>
              <CModalFooter>
                <CButton color='danger' onClick={handleDelete}>
                  Delete
                </CButton>
                <CButton color='secondary' onClick={() => setDelModal(false)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateEKS;
