"use client";
import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Audit & Assurance", href: "/services#audit" },
    { name: "Tax & Regulatory", href: "/services#tax" },
    { name: "Advisory & Strategy", href: "/services#advisory" },
    { name: "Digital Transformation", href: "/services#digital" },
    { name: "ESG & Sustainability", href: "/services#esg" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "All Insights", href: "/insights" },
    { name: "Case Studies", href: "/insights?category=case-study" },
    { name: "Whitepapers", href: "/insights?category=whitepaper" },
    { name: "Client Portal", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@stratedge.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
                className="relative w-10 h-10 rounded-lg bg-linear-to-br from-primary via-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20"
              >
                <motion.span
                  className="text-primary-foreground font-bold text-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  S
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                StratEdge
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Future-ready advisory at the intersection of finance, technology,
              and business transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StratEdge | All rights reserved.
              <p className="text-sm text-muted-foreground">
                Made by{" "}
                <motion.a
                  href="https://www.linkedin.com/in/zufiyaidrisi9797/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-primary hover:text-accent font-medium transition-colors inline-flex items-center gap-1"
                >
                  Zufiya Idrisi
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.span>
                </motion.a>
              </p>
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
