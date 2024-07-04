'use client'

import React, { useState, useRef } from 'react';
import { Upload, Download, FileText, User, Mail, Phone, Building, Tag, PenTool, Loader, XCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { db, store } from '@/config/firebase';
import { collection, addDoc } from 'firebase/firestore/lite'; 
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const CallForPapersPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    authorName: '',
    email: '',
    phone: '',
    institution: '',
    presentationType: 'oral',
    researchArea: '',
    keywords: '',
    abstractFile: null,
    fullPaperFile: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [abstractFileUploaded, setAbstractFileUploaded] = useState(false);
  const [fullPaperFileUploaded, setFullPaperFileUploaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAbstractUploading, setIsAbstractUploading] = useState(false);
  const [isFullPaperUploading, setIsFullPaperUploading] = useState(false);
  const [abstractProgress, setAbstractProgress] = useState(0);
  const [fullPaperProgress, setFullPaperProgress] = useState(0);
  const [selectedAbstractFile, setSelectedAbstractFile] = useState(null);
  const [selectedFullPaperFile, setSelectedFullPaperFile] = useState(null);
  const abstractFileInputRef = useRef(null);
  const fullPaperFileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = fileType === 'abstract' ? 3000000 : 10000000; // 3MB for abstract, 10MB for full paper
      if (file.size > maxSize) {
        setSubmitError(`${fileType} file size exceeds ${maxSize / 1000000}MB limit`);
        return;
      }
      
      const isAbstract = fileType === 'abstract';
      const setSelectedFile = isAbstract ? setSelectedAbstractFile : setSelectedFullPaperFile;
      const setIsUploading = isAbstract ? setIsAbstractUploading : setIsFullPaperUploading;
      const setProgress = isAbstract ? setAbstractProgress : setFullPaperProgress;
      const setFileUploaded = isAbstract ? setAbstractFileUploaded : setFullPaperFileUploaded;
      
      setSelectedFile(file);
      setIsUploading(true);
      setSubmitError(null);

      const storageRef = ref(store, `/${fileType}File/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(prog);
        }, 
        (err) => {
          console.error(err);
          setSubmitError(`${fileType} file upload failed. Please try again.`);
          setIsUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFormData(prevData => ({
              ...prevData,
              [`${fileType}File`]: url
            }));
            setFileUploaded(true);
            setIsUploading(false);
          });
        }
      );
    }
  };

  const removeFile = (fileType) => {
    const isAbstract = fileType === 'abstract';
    const setSelectedFile = isAbstract ? setSelectedAbstractFile : setSelectedFullPaperFile;
    const setFileUploaded = isAbstract ? setAbstractFileUploaded : setFullPaperFileUploaded;
    const fileInputRef = isAbstract ? abstractFileInputRef : fullPaperFileInputRef;

    setSelectedFile(null);
    setFileUploaded(false);
    setFormData(prevData => ({
      ...prevData,
      [`${fileType}File`]: null
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, 'abstract-data'), formData);
      setIsSubmitted(true);
      setSubmitError(null);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const researchAreas = [
    "Green Consciousness and Data Management",
    "Adaptability to Climate Change",
    "Green Transportation",
    "Green Technological Innovations",
    "Ecological Balance and Sustainability",
    "AI and Robotics for Green Economy",
    "Sustainable Engineering",
    "Green Energy Optimization",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-green-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Call for Papers - ICONST '24
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Submit your abstract for the International Conference on Science and Technology 2024
              </p>

              {isSubmitted ? (
                <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FileText className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Abstract Submitted Successfully</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Thank you for submitting your abstract. We will review it and get back to you soon.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                  <div className="space-y-6">
                    {[
                      { name: 'title', label: 'Title of the Abstract', type: 'text', icon: PenTool },
                      { name: 'authorName', label: "Corresponding Author's Name", type: 'text', icon: User },
                      { name: 'email', label: "Corresponding Author's Email", type: 'email', icon: Mail },
                      { name: 'phone', label: "Corresponding Author's Phone Number", type: 'tel', icon: Phone },
                      { name: 'institution', label: "Corresponding Author's Institution", type: 'text', icon: Building },
                    ].map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                          {field.label} *
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="block p-3 border-2 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            required
                          />
                        </div>
                      </div>
                    ))}

                    <div>
                      <label htmlFor="presentationType" className="block text-sm font-medium text-gray-700">
                        Presentation Type
                      </label>
                      <select
                        id="presentationType"
                        name="presentationType"
                        value={formData.presentationType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-3 border-2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                      >
                        <option value="oral">Oral Presentation</option>
                        <option value="poster">Poster Presentation</option>
                        <option value="virtual">Virtual Presentation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="researchArea" className="block text-sm font-medium text-gray-700">
                        Research Area
                      </label>
                      <select
                        id="researchArea"
                        name="researchArea"
                        value={formData.researchArea}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-3 border-2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                      >
                        <option value="">Select a research area</option>
                        {researchAreas.map((area, index) => (
                          <option key={index} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                        Keywords *
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Tag className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="text"
                          id="keywords"
                          name="keywords"
                          value={formData.keywords}
                          onChange={handleInputChange}
                          className="block p-3 border-2 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter keywords (comma-separated)"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Download Abstract Template
                      </label>
                      <div className="mt-1">
                        <a href="/path-to-your-template.docx"
                          download
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download Template
                        </a>
                      </div>
                    </div>

                    {/* Abstract File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Attach the file of your abstract *
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          {isAbstractUploading ? (
                            <div className="flex flex-col items-center">
                              <Loader className="h-12 w-12 text-green-500 animate-spin" />
                              <p className="mt-2 text-sm text-gray-500">Uploading... {abstractProgress}%</p>
                            </div>
                          ) : selectedAbstractFile ? (
                            <div className="flex flex-col items-center">
                              <FileText className="h-12 w-12 text-green-500" />
                              <p className="mt-2 text-sm text-gray-500">{selectedAbstractFile.name}</p>
                              <button
                                onClick={() => removeFile('abstract')}
                                className="mt-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              >
                                <XCircle className="h-4 w-4 mr-1" /> Remove
                              </button>
                            </div>
                          ) : (
                            <>
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="abstract-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-ring-green-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="abstract-upload"
                                    name="abstract-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={(e) => handleFileUpload(e, 'abstract')}
                                    ref={abstractFileInputRef}
                                    required
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                .docx up to 3MB
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      {abstractFileUploaded && <p className="mt-2 text-sm text-green-600">Abstract file uploaded successfully</p>}
                    </div>

{/* Full Paper File Upload */}
<div>
                      <label className="block text-sm font-medium text-gray-700">
                        Attach your full paper (optional)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          {isFullPaperUploading ? (
                            <div className="flex flex-col items-center">
                              <Loader className="h-12 w-12 text-green-500 animate-spin" />
                              <p className="mt-2 text-sm text-gray-500">Uploading... {fullPaperProgress}%</p>
                            </div>
                          ) : selectedFullPaperFile ? (
                            <div className="flex flex-col items-center">
                              <FileText className="h-12 w-12 text-green-500" />
                              <p className="mt-2 text-sm text-gray-500">{selectedFullPaperFile.name}</p>
                              <button
                                onClick={() => removeFile('fullPaper')}
                                className="mt-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              >
                                <XCircle className="h-4 w-4 mr-1" /> Remove
                              </button>
                            </div>
                          ) : (
                            <>
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="full-paper-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-ring-green-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="full-paper-upload"
                                    name="full-paper-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={(e) => handleFileUpload(e, 'fullPaper')}
                                    ref={fullPaperFileInputRef}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PDF or .docx up to 10MB
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      {fullPaperFileUploaded && <p className="mt-2 text-sm text-green-600">Full paper uploaded successfully</p>}
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Abstract'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
              {submitError && (
                <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <XCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{submitError}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallForPapersPage;