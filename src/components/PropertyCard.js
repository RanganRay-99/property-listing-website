import React from 'react';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <img src={property.image_url} alt={property.name} />
            <h3>{property.name}</h3>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        </div>
    );
};

export default PropertyCard;