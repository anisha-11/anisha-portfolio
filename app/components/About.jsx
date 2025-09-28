import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {
//   const workExperience = [
//     { title: 'Tutoring', description: 'Provided maths tutoring for GCSE students.' },
//     { title: 'Web Dev Job', description: 'Built WordPress websites and handled client projects.' },
//     { title: 'Salesforce Dev', description: 'Currently working on Salesforce projects and automation.' },
//   ]

//   const volunteering = [
//     { title: 'Non-Profit', description: 'Contributed to local charity projects and events.' },
//     { title: 'Local Temple', description: 'Assisted with community events and workshops.' },
//   ]

//   const education = [
//     { title: 'GCSEs', description: 'Maths, English, Science, and others.' },
//     { title: 'A-Levels', description: 'Further Maths, Computer Science, Physics.' },
//     { title: 'Makers Academy', description: 'Completed intensive web development bootcamp.' },
//   ]

//     const renderCard = (item, index) => (
//     <div
//       key={index}
//       className='border border-[#22D3EE]/40 bg-white rounded-2xl px-8 py-8 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition duration-300'
//     >
//       <h3 className='text-lg font-semibold mb-3 text-[#8B5CF6]'>{item.title}</h3>
//       <p className='text-sm text-black'>{item.description}</p>
//     </div>
//   )

//   return (
//     <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
//       <h4 className='text-center mb-2 text-lg text-[#22D3EE]'>Introduction</h4>
//       <h2 className='text-center text-5xl font-bold text-[#8B5CF6]'>About me</h2>

//       <h3 className='text-2xl font-bold text-[#8B5CF6] mb-6'>Work Experience</h3>
//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
//           {workExperience.map(renderCard)}
//         </div>

//       <h3 className='text-2xl font-bold text-[#8B5CF6] mb-6'>Volunteering</h3>
//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
//           {volunteering.map(renderCard)}
//         </div>

//       <h3 className='text-2xl font-bold text-[#8B5CF6] mb-6'>Education</h3>
//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
//           {education.map(renderCard)}
//         </div>

//       <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//         <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
//         <Image src={assets.profile_picture} alt="" className='w-full rounded-3xl border-2 border-[#22D3EE]/30 shadow-lg shadow-[#8B5CF6]/20'/></div>
//         <div className='flex-1'>
//         <p className='mb-10 max-w-2xl'>My tech journey began at Makers Academy, where I discovered my passion for web development. I started as a 
//         Junior Web Developer, designing solutions tailored to clients’ needs and optimising websites for SEO. Driven by curiousity and a desire to 
//         grow, I transitioned into Salesforce, becoming a Certified Developer. Today, I collaborate with a dynamic team of building features that 
//         create real impact and drive meaningful business results.
//         </p>
//         <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
//           {infoList.map(({icon, iconDark, title, description}, index)=>(
//             <li className='border border-[22D3EE]/40 rounded-xl p-6 cursor-pointer hover:scale-105 transition duration-300 shadow-md shadow-black/40' key={index}>
//               <Image src={icon} alt={title} className='w-7 mt-3'/>
//               <h3 className='my-4 font-semibold text-[#8B5CF6]'>{title}</h3>
//               <p className='text-sm'>{description}</p>
//             </li>
//           ))}
//         </ul>

//         <h4 className='my-6 text-lg text-[#22D3EE] font-semibold'>Tools used</h4>

//         <ul className='flex items-center gap-3 sm:gap-5'>
//           {toolsData.map((tool, index)=>(
//             <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-[#8B5CF6] rounded-lg cursor-pointer hover:scale-110 transition duration-300 shadow-md shadow-black/40' key={index}>
//               <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
//             </li>
//           ))}
//         </ul>
//         </div>
//       </div>
//     </div>
//   )

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
      <div id='about' className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left: Profile Image */}
        {/* <div className="flex-shrink-0 w-64 md:w-80 mx-auto md:mx-0">
          <Image src={assets.profile_picture} alt="" width={320} height={320} className="rounded-2xl border-2 border-[#22D3EE]/30 shadow-lg shadow-[#8B5CF6]/20"/>
        </div> */}
        
        {/* Right: Content */}
        <div className="flex-1 space-y-8">
          
          {/* Intro */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Hi, I'm Anisha!</h2>
            <p>My tech journey began at Makers Academy, where I discovered my passion for web development. I started as a Junior Web Developer, designing solutions tailored to clients’ needs and optimising websites for SEO. Driven by curiousity and a desire to grow, 
            I transitioned into Salesforce, becoming a Certified Developer. Today, I collaborate with a dynamic team of building features that create real impact and drive meaningful business results.
            </p>
          </div>
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {experience.map((job, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-bold">{job.role}</h4>
                  <p className="text-gray-400">{job.company} | {job.duration}</p>
                  <p className="text-gray-300 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-bold">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.school} | {edu.duration}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Volunteering */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Volunteering</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {volunteering.map((vol, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-bold">{vol.role}</h4>
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
