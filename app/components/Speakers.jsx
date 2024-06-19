const Speakers = () => {
    const speakers = [
      {
        name: "John Doe",
        title: "CEO, Example Company",
        image: "https://gaposa.vercel.app/sp1.jpeg",
        bio: "John Doe is the CEO of Example Company. With over 10 years of experience in the industry, he has led numerous successful projects and initiatives.",
      },
      {
        name: "Jane Smith",
        title: "Founder, ABC Corporation",
        image: "https://gaposa.vercel.app/sp2.jpeg",
        bio: "Jane Smith is the founder of ABC Corporation. She is a recognized expert in her field and has been featured in various publications.",
      },
      // Add more speaker objects as needed
    ];
  
    return (
      <div className="bg-gray-100 py-16 ">
                  <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Meet Our Speakers</h2>

        <div className="container mx-auto px-4 flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <img src={speaker.image} alt={speaker.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{speaker.title}</p>
                <p className="text-gray-700">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Speakers;
  