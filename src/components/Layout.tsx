import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1E1E1E',
            color: '#fff',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
};
