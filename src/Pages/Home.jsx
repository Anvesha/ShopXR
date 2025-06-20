import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/signin');
  };

  return (
    <div className="bg-white min-h-screen text-white font-sans">
      {/* Background */}
      <div className="bg-[url('/assets/bg.png')] bg-cover bg-center min-h-screen">
        
        {/* Navbar */}
        <header className="flex justify-between items-center p-4">
          <div className="text-black font-bold text-3xl bg-white px-6 py-2 rounded-full border-2 border-black cursor-pointer">
            <Link to="/">ShopXAR</Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 text-black bg-white px-6 py-3 rounded-xl border-2 border-black">
            <a href="#about" className="hover:text-red-500">About</a>
            <a href="#work" className="hover:text-red-500">Work</a>
            <a href="#services" className="hover:text-red-500">Services</a>
            <a href="#contacts" className="hover:text-red-500">Contacts</a>
            
            {user ? (
              <button
                onClick={handleLogout}
                className="hover:text-red-500 bg-black text-white px-4 py-1 rounded-full ml-2"
              >
                Logout
              </button>
            ) : (
              <Link to="/signin" className="hover:text-red-500">Sign In</Link>
            )}
          </nav>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white text-black mx-4 p-4 border-2 border-black rounded-xl space-y-2">
            <a href="#about" className="block hover:text-red-500">About</a>
            <a href="#work" className="block hover:text-red-500">Work</a>
            <a href="#services" className="block hover:text-red-500">Services</a>
            <a href="#contacts" className="block hover:text-red-500">Contacts</a>

            {user ? (
              <button
                onClick={handleLogout}
                className="block mt-2 px-4 py-2 bg-black text-white text-center rounded-full hover:bg-red-500 transition w-full"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                className="block mt-2 px-4 py-2 bg-black text-white text-center rounded-full hover:bg-red-500 transition"
              >
                Sign In
              </Link>
            )}
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Welcome</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">
            Engage customers like never before
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-black mt-2">
            Sell more with ShopXAR’s 3D & AR!
          </p>
        </section>

        {/* Feature Cards */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 px-4 sm:px-6 md:px-10">
          <Link to="/getstarted" className="w-full md:w-[500px] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg text-center h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Get Started Now</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5">
                Get Started now with 3D customization and Custom Configuration
              </p>
              <img src="/assets/getstart.png" alt="Start Illustration" className="mx-auto h-44 sm:h-52 object-contain" />
            </div>
          </Link>

          <Link to="/startanduploadvideo" className="w-full md:w-[500px] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg text-center h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Get Your 3D Models Now</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5">
                Contact us and we'll get you a professional 3D model and help you get started with the app in no time
              </p>
              <img src="/assets/get.png" alt="3D Model Illustration" className="mx-auto h-44 sm:h-52 object-contain" />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
