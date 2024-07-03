import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const RegistrationInformation = () => {
  const registrationOptions = [
    {
      type: "Physical Participation",
      price: "₦20,000",
      benefits: [
        "Full access to all conference sessions",
        "Conference materials and badge",
        "Lunch and refreshments",
        "Networking opportunities",
        "Certificate of participation"
      ]
    },
    {
      type: "Virtual Participation",
      price: "₦15,000",
      benefits: [
        "Live streaming of all conference sessions",
        "Digital conference materials",
        "Online networking opportunities",
        "Digital certificate of participation"
      ]
    },
    {
      type: "Student Registration",
      price: "₦5,000",
      benefits: [
        "Access to all conference sessions",
        "Conference materials",
        "Lunch and refreshments (for physical attendees)",
        "Networking opportunities",
        "Certificate of participation"
      ]
    },
    {
      type: "International Participation",
      price: "$50",
      benefits: [
        "Virtual access to all conference sessions",
        "Digital conference materials",
        "Online networking opportunities",
        "Digital certificate of participation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Join Us at ICONST  &apos;24</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Registration Information
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the registration option that best suits your needs
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {registrationOptions.map((option, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{option.type}</h3>
                <div className="mt-2 text-3xl font-bold text-green-600">{option.price}</div>
                <ul className="mt-4 space-y-2">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-2 text-sm text-gray-500">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong className="font-medium text-yellow-800">Early Bird Discount:</strong> Register before August 12, 2024, to enjoy a 15% discount on all registration types.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">For group registrations or any queries, please contact:</p>
          <a href="mailto:gaposastconf@gmail.com" className="mt-2 text-lg font-medium text-green-600 hover:text-green-500">
            gaposastconf@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationInformation;