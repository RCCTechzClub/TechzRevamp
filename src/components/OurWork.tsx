
import ourWork1 from ".//images/ourWork1.png"
import ourWork2 from ".//images/ourWork2.png"
import ourWork3 from ".//images/ourWork3.png"
import Image from 'next/image'

const projects = [
    {
      title: 'Organize Tech and Non-Tech Events',
      description: '',
      icon: ourWork1, // replace with your icon path
    },
    {
      title: 'Introductory classes on most in-demand tools & tech stacks',
      description: '',
      icon: ourWork2, // replace with your icon path
    },
    {
      title: 'Share Tons of Resources on every tech domain',
      description: '',
      icon: ourWork3, // replace with your icon path
    },
  ];
  
  const OurWork = () => {
    return (
      <section className="bg-bodyBg font-sans text-white py-16 min-h-screen min-w-screen">
        <div className="container mx-auto flex flex-col items-center justify-evenly text-center h-9/12 w-10/12">
          {/* Header */}
          <h2 className="text-6xl mb-24 bg-clip-text text-transparent bg-gradient-to-r from-gradOne from-0% via-gradTwo via-53% to-gradThree to-100% font-bold mb-10">
            const ourWork = () =&gt; {'{  }'}
          </h2>
  
          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 w-10/12 flex justify-between">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-transparent border border-white w-72 h-96 p-6 rounded-lg transition-transform transform hover:scale-105"
              >
                {/* Project Icon */}
                <div className="">
                  <Image src={project.icon} width={45} height={45} alt={project.title} className="mx-auto p-5 border border-white h-60 w-60" />
                </div>
  
                {/* Project Title */}
                <h3 className="text-2xl font-semibold my-2">{project.title}</h3>
  
              </div>
            ))}
          </div>
  
          
        </div>
      </section>
    );
  };
  
  export default OurWork;
  