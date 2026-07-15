import React, { useEffect, useState } from 'react';
import Container from '../../../components/layouts/admin/Container';
import { useParams } from 'react-router';
import CreatePricingForm from '../../../components/forms/CreatePricingForm';
import { getPricing } from '../../../services/pricingService';

const EditPricing = () => {
    const { id } = useParams();

    const [pricing, setPricing] = useState(null);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const data = await getPricing(id);
                setPricing(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPricing();
    }, [id]);

    return (
        <Container>
            <h4>Tarifni tahrirlash</h4>

            {pricing && (
                <CreatePricingForm
                    initialData={pricing}
                    isEdit={true}
                />
            )}
        </Container>
    );
};

export default EditPricing;