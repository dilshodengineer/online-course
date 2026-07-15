import React from 'react'
import { Link } from 'react-router'

const PricingCard = ({ pricing, onDelete }) => {
    return (
        <div className='card'>
            <div className="card-body">
                <h4 className='text-center'>{pricing.title}</h4>

                <h5 className="fw-normal text-center">
                    {Number(pricing.price).toLocaleString()} so'm
                </h5>
                <hr />

                <p className="text-secondary">
                    {pricing.description}
                </p>

                <div className="d-flex justify-content-end gap-2">
                    <button 
                    onClick={() => onDelete(pricing.id)}
                    className="btn btn-sm btn-danger py-1"
                    >
                        <i className="bi bi-trash-fill"></i>
                    </button>

                    <Link
                        to={`/dashboard/pricing/${pricing.id}/edit`}
                        className="btn btn-sm btn-success py-1"
                    >
                        <i className="bi bi-pencil-fill"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard