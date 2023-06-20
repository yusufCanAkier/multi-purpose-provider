import React from 'react';

// Context oluşturuluyor.
// Başlangıçta boş bir ID ile başlıyoruz.
const UserContext = React.createContext({
  userID: null,
  setUserID: () => {},
});

export default UserContext;
