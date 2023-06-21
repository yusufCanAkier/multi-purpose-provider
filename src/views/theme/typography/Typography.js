import React, { useContext, useState, useEffect } from 'react';
import { CTable, CTableHead, CTableHeaderCell, CTableRow, CTableDataCell } from '@coreui/react';
import UserContext from 'src/UserContext';
import '../../base/accordion/accordion-style.css'

const Typography = () => {
  const { userID } = useContext(UserContext);
  const [awsAccesses, setAwsAccesses] = useState([]);
  const [azureAccesses, setAzureAccesses] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:7070/users/users/${userID}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(userData => {
        const { aws_accesses = [], azure_accesses = [],} = userData;
        setAwsAccesses(aws_accesses);
        setAzureAccesses(azure_accesses);
      })
      .catch(error => console.error('Error:', error));
  }, [userID]);

  const awsFields = [
    { key: 'ID', _tag: 'th', header: 'ID' },
    { key: 'CreatedAt', _tag: 'th', header: 'Created Date' },
    { key: 'UpdatedAt', _tag: 'th', header: 'Updated Date' },
    { key: 'user_id', _tag: 'th', header: 'User ID' },
    { key: 'accessKey', _tag: 'th', header: 'Access Key (AWS)' },
    { key: 'secretKey', _tag: 'th', header: 'Secret Key (AWS)' },
  ];

  const azureFields = [
    { key: 'ID', _tag: 'th', header: 'ID' },
    { key: 'CreatedAt', _tag: 'th', header: 'Created Date' },
    { key: 'UpdatedAt', _tag: 'th', header: 'Updated Date' },
    { key: 'user_id', _tag: 'th', header: 'User ID' },
    { key: 'subscriptionId', _tag: 'th', header: 'Subscription ID' },
    { key: 'tenantId', _tag: 'th', header: 'Tenant ID' },
    { key: 'clientID', _tag: 'th', header: 'Client ID' },
    { key: 'clientSecret', _tag: 'th', header: 'Client Secret' },
  ];


  return (
    <div>
      <h4>AWS Accesses</h4>
      <CTable
        items={awsAccesses}
        fields={awsFields}
        tableFilter
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        className='styled-table'
      >
        <CTableHead>
          <CTableRow>
            {awsFields.map((field, index) => (
              <CTableHeaderCell key={field.key} scope="col" style={{ borderRight: index === awsFields.length - 1 ? 'none' : '1px solid #dee2e6' }}>
                {field.header}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
      </CTable>
      <h4>Azure Accesses</h4>
      <CTable
        items={azureAccesses}
        fields={azureFields}
        tableFilter
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        className='styled-table'
      >
        <CTableHead>
          <CTableRow>
            {azureFields.map((field, index) => (
              <CTableHeaderCell key={field.key} scope="col" style={{ borderRight: index === azureFields.length - 1 ? 'none' : '1px solid #dee2e6' }}>
                {field.header}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
      </CTable>
    </div>
  );
};

export default Typography;
