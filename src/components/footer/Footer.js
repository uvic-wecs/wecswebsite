import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <hr />
      <p>© {year} WECS. All rights reserved.</p>
      
      <p>Managed by Athaliah, Cammie, Joti, and Nadia!</p>
    </footer>
  );
};

export default Footer;
