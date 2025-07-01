import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTwitter,
  FaInstagram,
  FaDiscord
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[url('/assets/bg.png')] bg-cover bg-center text-white">
      
      {/* Sidebar */}
      <div className="md:w-[250px] w-full md:min-h-screen border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black">Contact Us</h1>
          <p className="text-[#688F81] mt-2">Any question or remarks? Just write us a message!</p>
        </div>

        {/* Contact Box */}
        <div className="bg-black rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl mx-auto p-6 md:p-10 border border-gray-800 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="bg-white text-black rounded-xl p-6 w-full md:w-1/2 flex flex-col justify-between shadow-md">
            <div>
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <p className="text-sm text-gray-500 mt-1 mb-4">Say something to start a live chat!</p>

              <div className="border border-green-200 rounded-xl p-4 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-xl" />
                  <span>+1012 3456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl" />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-xl mt-1" />
                  <span>
                    C-306, Jal Vayu Towers,<br />
                    Dehradun, Uttarakhand<br />
                    India 248007
                  </span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-4 text-lg">
                  <a href="#" className="hover:text-blue-500 bg-black rounded-full text-white p-1" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" className="hover:text-pink-500 bg-black rounded-full text-white p-1" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" className="hover:text-indigo-500 bg-black rounded-full text-white p-1" aria-label="Discord"><FaDiscord /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="text-sm text-white">First Name</label>
                <input type="text" placeholder="First Name" className="w-full mt-1 p-2 bg-black border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div className="w-full">
                <label className="text-sm text-white">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full mt-1 p-2 bg-black border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="text-sm text-white">Email</label>
                <input type="email" placeholder="Email" className="w-full mt-1 p-2 bg-black border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div className="w-full">
                <label className="text-sm text-white">Phone Number</label>
                <input type="text" placeholder="Phone Number" className="w-full mt-1 p-2 bg-black border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>

            {/* Subject Selection */}
            <div>
              <label className="text-sm text-white">Select Subject?</label>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-white">
                {['General Inquiry', 'Issue', 'Feedback'].map(subject => (
                  <label key={subject} className="flex items-center gap-2">
                    <input type="radio" name="subject" value={subject} className="accent-green-400" />
                    {subject}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-white">Message</label>
              <textarea placeholder="Write your message.." rows="4" className="w-full mt-1 p-2 bg-black border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none" />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-[#7DA18A] hover:bg-[#6a947a] text-white font-semibold py-2 px-6 rounded-md transition">
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
