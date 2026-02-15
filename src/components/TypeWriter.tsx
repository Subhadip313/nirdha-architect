import { useEffect, useState } from "react";

const roles = [
  "Salesforce Technical Architect",
  "Solution Designer",
  "Integration Specialist",
];

const TypeWriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-primary text-glow">
      {roles[roleIndex].substring(0, charIndex)}
      <span className="animate-pulse-glow">|</span>
    </span>
  );
};

export default TypeWriter;
