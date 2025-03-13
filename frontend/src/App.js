import React from 'react';
import PropertyList from './components/PropertyList';
import Filters from './components/Filters';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            {/* Header with logo and title */}
            <header className="header">
                <img src="/logo.jpg" alt="Logo" className="logo" />
                <h1>Property Listings</h1>
            </header>

            {/* Introductory text */}
            <div className="intro">
                <p>Welcome to Property Listings! Explore our curated collection of properties and find your dream home today.</p>
            </div>

            {/* Filters and Property List */}
            <Filters onFilterChange={(filters) => console.log(filters)} />
            <PropertyList />
        </div>
    );
};

export default App;