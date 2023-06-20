import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { UserContext } from '../../../UserContext'



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate();
  const { setUserID } = useContext(UserContext);
  let _userID ;
  
  const handleSubmit = async (e) => {

    e.preventDefault();

    const url = 'http://localhost:7070/auth/signIn';
    const data = {
      username: username,
      password: password,
    };


    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if(response.ok) {  // HTTP status kodu 200-299 arasında ise
        navigate('/dashboard')
        return response.json(); // json veriyi döndür ve sonraki then bloğuna geç.
      } else {
        setVisible(!visible)
      }
    })
    .then(data => {
      _userID = data.user.ID;
         // Burada "data" nesnesi ile istediğiniz işlemi yapabilirsiniz.
    })
    .then(()=>{
      setUserID(_userID);
    })
    .catch(error => {
      console.error('Hata:', error);
    });
    




  
  };
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" id='username' value={username} autoComplete="username" onChange={(e) => setUsername(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput 
                        value={password}
                        id='password'
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                        {error && <p className="text-danger">{error}</p>}
                      <CCol xs={6}>
                        <CButton type="submit" color="primary">
                          Login
                        </CButton>
                        <CModal visible={visible} onClose={() => setVisible(false)}>
                          <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Attention</CModalTitle>
                          </CModalHeader>
                          <CModalBody>Wrong username or password !</CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                              Close
                            </CButton>
                          </CModalFooter>
                        </CModal>

                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                    This tool provides a user interface to create custom infrastructure for cloud environments, allowing you to manage all your cloud environments from a single website and enjoy the convenience
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
