import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Filters from './Filters';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [filters, setFilters] = useState({
        price: '',
        bedrooms: ''
    });

    // Fetch properties from backend
    useEffect(() => {
        axios.get('http://localhost:8000/api/properties')
            .then(response => setProperties(response.data))
            .catch(error => console.error(error));
    }, []);

    // Filter properties based on user input
    const filteredProperties = properties.filter(property => {
        return (
            (!filters.price || property.price <= filters.price) &&
            (!filters.bedrooms || property.bedrooms >= filters.bedrooms)
        );
    });

    return (
        <div>
            <Filters onFilterChange={setFilters} />
            <div className="property-list">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                    <p>No properties found.</p>
                )}
            </div>
        </div>
    );
};

export default PropertyList;
