import React from 'react';
import Container from '../../../components/layouts/admin/Container';
import CreatePricingForm from '../../../components/forms/CreatePricingForm';

const CreatePricing = () => {
  return (
    <Container>
        <h4>Tarif yaratish</h4>

        <CreatePricingForm/>
    </Container>
  )
}

export default CreatePricing;