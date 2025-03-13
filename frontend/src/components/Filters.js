import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
    const [price, setPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");

    const handleFilter = () => {
        onFilterChange({ price, bedrooms });
    };

    return (
        <div className="filters">
            <input
                type="number"
                placeholder="Max Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Min Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
            />
            <button onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

export default Filters;
