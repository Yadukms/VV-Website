import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <span className="footer-label">CATALOG</span>

          <div className="footer-links">
            <span>About us</span> / <span>Services</span> / <span>Pricing</span>{' '}
            / <span>Gallery</span>
          </div>

          <div className="footer-sub-links">
            <span>Our Blog</span>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-label">CONTACT US</span>
          <p className="footer-phone">+512-522-1798</p>
          <p className="footer-email">VVProductionsATX@gmail.com</p>
          <p className="footer-address">Address Line 1, Houston, TX 8003</p>
        </div>

        <div className="footer-col footer-follow">
          <span className="footer-label">FOLLOW US</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>YouTube</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 — Copyright</span>
        <span>Privacy Policy</span>
        <span>All Right Reserved</span>
      </div>
    </footer>
  );
}
