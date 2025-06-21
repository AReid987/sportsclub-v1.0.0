import React from 'react';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'AI Assistant', href: '#ai-assistant' },
      { label: 'Community', href: '#community' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'System Status', href: '/status' },
      { label: 'Bug Reports', href: '/bugs' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Responsible Gaming', href: '/responsible-gaming' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
      { label: 'Investors', href: '/investors' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/sportsclub', label: 'Twitter' },
  {
    icon: Instagram,
    href: 'https://instagram.com/sportsclub',
    label: 'Instagram',
  },
  { icon: Youtube, href: 'https://youtube.com/sportsclub', label: 'YouTube' },
  { icon: Mail, href: 'mailto:hello@sportsclub.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="section-container py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">Sportsclub</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Play Smart. Win Big. Transform your sports predictions with
              AI-powered insights and skill-based gaming.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Get the latest insights, tips, and feature updates delivered to
              your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-neutral-500 text-sm">
            © 2024 Sportsclub. All rights reserved.
          </div>
          <div className="flex gap-6 text-neutral-500 text-sm">
            <span>🇺🇸 Available in US</span>
            <span>🔒 SSL Secured</span>
            <span>✅ Licensed Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
