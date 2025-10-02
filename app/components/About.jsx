import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {

const experience = [
  { role: "Salesforce Developer", company: "Revolent Group on placement to YOOX-Net-a-Porter", duration: "Mar 2024 - Present", description: "I'm part of an agile team building and optimising custom functionality with Apex programming, ensuring clean, maintable and efficient code by working closely with product owners to translate business requirements into tailored features and solutions." },
  { role: "Junior Web Developer", company: "Flex Media", duration: "Oct 2023 - Feb 2024", description: "Created custom WordPress websites with a strong focus on UX deisgn principles and SEO optimisation to maximise performance and visibility. Collaborated firectly with clients to understand theor goals and translate their requirements into tailored digital solutions with a positive business impact." },
  { role: "Maths & English Tutor", company: "Explore Learning", duration: "Feb 2021 - Dec 2022", description: "Led group sessions and workshops with over 100 students across a range of ages and bilities. Organised, pre-planned and delivered lessons to a high standard, ensuring they were engaging, structured and adapted to individual learning needs." }
];

const education = [
  { degree: "Computer Software Engineering", school: "Makers Academy", duration: "Oct 2022 - Feb 2023", description: "Built real-life solutions to problems with effectively pair programming and leading team projects."},
  { degree: "A-Levels", school: "Plumstead Manor Sixth Form", duration: "Sept 2020 - Jun 2022", description: "Maths, Economics & Financial Studies"},
  { degree: "GCSE's", school: "Plumstead Manor School", duration: "Sept 2025 - Jul 2020", description: "Maths, Statistics, English Lang & Lit, Triple Science, History, French, Business & Gujarati"}
];

const volunteering = [
  { role: "Co-ordinator & Physical Activities Team Lead", organization: "Hindu Swayamsevak Sangh", duration: "Jun 2009 - Present", description: "A not-for-profit organisation focusing on character development by instilling values based on Hindu culture."},
  { role: "Marketing & Promotion Team Member", organization: "SKSS Temple Woolwich", duration: "Jan 2021 - Present", description: "Leading festivals and using the art of poster making to create engaging promotional content for our social media accounts and website."}
];

  return (
    <section className=" bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white py-20 px-6 md:px-20">
      <div id='about' className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Right: Content */}
        <div className='flex-1 space-y-8'>
          
          {/* Intro */}
          <div className='flex flex-col gap-6 text-center w-full'>
            <h1 className='text-5xl font-bold mb-6 text-center'>About Me</h1>
            <h2 className="text-3xl font-bold text-center md:text-left">Hi, I'm Anisha!</h2>
            <p className='text-center md:text-left w-full'>My tech journey began at Makers Academy, where I discovered my passion for web development. I started as a Junior Web Developer, designing solutions tailored to clients’ needs and optimising websites for SEO. Driven by curiousity and a desire to grow, 
            I transitioned into Salesforce, becoming a Certified Developer. Today, I collaborate with a dynamic team of building features that create real impact and drive meaningful business results.
            </p>
          </div>
          
          {/* Experience */}
          <div className='w-full'>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Work Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((job, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 text-center md:text-left">
                  <h4 className="font-bold text-[#06B6D4]">{job.role}</h4>
                  <p className="text-gray-400 ">{job.company} | {job.duration}</p>
                  <p className="text-gray-300 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 text-center md:text-left">
                  <h4 className="font-bold text-[#06B6D4]">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.school} | {edu.duration}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Volunteering */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Volunteering</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteering.map((vol, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 text-center md:text-left">
                  <h4 className="font-bold text-[#06B6D4]">{vol.role}</h4>
                  <p className="text-gray-400">{vol.organization} | {vol.duration}</p>
                  <p className="text-gray-300 mt-2">{vol.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About
