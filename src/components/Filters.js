import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        price: '',
        bedrooms: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleApplyFilters = () => {
        onFilterChange(filters);
    };

    return (
        <div className="filters">
            <input
                type="number"
                name="price"
                placeholder="Max Price"
                value={filters.price}
                onChange={handleChange}
            />
            <input
                type="number"
                name="bedrooms"
                placeholder="Min Bedrooms"
                value={filters.bedrooms}
                onChange={handleChange}
            />
            <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filters;