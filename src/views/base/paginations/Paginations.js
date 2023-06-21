import React, { useContext, useState } from 'react';
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
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import UserContext from 'src/UserContext';
import { useNavigate } from 'react-router-dom';

const Paginations = () => {
  const [dbInstanceIdentifier, setDbIdentifier] = useState('');
  const [dbInstanceClass, setDbClass] = useState('');
  const [engine, setDbEngine] = useState('');
  const [masterUsername, setUsername] = useState('');
  const [masterPassword, setPassword] = useState('');
  const [dbName, setDbName] = useState('');
  const [visible, setVisible] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const { userID } = useContext(UserContext);
  let navigate = useNavigate();

  const createDatabase = () => {
    const formData = {
      dbInstanceIdentifier,
      dbInstanceClass,
      engine,
      masterUsername,
      masterPassword,
      dbName,
    };

    fetch('http://localhost:7070/database/createdatabaseaws/' + userID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setVisible(!visible);
          return response.json();
        } else {
          console.log('olmadi');
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const deleteDatabase = async () => {
    const formData = {
      dbInstanceIdentifier,
    };

  await  fetch('http://localhost:7070/database/deletedatabaseaws/' + userID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleModal = () => {
    setVisible(false);
    navigate('/base/collapses');
  };

  const handleDelModal = async () => {
   await deleteDatabase();
   setDelModal(false);
   navigate('/base/collapses');
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>Create AWS Database</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href='forms/input-group'>
              <CInputGroup className='mb-3'>
                <CFormInput
                  placeholder='Database Instance Identifier'
                  aria-label='Database Instance Identifier'
                  value={dbInstanceIdentifier}
                  onChange={(e) => setDbIdentifier(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className='mb-3'>
                <CFormInput
                  placeholder='Database Instance Class'
                  aria-label='Database Instance Class'
                  value={dbInstanceClass}
                  onChange={(e) => setDbClass(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className='mb-3'>
                <CFormInput
                  placeholder='Database Engine'
                  aria-label='Database Engine'
                  value={engine}
                  onChange={(e) => setDbEngine(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className='mb-3'>
                <CFormInput
                  placeholder='Username'
                  aria-label='Username'
                  value={masterUsername}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className='mb-3'>
                <CFormInput
                  type='password'
                  placeholder='Password'
                  aria-label='Password'
                  value={masterPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className='mb-3'>
                <CFormInput
                  placeholder='Database Name'
                  aria-label='Database Name'
                  value={dbName}
                  onChange={(e) => setDbName(e.target.value)}
                />
              </CInputGroup>
              <CButton onClick={createDatabase}>Create</CButton>
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
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>Delete AWS Database</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href='forms/input-group'>
              <CInputGroup className='mb-3'>
                <CFormInput
                  placeholder='Database Instance Identifier'
                  aria-label='Database Instance Identifier'
                  value={dbInstanceIdentifier}
                  onChange={(e) => setDbIdentifier(e.target.value)}
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
  );
};

export default Paginations;
