import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>© {new Date().getFullYear()} My React App. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
