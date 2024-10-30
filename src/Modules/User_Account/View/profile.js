// src/pages/Customer/CustomerProfile.js
import React, { useState } from 'react';
import Avatar from '../../../components/Avatar';
import Button from '../../../components/Button';
 
function CustomerProfile() {
  const [profile, ] = useState({//setProfile
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    address: '123 Main St, City, Country',
    avatarUrl: 'https://via.placeholder.com/150', // Replace with actual avatar URL
  });

  const handleEditClick = () => {
    // Logic for editing profile goes here
    console.log('Edit profile clicked');
  };

  const handleSaveClick = () => {
    // Logic for saving updated profile goes here
    console.log('Save profile clicked');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Customer Profile</h1>
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
        
          <Avatar src={profile.avatarUrl} alt="Profile Avatar" className="w-32 h-32 rounded-full" />
        </div>
        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <p className="text-lg">{profile.firstName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <p className="text-lg">{profile.lastName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="text-lg">{profile.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="text-lg">{profile.phone}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <p className="text-lg">{profile.address}</p>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleEditClick} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
                Edit
              </Button>
              <Button onClick={handleSaveClick} className="bg-green-500 text-white px-4 py-2 rounded">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
