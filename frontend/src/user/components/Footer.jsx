import React from "react";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Credentials", href: "/credentials" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Miscellaneous Systems", href: "/services/MiscellaneousSystems" },
    { name: "Electrical Systems", href: "/services/ElectricalSystems" },
    { name: "Fire Safety", href: "/services/Fpls" },
    { name: "HVAC Systems", href: "/services/HvacRefrigeration" },
    { name: "Low Voltage Systems", href: "/services/LowVoltageSystems" },
    { name: "Public Health Engineering", href: "/services/Phes" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Added horizontal padding for mobile and adjusted for larger screens */}
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-teal-400 mb-4">
                Sophic Designs pvt
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading MEP consultancy delivering innovative engineering
                solutions across INDIA and beyond since 2014.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Delhi Headquarters</p>
                    <p className="text-gray-400 text-sm">
                      A-123, Sector 63, Noida, Delhi NCR
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-400 mr-3" />
                  <a
                    href="tel:+911204567890"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    +91 120 4567890
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-400 mr-3" />
                  <a
                    href="mailto:info@sophicdesigns.com"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    info@sophicdesigns.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sophic Designs pvt . All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
