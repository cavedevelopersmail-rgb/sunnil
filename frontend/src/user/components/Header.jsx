import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
// Import all images
import logo from "../../assets/logo.png";
import water from "../../assets/water.jpg";
import fire from "../../assets/fire.jpg";
import cooling from "../../assets/cooling.jpg";
import lowVolt from "../../assets/lowVolt.jpg";
import electricvolt from "../../assets/electricvolt.jpg";
import milsystem from "../../assets/milsystem.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const servicesData = [
    {
      title: "Public Health Engineering Systems",
      description:
        "Design and planning of water supply, treatment, distribution, and drainage systems including STPs, WTPs, rainwater harvesting, solar water heating, and sanitation for buildings and infrastructure projects.",
      href: "/services/Phes",
      image: water,
    },
    {
      title: "Fire Protection & Life Safety",
      description:
        "Complete fire safety solutions including detection, suppression, alarm systems, hydrants, sprinklers, clean agent systems, evacuation plans, and compliance with national and international fire codes.",
      href: "/services/Fpls",
      image: fire,
    },
    {
      title: "HVAC & Refrigeration",
      description:
        "End-to-end design of heating, ventilation, air conditioning, and refrigeration systems for all building types—ranging from VRF systems to large chilled water plants—with a focus on comfort, efficiency, and indoor air quality.",
      href: "/services/HvacRefrigeration",
      image: cooling,
    },
    {
      title: "Low Voltage Systems",
      description:
        "Design of intelligent building systems like CCTV, access control, public address systems, IBMS, home automation, data communication, and integrated security for smart and secure infrastructure.",
      href: "/services/LowVoltageSystems",
      image: lowVolt,
    },
    {
      title: "Electrical Systems",
      description:
        "Comprehensive electrical design including HT/LT power distribution, transformers, RMUs, lighting, earthing, lightning protection, emergency power systems, and UPS setups for safe and uninterrupted operations.",
      href: "/services/ElectricalSystems",
      image: electricvolt,
    },
    {
      title: "Miscellaneous Systems",
      description:
        "Specialty systems such as elevators, fuel and gas storage/distribution (LPG, nitrogen, oxygen), medical gas pipelines, energy management systems, and integration of industrial utilities for complex facilities.",
      href: "/services/MiscellaneousSystems",
      image: milsystem,
    },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      megaMenu: true,
      dropdownItems: servicesData,
    },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Leaders", href: "/leaders" },
    { name: "Blogs", href: "/allBlogs" },
    { name: "Credentials", href: "/credentials" },
    { name: "Contact", href: "/contact" },
  ];

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Added container padding for desktop spacing */}
      <div className="container-custom px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pl-2 lg:pl-0">
            {/* Add max height and width to control logo size */}

            <Link to="/">
              <img
                src={logo}
                alt="Sophic Designs pvt Logo"
                className="h-[30px] w-auto object-contain"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => {
                  clearTimeout(timeoutRef.current);
                  setActiveDropdown(item.name);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 300);
                }}
              >
                {item.name === "Contact" ? (
                  // Added right margin to contact button
                  <Link
                    to={item.href}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 group mr-2"
                  >
                    {item.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 py-2 px-1 ${
                      index === 0 ? "ml-2" : ""
                    }`}
                  >
                    {item.name}
                    {(item.dropdown || item.megaMenu) && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.megaMenu && activeDropdown === item.name && (
                  <div
                    ref={dropdownRef}
                    className="fixed top-16 left-0 w-screen h-[50vh] bg-gradient-to-r from-white via-slate-50 to-white border-t border-gray-200 shadow-2xl z-50 overflow-y-auto"
                    onMouseEnter={() => {
                      clearTimeout(timeoutRef.current);
                      setActiveDropdown(item.name);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 300);
                    }}
                    style={{
                      opacity: activeDropdown === item.name ? 1 : 0,
                      transform: `translateY(${
                        activeDropdown === item.name ? 0 : "-10px"
                      })`,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {item.dropdownItems.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="group block p-4 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                          onClick={closeAllMenus}
                        >
                          <div className="h-40 w-full bg-gray-100 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-teal-600 mb-1 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 font-light leading-relaxed line-clamp-3">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Dropdown Menu */}
                {item.dropdown &&
                  !item.megaMenu &&
                  activeDropdown === item.name && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      onMouseEnter={() => {
                        clearTimeout(timeoutRef.current);
                        setActiveDropdown(item.name);
                      }}
                      onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 300);
                      }}
                      style={{
                        opacity: activeDropdown === item.name ? 1 : 0,
                        transform: `translateY(${
                          activeDropdown === item.name ? 0 : "-10px"
                        })`,
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                          onClick={closeAllMenus}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2 px-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 pb-3 last:border-b-0"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.href}
                      className={`block py-3 ${
                        item.name === "Contact"
                          ? "bg-blue-600 text-white px-4 py-3 rounded-lg w-full text-center"
                          : "text-gray-700 hover:text-teal-600 font-medium"
                      }`}
                      onClick={closeAllMenus}
                    >
                      {item.name}
                    </Link>

                    {(item.dropdown || item.megaMenu) &&
                      item.name !== "Contact" && (
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.name ? null : item.name
                            )
                          }
                          className="p-2 ml-2"
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              mobileDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                  </div>

                  {/* Mobile Services Dropdown - Added scrollbar */}
                  {item.megaMenu &&
                    mobileDropdown === item.name &&
                    item.name !== "Contact" && (
                      <div
                        className="ml-2 mt-2 space-y-3 pr-2 overflow-y-auto max-h-[40vh] transition-all duration-300 custom-scrollbar"
                        style={{
                          maxHeight:
                            mobileDropdown === item.name ? "40vh" : "0",
                        }}
                      >
                        {item.dropdownItems.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="block p-3 bg-gray-50 rounded-lg transition-all duration-300"
                            onClick={closeAllMenus}
                          >
                            <h3 className="font-semibold text-gray-900">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}

                  {/* Regular Mobile Dropdown - Added scrollbar */}
                  {item.dropdown &&
                    !item.megaMenu &&
                    mobileDropdown === item.name &&
                    item.name !== "Contact" && (
                      <div
                        className="ml-4 space-y-1 pr-2 overflow-y-auto max-h-[40vh] transition-all duration-300 custom-scrollbar"
                        style={{
                          maxHeight:
                            mobileDropdown === item.name ? "40vh" : "0",
                        }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-teal-600 bg-gray-50 rounded transition-colors duration-200"
                            onClick={closeAllMenus}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
