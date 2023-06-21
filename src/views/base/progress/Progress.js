import React, { useContext, useState } from 'react'
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
  CModalFooter,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import axios from 'axios';
import { useEffect } from 'react';
import UserContext from 'src/UserContext';
import { useNavigate } from 'react-router-dom';

const paginations = () => {
const [imageId, setImageId] = useState('');
const [visible, setVisible] = useState(false);
const { userID } = useContext(UserContext)
let navigate = useNavigate();


const handleCreate = async () => {
  const formData = {
   imageId,
  };


  await fetch(`http://localhost:7070/vm/createaws/${userID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response =>
    {
      if(response.ok) {  // HTTP status kodu 200-299 arasında ise
        setVisible(!visible)
        return response.json(); // json veriyi döndür ve sonraki then bloğuna geç.
      } else {
        alert("Wrong")
      }
    })
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
  navigate('/base/carousels')
}


// const handleDelete = () => {
//   // Delete işlevi
//   axios.delete('API_URL', { data: inputValue })
//     .then(response => {
//       // İstek başarılı olduğunda yapılacaklar
//       console.log(response);
//     })
//     .catch(error => {
//       // İstek hata verdiğinde yapılacaklar
//       console.error(error);
//     });
// };

useEffect(() => {
  console.log(userID)
}, []); 

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Virtual Machine</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Image ID"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={imageId}
                  onChange={(e) => setImageId(e.target.value)}
                />
              </CInputGroup>
              <CButton onClick={handleCreate}>Create</CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                          <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Success</CModalTitle>
                          </CModalHeader>
                          <CModalBody>Account Successfully Created !</CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={handleModal}>
                              Go VM List
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

export default paginations
