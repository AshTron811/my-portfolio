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
        [language: Python] This project performs customer segmentation using K-Means clustering on RFM (Recency, Frequency, Monetary) data, followed by Random Forest to analyze feature importance and build predictive models. The machine learning model demonstrates 96% accuracy in predicting customer clusters. [deployed: StreamLit (https://rfm-based-customer-segmentation-and-prediction-software.streamlit.app)].      </p>
      {/* technologies, links, etc. */}
    </div>
  );
}