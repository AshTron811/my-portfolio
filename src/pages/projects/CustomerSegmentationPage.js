import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerSegmentationPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Customer Segmentation and Prediction</h1>
      <img src="/imgs/proj2.jpg" alt="Customer Segmentation" className="w-full h-64 object-cover rounded-2xl shadow-md mb-6" />
      <p className="text-lg leading-relaxed">
        [language: Python] This project performs customer segmentation using K-Means clustering on RFM (Recency, Frequency, Monetary) data, followed by Random Forest to analyze feature importance and build predictive models. The machine learning model demonstrates 96% accuracy in predicting customer clusters.
      </p>
      <div className="mt-8 flex space-x-4">
        <a
          href="https://github.com/AshTron811/RFM-Based-Customer-Segmentation-and-Prediction-Software"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 border border-gray-900 text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >
          Get Code
        </a>
        <a
          href="https://rfm-based-customer-segmentation-and-prediction-software.streamlit.app"
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