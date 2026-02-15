import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t py-10" style={{ borderColor: "hsla(230, 20%, 25%, 0.4)" }}>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="gradient-text font-bold text-lg">Nirdha</span>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <Link to="/process" className="hover:text-foreground transition-colors">Process</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
      </div>
      <span>© {new Date().getFullYear()} Nirdha. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
