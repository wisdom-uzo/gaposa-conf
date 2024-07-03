'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Download, FileText, User, Mail, Phone, Building, Tag, PenTool } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CallForPapersPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(data);
      setIsSubmitted(true);
      setSubmitError(null);
    } catch (error) {
      setSubmitError("An error occurred. Please try again.");
    }
  };

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setFileUploaded(true);
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
    // Add more research areas as needed
  ];

  return (
<>
    <Header />
        <div className="min-h-screen bg-green-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                  Call for Papers - ICONST  &apos;24
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
                  <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Title of the Abstract *
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PenTool className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type="text"
                            id="title"
                            className={`block w-full p-3 border-2 pl-10 sm:text-sm border-gray-300 rounded-md ${
                              errors.title ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                            }`}
                            placeholder="Enter the title of your abstract"
                            {...register("title", { required: "Title is required" })}
                          />
                        </div>
                        {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                          Corresponding Author`&apos;`s Name *
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type="text"
                            id="authorName"
                            className={`block p-3 border-2  w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                              errors.authorName ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                            }`}
                            placeholder="Enter corresponding author's name"
                            {...register("authorName", { required: "Author's name is required" })}
                          />
                        </div>
                        {errors.authorName && <p className="mt-2 text-sm text-red-600">{errors.authorName.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Corresponding Author`&apos;`s Email *
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            className={`block p-3 border-2  w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                              errors.email ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                            }`}
                            placeholder="Enter corresponding author's email"
                            {...register("email", { 
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                              }
                            })}
                          />
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Corresponding Author`&apos;`s Phone Number *
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            className={`block p-3 border-2  w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                              errors.phone ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                            }`}
                            placeholder="Enter corresponding author's phone number"
                            {...register("phone", { required: "Phone number is required" })}
                          />
                        </div>
                        {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                          Corresponding Author`&apos;`s Institution *
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            type="text"
                            id="institution"
                            className={`block p-3 border-2  w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                              errors.institution ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                            }`}
                            placeholder="Enter corresponding author's institution"
                            {...register("institution", { required: "Institution is required" })}
                          />
                        </div>
                        {errors.institution && <p className="mt-2 text-sm text-red-600">{errors.institution.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="presentationType" className="block text-sm font-medium text-gray-700">
                          Presentation Type
                        </label>
                        <select
                          id="presentationType"
                          className="mt-1 block p-3 border-2  w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                          {...register("presentationType")}
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
                          className="mt-1 block w-full p-3 border-2  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                          {...register("researchArea")}
                        >
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
                            className={`block p-3 border-2  w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                              errors.keywords ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                            }`}
                            placeholder="Enter keywords (comma-separated)"
                            {...register("keywords", { required: "Keywords are required" })}
                          />
                        </div>
                        {errors.keywords && <p className="mt-2 text-sm text-red-600">{errors.keywords.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Download Abstract Template
                        </label>
                        <div className="mt-1">
                          <a
                            href="/path-to-your-template.docx"
                            download
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            <Download className="mr-2 h-5 w-5" />
                            Download Template
                          </a>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Attach the file of your abstract *
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  accept=".docx"
                                  {...register("abstractFile", { 
                                    required: "Abstract file is required",
                                    validate: {
                                      lessThan3MB: files => files[0]?.size < 3000000 || "File size must be less than 3MB",
                                      acceptedFormats: files => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(files[0]?.type) || "Only .docx files are allowed"
                                    }
                                  })}
                                  onChange={handleFileUpload}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              .docx up to 3MB
                            </p>

                            </div>
                        </div>
                        {fileUploaded && <p className="mt-2 text-sm text-green-600">File uploaded successfully</p>}
                        {errors.abstractFile && <p className="mt-2 text-sm text-red-600">{errors.abstractFile.message}</p>}
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Submit Abstract
                      </button>
                    </div>
                  </form>
                )}
                {submitError && (
                  <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
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