import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Blocks, DollarSign, ShieldCheck, Zap, GitMerge, Layers,
  Building2, CreditCard, MessageSquare, ShoppingBag, Phone, Server
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import TypeWriter from "@/components/TypeWriter";
import GlassCard from "@/components/GlassCard";
import SectionWrapper from "@/components/SectionWrapper";

const pillars = [
  { icon: Blocks, label: "Scalable", desc: "Architecture that grows with your business" },
  { icon: DollarSign, label: "Cost-Optimized", desc: "Maximum ROI on every Salesforce license" },
  { icon: ShieldCheck, label: "Secure", desc: "Enterprise-grade security by default" },
  { icon: Zap, label: "Automation-Driven", desc: "Eliminate repetitive manual processes" },
  { icon: GitMerge, label: "Integration-Ready", desc: "Seamless connectivity across your stack" },
];

const expertise = [
  { icon: Layers, title: "End-to-End Salesforce Architecture", desc: "Full lifecycle design from discovery to deployment, built for scale and maintainability." },
  { icon: Building2, title: "Back Office Architecture", desc: "License optimization and back-office workflows that reduce costs and boost efficiency." },
  { icon: CreditCard, title: "BNPL Solution Architecture", desc: "Buy Now Pay Later integrations with risk assessment, compliance, and payment orchestration." },
  { icon: MessageSquare, title: "Salesforce + Slack + Teams", desc: "Unified communication architecture connecting CRM data with collaboration platforms." },
  { icon: ShoppingBag, title: "Shopify + Salesforce Integration", desc: "Seamless eCommerce-to-CRM data flow for orders, customers, and inventory sync." },
  { icon: Phone, title: "Call Center / CTI Integration", desc: "Computer telephony integration for intelligent call routing and agent productivity." },
];

const Home = () => (
  <div className="gradient-bg min-h-screen">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Salesforce Technical Architect
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Transforming Businesses with{" "}
            <span className="gradient-text">End-to-End Salesforce Architecture</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Designing scalable, secure, cost-optimized Salesforce ecosystems.
          </p>
          <p className="text-xl md:text-2xl font-medium mb-10 h-8">
            <TypeWriter />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary-glow text-base">
              Book a Consultation
            </Link>
            <Link to="/process" className="btn-secondary-glass text-base">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* About – 5 Pillars */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Built on <span className="gradient-text">5 Pillars</span>
        </h2>
        <p className="section-subtext">
          Every solution I architect is grounded in these core principles.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.map((p, i) => (
          <GlassCard key={p.label} delay={i * 0.1} className="text-center">
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3" style={{ background: "hsla(197, 100%, 44%, 0.1)" }}>
              <p.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-1">{p.label}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>

    {/* Expertise Grid */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Areas of <span className="gradient-text">Expertise</span>
        </h2>
        <p className="section-subtext">
          Deep specialization across the Salesforce ecosystem and beyond.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((e, i) => (
          <GlassCard key={e.title} delay={i * 0.1}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "hsla(270, 100%, 65%, 0.1)" }}>
              <e.icon className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{e.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  </div>
);

export default Home;
