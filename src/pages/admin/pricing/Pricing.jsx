import React, { useEffect, useState } from 'react';
import Container from '../../../components/layouts/admin/Container';
import { Link } from 'react-router';
import PricingCard from '../../../components/ui/PricingCard';
import { getPricings, deletePricing } from '../../../services/pricingService';

const Pricing = () => {
  const [pricings, setPricings] = useState([]);

  const fetchPricings = async () => {
    try {
      const data = await getPricings();
      setPricings(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPricings();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Tarifni o'chirmoqchimisiz?")) {
      return;
    }

    try {
      await deletePricing(id);

      setPricings((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container>
      <h4>Tariflar</h4>

      <div className="border-bottom border-top border-secondary py-2 mt-2">
        <Link to="/dashboard/pricing/create" className='btn btn-primary btn-sm'>+ Yangi tarif yaratish</Link>
      </div>

      {pricings.map((pricing) => (
        <div
          key={pricing.id}
          className="col-xl-4 col-md-6 mt-4"
        >
          <PricingCard
            pricing={pricing}
            onDelete={handleDelete}
          />
        </div>
      ))}

    </Container>
  )
}

export default Pricing