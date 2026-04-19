import React, { useState } from "react";
import {
  Zap,
  Flame,
  Wind,
  Settings,
  Droplets,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const nagivate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Public Health Engineering Systems",
      icon: Droplets,
      description:
        "Design and planning of water supply, treatment, distribution, and drainage systems including STPs, WTPs, rainwater harvesting, solar water heating, and sanitation for buildings and infrastructure projects.",
      details: [
        "Water supply system design",
        "Sewage treatment plants (STPs)",
        "Water treatment plants (WTPs)",
        "Rainwater harvesting systems",
        "Solar water heating solutions",
      ],
      href: "/services/Phes",
    },
    {
      id: 2,
      title: "Fire Protection & Life Safety",
      icon: Flame,
      description:
        "Complete fire safety solutions including detection, suppression, alarm systems, hydrants, sprinklers, clean agent systems, evacuation plans, and compliance with national and international fire codes.",
      details: [
        "Fire detection systems",
        "Sprinkler system design",
        "Emergency evacuation planning",
        "Fire hydrant systems",
        "NFPA compliance consulting",
      ],
      href: "/services/Fpls",
    },
    {
      id: 3,
      title: "HVAC & Refrigeration",
      icon: Wind,
      description:
        "End-to-end design of heating, ventilation, air conditioning, and refrigeration systems for all building types—ranging from VRF systems to large chilled water plants—with a focus on comfort, efficiency, and indoor air quality.",
      details: [
        "Central air conditioning systems",
        "VRF system design",
        "Ventilation solutions",
        "Chilled water plants",
        "Indoor air quality management",
      ],
      href: "/services/HvacRefrigeration",
    },
    {
      id: 4,
      title: "Low Voltage Systems",
      icon: Shield,
      description:
        "Design of intelligent building systems like CCTV, access control, public address systems, IBMS, home automation, data communication, and integrated security for smart and secure infrastructure.",
      details: [
        "CCTV surveillance systems",
        "Access control solutions",
        "Building management systems (BMS)",
        "Structured cabling design",
        "Integrated security systems",
      ],
      href: "/services/LowVoltageSystems",
    },
    {
      id: 5,
      title: "Electrical Systems",
      icon: Zap,
      description:
        "Comprehensive electrical design including HT/LT power distribution, transformers, RMUs, lighting, earthing, lightning protection, emergency power systems, and UPS setups for safe and uninterrupted operations.",
      details: [
        "Power distribution systems",
        "Transformer design",
        "Lighting system design",
        "Emergency power solutions",
        "Lightning protection systems",
      ],
      href: "/services/ElectricalSystems",
    },
    {
      id: 6,
      title: "Miscellaneous Systems",
      icon: Settings,
      description:
        "Specialty systems such as elevators, fuel and gas storage/distribution (LPG, nitrogen, oxygen), medical gas pipelines, energy management systems, and integration of industrial utilities for complex facilities.",
      details: [
        "Elevator system design",
        "Medical gas pipeline systems",
        "Fuel storage solutions",
        "Energy management systems",
        "Industrial utility integration",
      ],
      href: "/services/MiscellaneousSystems",
    },
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleViewDetails = (href) => {
    nagivate(href);
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive MEP engineering solutions tailored to meet the unique
            requirements of every project, from concept to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {isExpanded && (
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => handleViewDetails(service.href)}
                        className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleViewDetails(service.href)}
                  className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Our team of experts can design tailored MEP solutions that
              perfectly match your project requirements and budget constraints.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-teal-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
