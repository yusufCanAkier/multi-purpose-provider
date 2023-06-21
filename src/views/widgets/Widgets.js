import React, { useContext, useState, useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CInputGroup,
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

const Widgets = () => {
  const { userID } = useContext(UserContext);
  const navigate = useNavigate();
  const [storageName, setStorageName] = useState('');
  const [location, setLocation] = useState('');
  const [visible, setVisible] = useState(false);
  const [storageList, setStorageList] = useState([]);
  const [delModal, setDelModal] = useState(false);
  const [deleteLocation, setDeleteLocation] = useState('');
  const [deleteStorage, setDeleteStorage] = useState('');

  const handleCreate = () => {
    const data = {
      storageName,
      location,
    };

    fetch(`http://localhost:7070/storage/createaws/${userID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          setVisible(!visible)
          return response.json();
        } else {
          throw new Error('Failed to create storage');
        }
      })
      .then(data => {
        console.log('Storage created:', data);
        // İşlem başarılı olduğunda yapılması gereken işlemler buraya gelebilir
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleModal = () => {
    setVisible(false);
    navigate('/base/navs');
  };

  const handleDelete = (storageName, location) => {
    // Delete işlevi
    const formData = {
      location: location,
      storageName: storageName,
    };
    console.log(formData);
    fetch(`http://localhost:7070/storage/deleteaws/${userID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          // İstek başarılı olduysa işlem yapabilirsiniz
          console.log("Storage deleted successfully");
        } else {
          console.log("Failed to delete storage");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const handleDelModal = () => {
    handleDelete();
    setDelModal(false);
    navigate('/widgets');
   };
  useEffect(() => {
    fetch(`http://localhost:7070/storage/getlistaws/${userID}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch storage list');
        }
      })
      .then(data => {
        setStorageList(data);
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
            <strong>Create Storage</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Storage Name"
                  aria-label="Storage Name"
                  value={storageName}
                  onChange={e => setStorageName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Storage Location"
                  aria-label="Storage Location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </CInputGroup>
              <CButton onClick={handleCreate}>Create</CButton>
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
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Storage List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Creation Date</CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-end">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <tbody>
                {storageList.map((storage, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{storage.CreationDate}</CTableDataCell>
                    <CTableDataCell>{storage.Name}</CTableDataCell>
                    <CTableDataCell className="text-end">
                      <CButton color="danger" onClick={() => {
                        setDelModal(true);
                      }}>
                        Delete
                      </CButton>
                      <CModal visible={delModal} onClose={() => setDelModal(false)}>
                        <CModalHeader onClose={() => setDelModal(false)}>
                          <CModalTitle>Warning</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Do you want to delete your database?</CModalBody>
                        <CModalFooter>
                          <CButton color='danger' onClick={() => handleDelete(storage.Name, storage.Location)}>
                            Delete
                          </CButton>
                          <CButton color='secondary' onClick={() => setDelModal(false)}>
                            Cancel
                          </CButton>
                        </CModalFooter>
                      </CModal>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </tbody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Widgets;
