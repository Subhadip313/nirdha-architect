import { motion } from "framer-motion";
import {
  Search, FileText, Code2, ShieldCheck, Rocket, RefreshCw,
  Lock, Key, Users, ClipboardList, Database
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionWrapper from "@/components/SectionWrapper";

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

const Process = () => (
  <div className="gradient-bg min-h-screen pt-16">
    {/* Timeline */}
    <SectionWrapper>
      <div className="text-center mb-14">
        <h2 className="section-heading">
          My <span className="gradient-text">Process</span>
        </h2>
        <p className="section-subtext">
          A battle-tested methodology that delivers results every time.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
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
    <SectionWrapper>
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
  </div>
);

export default Process;
