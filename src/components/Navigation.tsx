import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign out');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              AI Automations
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/services"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <User size={16} />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
