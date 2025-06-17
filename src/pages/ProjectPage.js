// File: src/pages/ProjectPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectPage({ projects }) {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <div className="max-w-4xl mx-auto">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        {/* Replace below with actual project description/content */}
        <p className="leading-relaxed text-lg">
          Detailed description and highlights of <strong>{project.title}</strong> go here. 
          You can include sections for technologies used, results, and future improvements.
        </p>

        {/* Example: Technologies List */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Framer Motion</li>
            <li>Tailwind CSS</li>
            {/* Add project-specific tech */}
          </ul>
        </div>

        {/* Example: Links */}
        <div className="mt-8 flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition"
          >
            View Code
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
