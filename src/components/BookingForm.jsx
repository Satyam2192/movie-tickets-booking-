import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [movieDetails, setMovieDetails] = useState({});

  const navigateTo = useNavigate();

  useEffect(() => {
    const storedMovieDetails = localStorage.getItem('movieDetails');
    if (storedMovieDetails) {
      setMovieDetails(JSON.parse(storedMovieDetails));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingDetails = {
      name: name,
      email: email,
      phone: phone,
      movieDetails: movieDetails
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    alert('Booking Successful!');
    navigateTo('/');
  };

  console.log(movieDetails);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6 animate__animated animate__fadeIn">
        <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
        <p className="mb-2">Movie Name: {movieDetails.name}</p>
        <p className="mb-2">Language: {movieDetails.language}</p>
        <p className="mb-4">Type: {movieDetails.type}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Name:</span>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Email:</span>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Phone:</span>
            <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;