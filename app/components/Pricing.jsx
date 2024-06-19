import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLaptop, faUserGraduate, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Conference Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
          {/* Physical Participation */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FontAwesomeIcon icon={faUsers} className="w-[7rem] text-green-700 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-green-700">Physical Participation</h3>
            <p className="text-lg text-gray-700 mb-4">Join us in person at the conference venue.</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-700">Price:</span>
              <span className="text-lg font-bold text-green-700">N15,000/participant</span>
            </div>
            <a href="#" className="block text-center bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-300">Register Now</a>
          </div>
          
          {/* Virtual Participation */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FontAwesomeIcon icon={faLaptop} className="w-[7rem] text-green-700 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-green-700">Virtual Participation</h3>
            <p className="text-lg text-gray-700 mb-4">Participate remotely from anywhere.</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-700">Price:</span>
              <span className="text-lg font-bold text-green-700">N10,000/participant</span>
            </div>
            <a href="#" className="block text-center bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-300">Register Now</a>
          </div>

          {/* Student Participation */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGraduate} className="w-[7rem] text-green-700 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-green-700">Student Participation</h3>
            <p className="text-lg text-gray-700 mb-4">Special pricing for students.</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-700">Price:</span>
              <span className="text-lg font-bold text-green-700">N5,000/participant</span>
            </div>
            <a href="#" className="block text-center bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-300">Register Now</a>
          </div>

          {/* International Participation */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FontAwesomeIcon icon={faGlobe} className="w-[7rem] text-green-700 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-green-700">International Participation</h3>
            <p className="text-lg text-gray-700 mb-4">For participants outside Nigeria.</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-700">Price:</span>
              <span className="text-lg font-bold text-green-700">$100/participant</span>
            </div>
            <a href="#" className="block text-center bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-300">Register Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
