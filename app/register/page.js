'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, XCircle, Upload, User, Mail, Phone, Building, MapPin, DollarSign } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const watchRegistrationType = watch("registrationType", "");

  const onSubmit = async (data) => {

    console.log(data)
    // try {
    //   await new Promise(resolve => setTimeout(resolve, 2000));
    //   console.log(data);
    //   setIsSubmitted(true);
    //   setSubmitError(null);
    // } catch (error) {
    //   setSubmitError("An error occurred. Please try again.");
    // }
  };

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setFileUploaded(true);
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
              Register for ICONST '24
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
              <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="absolute inset-y-0 left-0 pl-3 p- flex items-center pointer-events-none">
                          <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          className={`block w-full pl-10 sm:text-sm p-2 outline-none border-b-2 border-gray-300 rounded-md ${
                            errors[field.name] ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500'
                          }`}
                          placeholder={field.label}
                          {...register(field.name, { required: `${field.label} is required` })}
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="mt-2 text-sm text-red-600" id={`${field.name}-error`}>
                          {errors[field.name].message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="registrationType" className="block text-sm font-medium text-gray-700">
                    Registration Type
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <select
                      id="registrationType"
                      name="registrationType"
                      className="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                      {...register("registrationType", { required: "Registration type is required" })}
                    >
                      <option value="">Select registration type</option>
                      <option value="physical">Physical Participation (₦20,000)</option>
                      <option value="virtual">Virtual Participation (₦15,000)</option>
                      <option value="student">Student Registration (₦5,000)</option>
                      <option value="international">International Participation ($50)</option>
                    </select>
                  </div>
                  {errors.registrationType && (
                    <p className="mt-2 text-sm text-red-600">{errors.registrationType.message}</p>
                  )}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Payment Information</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>Please make payment to the following account:</p>
                        <p className="mt-1">Bank: Zenith Bank Plc</p>
                        <p>Account Number: 1226078857</p>
                        <p>Account Name: GAPOSA S&T Conference and Journal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Payment Receipt
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
                            {...register("paymentReceipt", { required: "Payment receipt is required" })}
                            onChange={handleFileUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  {fileUploaded && <p className="mt-2 text-sm text-green-600">File uploaded successfully</p>}
                  {errors.paymentReceipt && (
                    <p className="mt-2 text-sm text-red-600">{errors.paymentReceipt.message}</p>
                  )}
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