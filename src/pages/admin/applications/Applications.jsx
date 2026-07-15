import React from 'react';
import Container from '../../../components/layouts/admin/Container';
import ApplicationsTable from '../../../components/tables/ApplicationsTable';

const Applications = () => {
  return (
    <Container>

      <h4>Arizalar</h4>

      <ApplicationsTable/>
    </Container>
  );
};

export default Applications;