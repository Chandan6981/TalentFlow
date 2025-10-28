import React from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="flex flex-col gap-12 items-center py-16 lg:py-24 bg-white"
    >
      <div className="flex items-center gap-5">
        <span className="md:w-40 sm:w-25 w-12 h-[2px] bg-gradient-to-r from-white to-indigo-600/70 rounded-full"></span>
        <p className="border md:text-base sm:text-sm text-xs md:px-8 sm:px-6 px-4 py-2 rounded-full drop-shadow-md font-bold uppercase border-indigo-600 text-indigo-800">
          Our Platform
        </p>
        <span className="md:w-40 sm:w-25 w-12 h-[2px] bg-gradient-to-r from-indigo-600/70 to-white rounded-full"></span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Discover Trusted Partners for Smarter Workforce Planning
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Drive smarter hiring decisions with data-driven tools designed to attract and retain exceptional talent.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Efficient Job Management
                  </h3>
                  <p className="text-gray-600">
                    Simplify hiring by creating, managing, and tracking job postings all in one intuitive platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Candidate Workflow Management
                  </h3>
                  <p className="text-gray-600">
                    Optimize your recruitment process through powerful tracking, communication, and application management features.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Extensive Assessment Tools
                  </h3>
                  <p className="text-gray-600">
                    Build smarter assessments and make data-backed hiring decisions with ease.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={() => navigate("/hr-login")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Sign in for Demo
            </Button>
          </div>

          {/* Right Content - Placeholder for illustration/image */}
          <div className="w-full flex justify-items-center border-2 border-indigo-600 rounded-2xl overflow-hidden">
            <img className="" src="/about.png" alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
