'use client'

import React, { useState, useEffect } from 'react';
import { db } from '@/config/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';
import { Loader, Search, ChevronLeft, ChevronRight, FileText, Download, Trash2 } from 'lucide-react';

const AdminPaperPage = () => {
  const [papers, setPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const papersPerPage = 10;

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const papersCollection = collection(db, 'abstract-data');
      const papersSnapshot = await getDocs(papersCollection);
      const papersList = papersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPapers(papersList);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching papers: ", err);
      setError("Failed to fetch papers. Please try again later.");
      setIsLoading(false);
    }
  };

  const deletePaper = async (id) => {
    if (window.confirm("Are you sure you want to delete this paper? This action cannot be undone.")) {
      setIsDeleting(true);
      try {
        await deleteDoc(doc(db, 'abstract-data', id));
        setPapers(papers.filter(paper => paper.id !== id));
        setSelectedPaper(null);
        alert("Paper deleted successfully");
      } catch (err) {
        console.error("Error deleting paper: ", err);
        alert("Failed to delete paper. Please try again.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const filteredPapers = papers.filter(paper =>
    Object.values(paper).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastPaper = currentPage * papersPerPage;
  const indexOfFirstPaper = indexOfLastPaper - papersPerPage;
  const currentPapers = filteredPapers.slice(indexOfFirstPaper, indexOfLastPaper);

  const totalPages = Math.ceil(filteredPapers.length / papersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Submitted Papers</h1>
      
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search papers..."
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
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Author</th>
                  <th className="py-2 px-4 border-b">Research Area</th>
                  <th className="py-2 px-4 border-b">Presentation Type</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPapers.map((paper, index) => (
                  <tr key={paper.id}>
                    <td className="py-2 px-4 border-b">{indexOfFirstPaper + index + 1}</td>
                    <td className="py-2 px-4 border-b">{paper.title}</td>
                    <td className="py-2 px-4 border-b">{paper.authorName}</td>
                    <td className="py-2 px-4 border-b">{paper.researchArea}</td>
                    <td className="py-2 px-4 border-b">{paper.presentationType}</td>
                    <td className="py-2 px-4 border-b">
                      <button 
                        onClick={() => setSelectedPaper(paper)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        View
                      </button>
                      <a 
                        href={paper.abstractFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        Download
                      </a>
                      <button 
                        onClick={() => deletePaper(paper.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        disabled={isDeleting}
                      >
                        {isDeleting ? 'Deleting...' : 'Delete'}
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

      {selectedPaper && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Paper Details</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  <strong>Title:</strong> {selectedPaper.title}<br/>
                  <strong>Author:</strong> {selectedPaper.authorName}<br/>
                  <strong>Email:</strong> {selectedPaper.email}<br/>
                  <strong>Phone:</strong> {selectedPaper.phone}<br/>
                  <strong>Institution:</strong> {selectedPaper.institution}<br/>
                  <strong>Research Area:</strong> {selectedPaper.researchArea}<br/>
                  <strong>Presentation Type:</strong> {selectedPaper.presentationType}<br/>
                  <strong>Keywords:</strong> {selectedPaper.keywords}<br/>
                </p>
              </div>
              <div className="items-center px-4 py-3">
                
                 <a href={selectedPaper.abstractFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 inline-flex items-center justify-center mb-2"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Abstract
                </a>
                {selectedPaper.fullPaperFile && (
                  
                   <a href={selectedPaper.fullPaperFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 inline-flex items-center justify-center mb-2"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Paper
                  </a>
                )}
                <button
                  onClick={() => deletePaper(selectedPaper.id)}
                  className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 inline-flex items-center justify-center mb-2"
                  disabled={isDeleting}
                >
                  <Trash2 className="mr-2 h-5 w-5" />
                  {isDeleting ? 'Deleting...' : 'Delete Paper'}
                </button>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
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

export default AdminPaperPage;