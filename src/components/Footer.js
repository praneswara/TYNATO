import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 mt-10 px-8">
      <div className="text-sm flex justify-between items-center">
        <p>© {new Date().getFullYear()} TYNATO. All rights reserved.</p>
        <p>Designed & Developed by TYNATO</p>
      </div>
    </footer>
  );
};

export default Footer;
