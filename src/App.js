// src/App.js
import React, { useState } from "react";
import Tours from "./components/Tour";
import data from "./data";
function App() {
    const [tours, setTours] = useState(data);
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };
    if (tours.length === 0) {
        return (
            <div className="refresh">
                <h1>No Tours Left</h1>
                <button className="refresh-btn" onClick={() => setTours(data)}>
                    Refresh
                </button>
            </div>
        );
    }
    return (
        <div className="main-part">
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    );
}

export default App;
