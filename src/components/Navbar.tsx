import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "#home", label: "Home" },
  { to: "#expertise", label: "Expertise" },
  { to: "#process", label: "Process" },
  { to: "#clients", label: "Clients" },
  { to: "#about", label: "About" },
  { to: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ background: "hsla(230, 35%, 7%, 0.8)", borderColor: "hsla(230, 20%, 25%, 0.4)" }}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="text-xl font-bold gradient-text tracking-tight">
          Nirmallya 
          <span className="text-foreground/60" > </span>
          <span className="text-foreground/60"> Ghosh</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="text-sm font-medium transition-colors duration-300 text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary-glow text-sm !px-4 !py-2 rounded-md">
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t overflow-hidden"
            style={{ background: "hsla(230, 35%, 7%, 0.95)", borderColor: "hsla(230, 20%, 25%, 0.4)" }}
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary-glow text-sm text-center !py-2">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
