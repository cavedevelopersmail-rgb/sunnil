import React from "react";
import { ArrowRight, Award, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Systems That Work.
                <span className="block text-yellow-400 mt-2">
                  Expertise That Lasts.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
                Leading MEP consultancy delivering innovative engineering
                solutions across INDIA and beyond since 2014.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Established
                  </div>
                  <div className="text-teal-200 text-sm">2014</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Headquarters
                  </div>
                  <div className="text-teal-200 text-sm">Delhi NCR</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg col-span-2 sm:col-span-1">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Specialization
                  </div>
                  <div className="text-teal-200 text-sm">MEP Consultancy</div>
                </div>
              </div>
            </div>

            {/* Leadership Spotlight */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Leadership Excellence
              </h3>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-teal-900 font-bold text-lg sm:text-xl">
                  SJ
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    Mr. Sunnil Jha
                  </h4>
                  <p className="text-teal-200 text-sm sm:text-base">
                    Founder & Principal Consultant
                  </p>
                  <p className="text-xs sm:text-sm text-teal-300 mt-1">
                    36+ years of engineering excellence
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#projects"
                className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 px-5 py-3 text-sm sm:text-base"
              >
                View Our Projects
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 mx-2 sm:mx-0">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MEP Engineering"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
