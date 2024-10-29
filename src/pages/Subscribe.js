import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Handle subscription logic here
      console.log('Subscribing email:', email);
      setEmail('');
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <h2 className="josefin-font-36 text-[#725346] whitespace-nowrap">
            Subscribe
          </h2>
          
          <form 
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValid(true);
                }}
                placeholder="Enter your Email"
                className={`w-full px-4 py-3 bg-stone-100 border ${
                  isValid ? 'border-stone-200' : 'border-red-500'
                } focus:outline-none focus:ring-2 focus:ring-stone-300`}
              />
              {!isValid && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>
            
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-medium hover:bg-stone-800 transition-colors duration-200 whitespace-nowrap"
            >
              SIGN UP
            </button>
          </form>
        </div>

        <p className="text-center josefin-AI-Content">
          Get 10% off your first purchase when you sign up for our newsletter!
        </p>
      </div>
    </div>
  );
};

export default Subscribe;