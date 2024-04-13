'use client'

import { useState, useEffect } from 'react';

function AboutUs() {
  // Data for each team member
  const teamMembers = [
    {
      name: "Zeus",
      role: "Chairman and CEO",
      bio: "Texas Tech alumnus with a Master of Business Administration and a Master of Science in Data Science. Over 5 years of professional experience as a Data Scientist building data science systems for the public and private sector. Specializes in Data Science, Business Administration, AI Consulting, and Licensing Solutions.",
      skills: [
        "Data Science",
        "Business Administration",
        "AI Consulting",
        "Licensing Solutions"
      ]
    },
    {
      name: "Hades",
      role: "Chief Operations Officer",
      bio: "Bringing over 15 years of experience in developing custom software and machine learning solutions, Maurice T., a Texas Tech alumnus with an MBA and an M.S. in Data Science, has expertise in real estate, blockchain technology, and machine learning.",
      skills: [
        "Software Development",
        "Machine Learning",
        "Real Estate",
        "Blockchain Technology"
      ]
    },
    {
      name: "Poseidon",
      role: "Chief Technology Officer",
      bio: "With over 10 years of experience in developing custom software and PyTorch Large Language Models, Max D. provides educational content on developing Large Language Models through courses and YouTube videos. His expertise lies in Software Development, PyTorch, Large Language Models, Course Development, and YouTube Content Creation.",
      skills: [
        "Software Development",
        "PyTorch",
        "Large Language Models",
        "Course Development",
        "YouTube Content Creation"
      ]
    },

    {
      name: "Maurice T.",
      role: "Data Scientist",
      bio: "Maurice T., a Texas Tech alumnus with an MBA and a Master of Science in Data Science, brings over 5 years of experience in building Data Science systems for both public and private sector clients.",
      skills: [
        "Data Science",
        "Data Science Systems Development",
        "Public Sector Experience",
        "Private Sector Experience"
      ]
    },
    {
      name: "Max D.",
      role: "Software Developer and Machine Learning Engineer",
      bio: "With over 10 years of experience, Max D. specializes in developing custom software and machine learning solutions, delivering innovative solutions to various industries.",
      skills: [
        "Software Development",
        "Machine Learning",
        "Custom Solutions Development",
        "Innovative Solutions Delivery"
      ]
    },
    {
      name: "Elliot A.",
      role: "Software Engineer and Machine Learning Specialist",
      bio: "Elliot A. has over 5 years of experience developing custom software and machine learning solutions using JavaScript, Python, AWS Cloud Computing, ReactJS, NodeJS, PyTorch, and Docker. He is proficient in developing across multiple operating systems including Windows, MacOS, and LinuxOS.",
      skills: [
        "Software Development",
        "Machine Learning",
        "JavaScript",
        "Python",
        "AWS Cloud Computing",
        "ReactJS",
        "NodeJS",
        "PyTorch",
        "Docker",
        "Cross-Platform Development"
      ]
    }
  ];

  // State to track if client-side rendering has occurred
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mission and Vision statements
  const missionStatement = "We are a software and consulting company dedicated to leveraging AI to create innovative solutions that add value to our clients' businesses. Our mission is to empower organizations with AI-driven insights and technologies, enabling them to thrive in the digital age.";


  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-4 text-gray-100">About Us</h1>
          <h2 className="text-4xl md:text-2xl  mt-20 text-center  font-bold mb-4 text-gray-300">Our Mission</h2>
          <p className="text-md text-center mt-5 text-gray-200">{missionStatement}</p>
          {/* <p className="text-lg text-center mt-4 text-gray-800">{visionStatement}</p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-md 
            transition-transform transform hover:scale-105 border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">{member.name}</h2>
                <p className="text-sm md:text-base mb-2 font-bold text-gray-300">{member.role}</p>
                <p className="text-sm md:text-base mb-4 mt-4 text-gray-200">{member.bio}</p>
                <div className="flex flex-wrap">
                  {member.skills && member.skills.map((skill, index) => (
                    <span key={index} className="mr-2 mb-2 bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm capitalize">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
