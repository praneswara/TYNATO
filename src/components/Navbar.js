import React from "react";
import { navigate } from "./Router";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("home")}
      >
        {/* Logo */}
        <img
          src="./images/TYNATO_LOGO.png"
          alt="TYNATO Logo"
          className="h-10 w-10 mr-2 object-contain"
        />
        {/* Text */}
        <span className="text-xl font-bold">TYNATO</span>
      </div>

      <div className="space-x-6">
        <button onClick={() => navigate("home")}>Home</button>
        <button onClick={() => navigate("services")}>Services</button>
        <button onClick={() => navigate("about")}>About</button>
        <button onClick={() => navigate("careers")}>Careers</button>
        <button onClick={() => navigate("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
