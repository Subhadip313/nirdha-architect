import { motion } from "framer-motion";
import {
  Blocks, DollarSign, ShieldCheck, Zap, GitMerge, Layers,
  Building2, CreditCard, MessageSquare, ShoppingBag, Phone, Server,
  Search, FileText, Code2, Rocket, RefreshCw,
  Lock, Key, Users, ClipboardList, Database,
  Landmark, Cloud, ShoppingCart, BarChart3, Headphones, ArrowRight, Mail,
  User, ChevronDown
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

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Enterprise Projects" },
  { value: "200+", label: "Integrations Built" },
  { value: "99.9%", label: "System Uptime" },
];

const expertise = [
  { icon: Layers, title: "End-to-End Salesforce Architecture", desc: "Full lifecycle design from discovery to deployment, built for scale and maintainability." },
  { icon: Building2, title: "Back Office Architecture", desc: "License optimization and back-office workflows that reduce costs and boost efficiency." },
  { icon: CreditCard, title: "BNPL Solution Architecture", desc: "Buy Now Pay Later integrations with risk assessment, compliance, and payment orchestration." },
  { icon: MessageSquare, title: "Salesforce + Slack + Teams", desc: "Unified communication architecture connecting CRM data with collaboration platforms." },
  { icon: ShoppingBag, title: "Shopify + Salesforce Integration", desc: "Seamless eCommerce-to-CRM data flow for orders, customers, and inventory sync." },
  { icon: Phone, title: "Call Center / CTI Integration", desc: "Computer telephony integration for intelligent call routing and agent productivity." },
];

const steps = [
  { icon: Search, title: "Discovery & Architecture Planning", desc: "Deep-dive into business requirements, stakeholder alignment, and system landscape analysis." },
  { icon: FileText, title: "Technical Blueprint", desc: "Comprehensive architecture documentation covering data models, integrations, and security." },
  { icon: Code2, title: "Agile Development", desc: "Iterative sprints with continuous feedback loops, CI/CD pipelines, and code reviews." },
  { icon: ShieldCheck, title: "Testing & Security Review", desc: "Rigorous QA, penetration testing, and compliance validation before go-live." },
  { icon: Rocket, title: "Production Deployment", desc: "Zero-downtime releases with rollback strategies and monitoring dashboards." },
  { icon: RefreshCw, title: "Ongoing Optimization", desc: "Continuous performance tuning, feature enhancements, and proactive maintenance." },
];

const securityItems = [
  { icon: ShieldCheck, title: "SOC 2 Best Practices", desc: "Organizational controls aligned with SOC 2 trust principles." },
  { icon: Database, title: "Data Encryption", desc: "End-to-end encryption at rest and in transit using platform shield." },
  { icon: Key, title: "OAuth / JWT Authentication", desc: "Secure token-based authentication for all API integrations." },
  { icon: Users, title: "Role-Based Access Control", desc: "Granular permissions ensuring least-privilege access across orgs." },
  { icon: ClipboardList, title: "Audit Logging", desc: "Comprehensive event tracking for compliance and incident response." },
];

const clients = [
  { icon: Landmark, title: "Fintech Startups", desc: "Helping fintech innovators scale their Salesforce infrastructure from MVP to millions." },
  { icon: Cloud, title: "SaaS Platforms", desc: "Building integrations that connect SaaS products with Salesforce for seamless data flow." },
  { icon: ShoppingCart, title: "eCommerce Businesses", desc: "Unifying commerce data with CRM for personalized customer experiences." },
  { icon: BarChart3, title: "Enterprise Sales Teams", desc: "Empowering large sales orgs with automation, analytics, and pipeline visibility." },
  { icon: Headphones, title: "Contact Centers", desc: "CTI integrations and omnichannel solutions for next-level customer support." },
];

const Home = () => (
  <div className="gradient-bg min-h-screen">
    {/* Hero */}
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <a href="#contact" className="btn-primary-glow text-base">
              Book a Consultation
            </a>
            <a href="#process" className="btn-secondary-glass text-base">
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* About Me */}
    <SectionWrapper id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shrink-0 glow-border" style={{ background: "hsla(230, 30%, 12%, 0.9)" }}>
              <User className="text-primary" size={48} />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Salesforce Technical Architect with over 15 years of experience designing and delivering enterprise-grade CRM solutions. I specialize in building scalable, secure, and cost-optimized Salesforce ecosystems that drive real business outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From fintech startups to Fortune 500 companies, I've architected solutions spanning Sales Cloud, Service Cloud, Experience Cloud, and complex multi-cloud integrations. My approach combines deep technical expertise with a strategic mindset to ensure every architecture decision aligns with business goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>

    {/* 5 Pillars */}
    <SectionWrapper id="pillars">
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
    <SectionWrapper id="expertise">
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

    {/* Process Timeline */}
    <SectionWrapper id="process">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          My <span className="gradient-text">Process</span>
        </h2>
        <p className="section-subtext">
          A battle-tested methodology that delivers results every time.
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, hsla(197,100%,44%,0.5), hsla(270,100%,65%,0.5))" }} />
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-start gap-6 relative"
            >
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 glow-border" style={{ background: "hsla(230, 30%, 12%, 0.9)" }}>
                <step.icon className="text-primary" size={22} />
              </div>
              <div className="glass-card p-5 flex-1">
                <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Security */}
    <SectionWrapper id="security">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Security <span className="gradient-text">First</span>
        </h2>
        <p className="section-subtext">
          Every architecture decision is made with security as a non-negotiable foundation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {securityItems.map((item, i) => (
          <GlassCard key={item.title} delay={i * 0.1}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "hsla(197, 100%, 44%, 0.1)" }}>
              <item.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>

    {/* Who I Work With */}
    <SectionWrapper id="clients">
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

    {/* Contact CTA */}
    <SectionWrapper id="contact">
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

export default Home;
