import React from 'react';
import { Calendar, MapPin, Users, Leaf } from 'lucide-react';

const AboutConference = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About the Conference</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ICONST '24: Shaping a Sustainable Future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Join us for the International Conference on Science and Technology, focusing on green economy and sustainable development.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Date and Duration</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                August 19-22, 2024. Four days of insightful presentations, workshops, and networking opportunities.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Venue</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Gateway (ICT) Polytechnic Saapade, Ogun State, Nigeria. A hub of technological innovation in West Africa.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Participants</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Bringing together researchers, industry experts, policymakers, and students from around the globe to share insights on sustainable development.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Leaf className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Theme</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                "Green Economy: A Multidimensional Approach to Sustainable Development" - Exploring innovative solutions for a sustainable future.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 prose prose-green mx-auto lg:max-w-none">
          <p>
            The International Conference on Science and Technology (ICONST '24) is a premier forum for the presentation of new advances and research results in the fields of Science and Technology. The conference will bring together leading academic scientists, researchers and scholars in the domain of interest from around the world.
          </p>
          <p>
            Our focus on the Green Economy reflects the urgent need for sustainable solutions in today's world. We'll explore topics ranging from renewable energy and sustainable agriculture to green transportation and eco-friendly technological innovations.
          </p>
          <p>
            Join us for engaging keynote speeches, paper presentations, poster sessions, and workshops. Network with peers, share your research, and contribute to shaping a sustainable future for our planet.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Learn More About Sub-Themes
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
              Submit Your Abstract
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;