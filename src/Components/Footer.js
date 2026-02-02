import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h3>IEEE XYZ Student Branch</h3>
          <p>Advancing Technology for Humanity</p>
        </div>

        {/* Middle */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: ieee@xyz.edu</p>
          <p>XYZ College, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IEEE XYZ Student Branch
      </div>
    </footer>
  );
}

export default Footer;
