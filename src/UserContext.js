import React from 'react';

// Context oluşturuluyor.
// Başlangıçta boş bir ID ile başlıyoruz.
export const UserContext = React.createContext({
  userID: null,
  setUserID: () => {},
});

export default UserContext;
