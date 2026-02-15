import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Landmark, Cloud, ShoppingCart, BarChart3, Headphones, ArrowRight, Mail
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionWrapper from "@/components/SectionWrapper";

const clients = [
  { icon: Landmark, title: "Fintech Startups", desc: "Helping fintech innovators scale their Salesforce infrastructure from MVP to millions." },
  { icon: Cloud, title: "SaaS Platforms", desc: "Building integrations that connect SaaS products with Salesforce for seamless data flow." },
  { icon: ShoppingCart, title: "eCommerce Businesses", desc: "Unifying commerce data with CRM for personalized customer experiences." },
  { icon: BarChart3, title: "Enterprise Sales Teams", desc: "Empowering large sales orgs with automation, analytics, and pipeline visibility." },
  { icon: Headphones, title: "Contact Centers", desc: "CTI integrations and omnichannel solutions for next-level customer support." },
];

const Contact = () => (
  <div className="gradient-bg min-h-screen pt-16">
    {/* Who I Work With */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Who I <span className="gradient-text">Work With</span>
        </h2>
        <p className="section-subtext">
          From scrappy startups to enterprise teams, I architect solutions that fit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {clients.map((c, i) => (
          <GlassCard key={c.title} delay={i * 0.1}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "hsla(270, 100%, 65%, 0.1)" }}>
              <c.icon className="text-accent" size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>

    {/* Final CTA */}
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto glow-border"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Let's Build Something{" "}
          <span className="gradient-text">Scalable</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Ready to transform your Salesforce ecosystem? Let's start with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@nirdha.com"
            className="btn-primary-glow text-base inline-flex items-center gap-2 justify-center"
          >
            <Mail size={18} />
            Book a Strategy Call
          </a>
          <a
            href="mailto:hello@nirdha.com"
            className="btn-secondary-glass text-base inline-flex items-center gap-2 justify-center"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  </div>
);

export default Contact;
