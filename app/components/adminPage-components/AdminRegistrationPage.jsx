'use client'

import React, { useState, useEffect } from 'react';
import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Loader, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';

const AdminRegistrationPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const registrationsPerPage = 10;

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const registrationsCollection = collection(db, 'Registration');
        const registrationsSnapshot = await getDocs(registrationsCollection);
        const registrationsList = registrationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRegistrations(registrationsList);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching registrations: ", err);
        setError("Failed to fetch registrations. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(registration =>
    Object.values(registration).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
console.log(filteredRegistrations)
  const indexOfLastRegistration = currentPage * registrationsPerPage;
  const indexOfFirstRegistration = indexOfLastRegistration - registrationsPerPage;
  const currentRegistrations = filteredRegistrations.slice(indexOfFirstRegistration, indexOfLastRegistration);

  const totalPages = Math.ceil(filteredRegistrations.length / registrationsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Registered Candidates</h1>
      
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search registrations..."
            className="w-full p-2 pl-10 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="h-8 w-8 animate-spin text-green-500" />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">No.</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                  <th className="py-2 px-4 border-b">Institution</th>
                  <th className="py-2 px-4 border-b">Registration Type</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRegistrations.map((registration, index) => (
                  <tr key={registration.id}>
                    <td className="py-2 px-4 border-b">{indexOfFirstRegistration + index + 1}</td>
                    <td className="py-2 px-4 border-b">{`${registration.firstName} ${registration.lastName}`}</td>
                    <td className="py-2 px-4 border-b">{registration.email}</td>
                    <td className="py-2 px-4 border-b">{registration.phoneNumber}</td>
                    <td className="py-2 px-4 border-b">{registration.institution}</td>
                    <td className="py-2 px-4 border-b">{registration.registrationType}</td>
                    <td className="py-2 px-4 border-b">
                      <button 
                        onClick={() => setSelectedRegistration(registration)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </>
      )}

      {selectedRegistration && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Registration Details</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  <strong>Name:</strong> {`${selectedRegistration.firstName} ${selectedRegistration.lastName}`}<br/>
                  <strong>Email:</strong> {selectedRegistration.email}<br/>
                  <strong>Phone:</strong> {selectedRegistration.phoneNumber}<br/>
                  <strong>Institution:</strong> {selectedRegistration.institution}<br/>
                  <strong>Department:</strong> {selectedRegistration.department}<br/>
                  <strong>Country:</strong> {selectedRegistration.country}<br/>
                  <strong>State:</strong> {selectedRegistration.state}<br/>
                  <strong>Registration Type:</strong> {selectedRegistration.registrationType}<br/>
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={() => setSelectedRegistration(null)}
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRegistrationPage;