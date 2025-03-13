import React from 'react';
import PropertyList from './components/PropertyList';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <h1>Property Listings</h1>
            <PropertyList />
        </div>
    );
};

export default App;