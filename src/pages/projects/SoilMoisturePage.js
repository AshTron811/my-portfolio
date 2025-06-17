import React from 'react';
import { Link } from 'react-router-dom';

export default function SoilMoisturePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Real-time Soil Moisture Prediction</h1>
      <img src="/imgs/proj1.jpg" alt="Soil Moisture" className="w-full h-64 object-cover rounded-2xl shadow-md mb-6" />
      <p className="text-lg leading-relaxed">
        [language: Python] This project takes Real Time SMAP soil moisture data from Google Earth Engine and models temporal trends with an LSTM neural network for forecasting. (deployed: StreamLit (https://real-time-soil-moisture-forecast-for-latur-region-maharashtra.streamlit.app/))
      </p>
      {/* technologies, links, etc. */}
    </div>
  );
}