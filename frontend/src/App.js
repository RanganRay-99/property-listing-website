import React from "react";
import PropertyList from "./components/PropertyList";
import "./styles.css";

const App = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <img src="/logo.png" alt="Property Logo" className="logo" />
                <h1>Find Your Dream Home</h1>
                <p>Explore the best properties that match your needs.</p>
            </header>

            {/* Main Content */}
            <main>
                <PropertyList />
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Property Listings. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
