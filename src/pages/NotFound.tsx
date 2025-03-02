import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 to-black">
      <div className="text-center">
        <div className="flex justify-center">
          <FileQuestion className="h-24 w-24 text-indigo-500" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-white hover:text-indigo-400"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
