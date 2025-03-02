import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useProfile } from '../hooks/useProfile';
import { User, LogOut, Settings, Edit } from 'lucide-react';

export const UserDashboard = () => {
  const { user, signOut } = useAuth();
  const { profile, loading, updateProfile } = useProfile(user);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: profile?.first_name || '',
    lastName: profile?.last_name || '',
    mobileNumber: profile?.mobile_number || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await updateProfile({
      first_name: formData.firstName,
      last_name: formData.lastName,
      mobile_number: formData.mobileNumber,
    });

    if (result.success) {
      setIsEditing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-indigo-100 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-indigo-100 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-indigo-100 rounded"></div>
                <div className="h-4 bg-indigo-100 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <User className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile?.first_name} {profile?.last_name}
                  </h1>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {isEditing ? (
                    <Settings className="w-6 h-6" />
                  ) : (
                    <Edit className="w-6 h-6" />
                  )}
                </button>
                <button
                  onClick={signOut}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                    <p className="mt-1 text-lg text-gray-900">{profile?.first_name || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                    <p className="mt-1 text-lg text-gray-900">{profile?.last_name || 'Not set'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Mobile Number</h3>
                  <p className="mt-1 text-lg text-gray-900">{profile?.mobile_number || 'Not set'}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                  <p className="mt-1 text-lg text-gray-900">
                    {new Date(profile?.created_at || '').toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
