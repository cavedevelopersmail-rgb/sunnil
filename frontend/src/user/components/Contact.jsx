import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const { createContact } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Call the createContact API method
      const response = await createContact(formData);
      console.log(response);
      if (response.data.success) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitError(response.data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      setSubmitError(
        error.response?.data?.message ||
          error.message ||
          "Failed to submit contact form"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      id: 1,
      name: "Delhi Headquarters",
      address: "A-123, Sector 63, Noida, Delhi NCR - 201301",
      phone: "+91 120 4567890",
      email: "delhi@sophicdesigns.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      id: 2,
      name: "Faridabad Office",
      address: "Plot No. 45, Industrial Area, Faridabad, Haryana - 121003",
      phone: "+91 129 2345678",
      email: "faridabad@sophicdesigns.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  const services = [
    "MEP Design",
    "Electrical Systems",
    "Fire Safety",
    "HVAC Systems",
    "Building Automation",
    "Plumbing Systems",
    "Specialty Systems",
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project? Our team of experts is here to
            help you achieve your engineering goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  />
                </div>

                {/* Submit button and status messages */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-lg font-medium ${
                    isSubmitting
                      ? "bg-teal-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700"
                  } text-white transition-colors`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                    Thank you for your submission! We will contact you soon.
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {offices.map((office) => (
              <div key={office.id} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {office.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-3" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-gray-600 hover:text-teal-600"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-3" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-600 hover:text-teal-600"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-teal-600 mr-3" />
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Contact */}
            <div className="bg-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-teal-100 mb-4">
                Need immediate assistance? Call our hotline for urgent project
                inquiries.
              </p>
              <a
                href="tel:+911204567890"
                className="block w-full bg-white text-teal-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                +91 120 4567890
              </a>
            </div>
          </div>
        </div>
        
        
                {/* Embedded Map */}
        <section className="py-16 bg-gray-50 mt-2">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Offices
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Delhi Office</h3>
                <p className="mb-4">
                  179-A, 1st Floor, Jeewan Nagar, New Delhi - 110014
                </p>
                <div className="overflow-hidden rounded-xl shadow-lg h-80">
                  <iframe
                    title="Delhi Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.362300144828!2d77.21515861508215!3d28.62097698242201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a6b85d4a0f%3A0x3e3a1d8e0e8b0b1d!2s179-A%2C%20Jeewan%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110014!5e0!3m2!1sen!2sin!4v1622020000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Faridabad Office</h3>
                <p className="mb-4">
                  H. No. 351, Sector-48, Faridabad, Haryana - 121001
                </p>
                <div className="overflow-hidden rounded-xl shadow-lg h-80">
                  <iframe
                    title="Faridabad Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.12980439491!2d77.35831891533147!3d28.63290498237219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee2a6b85d4a0f%3A0x3e3a1d8e0e8b0b1d!2sH%20No%20351%2C%20Sector%2048%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1622020000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
