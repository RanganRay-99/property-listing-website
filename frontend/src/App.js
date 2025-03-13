import React from 'react';
import PropertyList from './components/PropertyList';
import Filters from './components/Filters';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <h1>Property Listings</h1>
            <Filters onFilterChange={(filters) => console.log(filters)} />
            <PropertyList />
        </div>
    );
};

export default App;