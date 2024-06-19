import { FaCalendarDay, FaRegClock, FaRegCheckCircle } from 'react-icons/fa';

const Program = () => {
  const programSchedule = [
    {
      day: "Arrival",
      date: "Monday, January 19th, 2024",
      events: ["Arrival and registration"]
    },
    {
      day: "Day 1",
      date: "Tuesday, January 20th, 2024",
      events: [
        "08:00 AM - Registration",
        "09:00 AM - Opening Ceremony",
        "10:30 AM - Keynote Speech",
        "01:00 PM - Technical Session 1",
        "03:30 PM - Technical Session 2",
        "07:00 PM - Networking Dinner"
      ]
    },
    {
      day: "Day 2",
      date: "Wednesday, January 21st, 2024",
      events: [
        "09:00 AM - Technical Session 3",
        "11:30 AM - Technical Session 4",
        "02:00 PM - Panel Discussion",
        "04:30 PM - Closing Remarks"
      ]
    },
    {
      day: "Departure",
      date: "Thursday, January 22nd, 2024",
      events: ["Departure"]
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-700">Conference Program</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programSchedule.map((day, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-green-600 flex items-center">
              <FaCalendarDay className="mr-2" /> {day.day}
            </h3>
            <p className="italic mb-4 text-gray-600 flex items-center">
              <FaRegClock className="mr-2" /> {day.date}
            </p>
            <ul className="list-none">
              {day.events.map((event, idx) => (
                <li key={idx} className="text-lg mb-2 flex items-center text-gray-800">
                  <FaRegCheckCircle className="mr-2 text-green-500" /> {event}
                </li>
              ))}
            </ul>
            {day.day !== "Departure" && (
              <div className="mt-6 text-center">
                <a href="#" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Add to Calendar</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
