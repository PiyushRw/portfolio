export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-logo">PR<span className="accent">.</span></span>
          <p className="footer-text">&copy; {new Date().getFullYear()} Piyush Rawat. Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
