import React from 'react';
import './footer.css'; // Optional: For custom styling

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} WECS. All rights reserved.</p>
      <p>Website managed by Charli, Cammie, Athaliah, Romi, and Hana.</p>
    </footer>
  );
};

export default Footer;
