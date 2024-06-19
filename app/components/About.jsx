const About = () => {
    return (
      <div className="bg-green-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">About ICONST '24</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="md:col-span-1">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Conference" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-1">
              <p className="text-lg text-green-700 mb-4">
                The 2nd International Conference of Science and Technology (ICONST '24) focuses on the theme "Green Economy: A Multidimensional Approach to Sustainable Development."
              </p>
              <p className="text-lg text-green-700 mb-4">
                The conference aims to bring together researchers, practitioners, policymakers, and industry experts to discuss and explore innovative approaches to addressing environmental challenges and promoting sustainable development through green economy initiatives.
              </p>
              <p className="text-lg text-green-700 mb-4">
                Organized by the School of Science and Technology, Gateway (ICT) Polytechnic, Saapade, and sponsored by EWWAY ICT Polytechnic, ICONST '24 offers a platform for knowledge exchange, collaboration, and networking in the fields of science, technology, and sustainable development.
              </p>
              <p className="text-lg text-green-700 mb-4">
                Join us in advancing the cause of sustainability and shaping a greener, more sustainable future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  