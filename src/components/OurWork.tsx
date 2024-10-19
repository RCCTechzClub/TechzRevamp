import ourWork1 from "./images/ourWork1.png";
import ourWork2 from "./images/ourWork2.png";
import ourWork3 from "./images/ourWork3.png";
import Image from 'next/image';
import { useTheme } from "next-themes";

const projects = [
    {
        title: 'Organize Tech and Non-Tech Events',
        description: '',
        icon: ourWork1,
    },
    {
        title: 'Introductory classes on most in-demand tools & tech stacks',
        description: '',
        icon: ourWork2,
    },
    {
        title: 'Share Tons of Resources on every tech domain',
        description: '',
        icon: ourWork3,
    },
];

const OurWork = () => {
  const { theme } = useTheme(); 


  const isDarkMode = theme === 'dark';
    return (
        <section className={`py-16 ${isDarkMode 
          ? 'bg-[#121828]  text-gray-100'
          : 'bg-opacity-100 text-gray-900'} font-sans text-white`}>
            <div className="container mx-auto flex flex-col items-center text-center">
                <h2 className="text-6xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-gradOne from-0% via-gradTwo via-53% to-gradThree to-100% font-bold">
                    ourWork = () =&gt; {'{  }'}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-10/12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`border border-white p-6 rounded-lg transition-transform transform hover:scale-105 flex flex-col items-center ${
                                isDarkMode ? 'bg-[#1E2A40]' : 'bg-transparent'
                            }`}
                        >
                            <Image 
                                src={project.icon} 
                                width={60} 
                                height={60} 
                                alt={project.title} 
                                className="mx-auto mb-1 h-40 w-40" 
                            />
                            <h3 className="text-2xl font-semibold my-1">{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
