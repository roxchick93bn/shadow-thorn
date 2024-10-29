import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [attachments, setAttachments] = useState(0);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value) || value === '');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mb-6">
      <h1 className="righteous-42 text-[#725346] text-center p-8">CONTACT US</h1>
      
      {!showForm ? (
        <div className="space-y-6 text-center">
          <h2 className="josefin-font text-[#1B1B1B]">Are You curious about ShadowThorn Studios?</h2>
          <p className="text-stone-600 josefin-AI-Content">Have a question or a story to share? Send us a message and we'll get back to you soon.</p>
          
          <div className="space-y-4">
            <h3 className="josefin-font text-[#1B1B1B]">ShadowThorn Studios Games</h3>
            <p className="text-stone-600 josefin-AI-Content">Tripwireonfire@gmail.com</p>
            
            <div className="space-y-2">
              <h4 className="josefin-font text-[#1B1B1B]">Hours</h4>
              <p className="text-stone-600 josefin-AI-Content">Open today 12:00 am - 12:00 am</p>
              <p className="text-stone-600 josefin-AI-Content">Open 24/7/365 our games never sleep and neither do we!</p>
            </div>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="bg-black josefin-button text-slate-50 px-6 py-2 rounded hover:bg-[#262626] transition-colors duration-200"
          >
            DROP US A LINE!
          </button>
        </div>
      ) : (
        <div className="space-y-6 max-w-xl mx-auto">
          <h2 className="text-xl font-medium text-stone-800 text-center">Drop us a line!</h2>
          
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded bg-stone-100 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-3 rounded bg-stone-100 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
              {!isEmailValid && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
              )}
            </div>
            
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-3 rounded bg-stone-100 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
            
            <div className="flex items-center justify-between text-stone-600">
              <div className="flex items-center space-x-2">
                <Paperclip className="w-5 h-5" />
                <span>Attach Files</span>
              </div>
              <span>Attachments ({attachments})</span>
            </div>
            
            <p className="text-sm text-stone-500">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded flex items-center space-x-2 hover:bg-stone-800 transition-colors duration-200"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-4 h-4" />
              </button>
              
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-stone-600 hover:text-stone-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;