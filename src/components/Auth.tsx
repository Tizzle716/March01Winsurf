import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
}

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState<SignUpData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobileNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    
    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (isSignUp) {
      // First name validation
      if (!formData.firstName) {
        errors.firstName = 'First name is required';
      }

      // Last name validation
      if (!formData.lastName) {
        errors.lastName = 'Last name is required';
      }

      // Mobile number validation
      if (!formData.mobileNumber) {
        errors.mobileNumber = 'Mobile number is required';
      } else if (!/^\+?[\d\s-]{10,}$/.test(formData.mobileNumber)) {
        errors.mobileNumber = 'Please enter a valid mobile number';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            mobile_number: formData.mobileNumber,
          }
        }
      });

      if (signUpError) throw signUpError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              first_name: formData.firstName,
              last_name: formData.lastName,
              mobile_number: formData.mobileNumber,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            }
          ]);

        if (profileError) throw profileError;
        
        setSuccess('Registration successful! Please check your email to verify your account.');
        // Switch to sign in mode after successful registration
        setTimeout(() => setIsSignUp(false), 3000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await signIn(formData.email, formData.password);
      
      // Get the redirect path from location state or default to dashboard
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email);
      if (error) throw error;
      setSuccess('Password reset instructions have been sent to your email');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset instructions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-sm text-indigo-200">
            {isSignUp ? 'Sign up to get started' : 'Sign in to your account'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span>{success}</span>
            </div>
          )}

          {isSignUp && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    validationErrors.firstName ? 'border-red-500' : 'border-white/10'
                  } bg-white/5 text-white rounded-lg focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400`}
                  placeholder="First Name"
                />
                {validationErrors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{validationErrors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    validationErrors.lastName ? 'border-red-500' : 'border-white/10'
                  } bg-white/5 text-white rounded-lg focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400`}
                  placeholder="Last Name"
                />
                {validationErrors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{validationErrors.lastName}</p>
                )}
              </div>
            </div>
          )}

          {isSignUp && (
            <div>
              <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  validationErrors.mobileNumber ? 'border-red-500' : 'border-white/10'
                } bg-white/5 text-white rounded-lg focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400`}
                placeholder="Mobile Number"
              />
              {validationErrors.mobileNumber && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.mobileNumber}</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                validationErrors.email ? 'border-red-500' : 'border-white/10'
              } bg-white/5 text-white rounded-lg focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400`}
              placeholder="Email address"
            />
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              required
              value={formData.password}
              onChange={handleChange}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                validationErrors.password ? 'border-red-500' : 'border-white/10'
              } bg-white/5 text-white rounded-lg focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400`}
              placeholder="Password"
            />
            {validationErrors.password && (
              <p className="mt-1 text-sm text-red-400">{validationErrors.password}</p>
            )}
          </div>

          {!isSignUp && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </button>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              ) : (
                isSignUp ? 'Sign Up' : 'Sign In'
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(null);
              setSuccess(null);
              setValidationErrors({});
            }}
            className="text-sm text-indigo-400 hover:text-indigo-300"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};
