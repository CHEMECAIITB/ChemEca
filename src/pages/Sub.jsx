import React from 'react';
import Header from '../components/Header';

const Sub = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Subsystem Page
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl">
          This is a placeholder for your Subsystem content. You can add sections,
          images, and other layout components here. It will be responsive on both
          mobile and desktop.
        </p>
      </main>
    </div>
  );
};

export default Sub;
