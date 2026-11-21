import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Anitha Palani. Built with React and Tailwind CSS.
    </footer>
  );
};

export default Footer;
