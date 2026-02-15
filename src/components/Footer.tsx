const Footer = () => (
  <footer className="border-t py-10" style={{ borderColor: "hsla(230, 20%, 25%, 0.4)" }}>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="gradient-text font-bold text-lg">Nirdha</span>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-foreground transition-colors">Home</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <span>© {new Date().getFullYear()} Nirdha. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
