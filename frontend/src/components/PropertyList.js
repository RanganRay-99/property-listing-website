import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    // Fetch properties from the backend
    useEffect(() => {
        axios.get('/api/properties')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []);

    return (
        <div className="property-list">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;