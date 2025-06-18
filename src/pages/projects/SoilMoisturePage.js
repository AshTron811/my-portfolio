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
        [language: Python] This project takes Real Time SMAP soil moisture data from Google Earth Engine and models temporal trends with an LSTM neural network for forecasting.
      </p>
      <div className="mt-8 flex space-x-4">
        <a
          href="https://github.com/AshTron811/Real-Time-Soil-Moisture-Forecast-for-Latur-Region-Maharashtra"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 border border-gray-900 text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >
          Get Code
        </a>
        <a
          href="https://real-time-soil-moisture-forecast-for-latur-region-maharashtra.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-500 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}