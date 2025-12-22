import React from 'react';
import './card.css';

const Card = () => {
    const product = {
        name: 'chicken',
        price: '150/kg',
        description: 'High-quality product.'
    };

    return (
        
        <div className="card" style={{width: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginLeft:"90"}}>
            <div className="card-header">
                <h2 className="card-name">{product.name}</h2>
            </div>
            <div className="card-body">
                <p className="card-description">{product.description}</p>
            </div>
            <div className="card-footer">
                <span className="card-price">{product.price}</span>
                <button className="card-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;