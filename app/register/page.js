'use client'
import React, { useState, useRef } from 'react';
import { CheckCircle, XCircle, Upload, User, Mail, Phone, Building, MapPin, DollarSign, Loader, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { db, store } from '@/config/firebase';
import { collection, addDoc } from 'firebase/firestore/lite'; 
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    institution: '',
    department: '',
    country: '',
    state: '',
    registrationType: '',
    paymentReceipt: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      if (file.size > 3000000) { // 3 MB
        setSubmitError("File size exceeds 3MB limit");
        return;
      }
      
      setSelectedFile(file);
      setIsUploading(true);
      setSubmitError(null);

      const storageRef = ref(store, `/paymentReceipt/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(prog);
        }, 
        (err) => {
          console.error(err);
          setSubmitError("File upload failed. Please try again.");
          setIsUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFormData(prevData => ({
              ...prevData,
              paymentReceipt: url
            }));
            setFileUploaded(true);
            setIsUploading(false);
          });
        }
      );
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileUploaded(false);
    setFormData(prevData => ({
      ...prevData,
      paymentReceipt: null
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'Registration'), formData);
      setIsSubmitted(true);
      setSubmitError(null);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />

      
     
<div className="min-h-screen bg-green-100 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
  <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
    <div className="px-4 py-5 sm:p-6">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Register for ICONST &apos;24
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Join us in shaping a sustainable future
      </p>

      {isSubmitted ? (
        <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Registration Successful</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Thank you for registering for ICONST '24. We look forward to seeing you at the conference!</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            {[
              { name: 'firstName', label: 'First Name', type: 'text', icon: User },
              { name: 'lastName', label: 'Last Name', type: 'text', icon: User },
              { name: 'email', label: 'Email address', type: 'email', icon: Mail },
              { name: 'phoneNumber', label: 'Phone Number', type: 'tel', icon: Phone },
              { name: 'institution', label: 'Institution/Organization', type: 'text', icon: Building },
              { name: 'department', label: 'Department', type: 'text', icon: Building },
              { name: 'country', label: 'Country', type: 'text', icon: MapPin },
              { name: 'state', label: 'State', type: 'text', icon: MapPin },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="block w-full pl-10 sm:text-sm p-2 outline-none border-b-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder={field.label}
                    required
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Payment Receipt
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {isUploading ? (
                          <div className="flex flex-col items-center">
                            <Loader className="h-12 w-12 text-green-500 animate-spin" />
                            <p className="mt-2 text-sm text-gray-500">Uploading... {progress}%</p>
                          </div>
                        ) : selectedFile ? (
                          <div className="flex flex-col items-center">
                            <FileText className="h-12 w-12 text-green-500" />
                            <p className="mt-2 text-sm text-gray-500">{selectedFile.name}</p>
                            <button
                              onClick={removeFile}
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
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleFileUpload}
                                  ref={fileInputRef}
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, up to 3MB
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    {fileUploaded && <p className="mt-2 text-sm text-green-600">File uploaded successfully</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Complete Registration
                    </button>
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

export default RegistrationPage;