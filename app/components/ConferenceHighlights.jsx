import { FaCalendarAlt, FaMapMarkerAlt, FaUserGraduate, FaGlobeAmericas } from 'react-icons/fa';

const ConferenceHighlights = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Conference Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-3xl mr-4 text-blue-500" />
              <h3 className="text-2xl font-bold">Dates</h3>
            </div>
            <p className="text-lg">
              Monday 19th Aug. to Thursday 22nd Aug., 2024
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-3xl mr-4 text-blue-500" />
              <h3 className="text-2xl font-bold">Location</h3>
            </div>
            <p className="text-lg">
              Ogun State, Nigeria
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaUserGraduate className="text-3xl mr-4 text-blue-500" />
              <h3 className="text-2xl font-bold">Participants</h3>
            </div>
            <p className="text-lg">
              N20,000/participant (Physical)
              <br />
              N15,000/participant (Virtual)
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaGlobeAmericas className="text-3xl mr-4 text-blue-500" />
              <h3 className="text-2xl font-bold">International</h3>
            </div>
            <p className="text-lg">
              $50/participant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceHighlights;