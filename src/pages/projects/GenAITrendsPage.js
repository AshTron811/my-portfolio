import React from 'react';
import { Link } from 'react-router-dom';

export default function GenAITrendsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Time Series Forecasting & GenAI Trend Analyser</h1>
      <img src="/imgs/proj3.jpg" alt="GenAI Trends" className="w-full h-64 object-cover rounded-2xl shadow-md mb-6" />
      <p className="text-lg leading-relaxed">
        [language: Python] These projects are time series forecasting apps enhanced with a GenAI trend explainer powered by LangChain, Mistral AI and the HuggingFaceHub API. I made two instances of it, the one with Temporal Convolutional Networks (TCN) achieved an average RMSE of around 10 and the one with Temporal Fusion Transformer (TFT) achieved an average RMSE of around 6. [deployed: StreamLit (https://time-series-forecasting-and-genai-trend-analysis-using-tcn.streamlit.app/, https://time-series-forecasting-and-genai-trend-analysis.streamlit.app/)]      </p>
      {/* technologies, links, etc. */}
    </div>
  );
}