import profile_picture from './profile-picture.jpeg';
import circle_logo from './circle-logo.png';
import logo from './logo.png';
import logo_white from './logo-white.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import slack from './slack.png';
import table_plus from './tableplus.png';
import vs_code from './vs-code.png';
import chitter from './chitter.png';
import acebook from './acebook-new.png';
import reel_places from './reelplaces-ss.png';

export const assets = {
  profile_picture,
  circle_logo,
  logo,
  logo_white,
  project_icon,
  project_icon_dark,
  slack,
  table_plus,
  vs_code,
  chitter,
  acebook,
  reel_places
};

export const workCards = [
  {
    title: 'Project 1',
    description: 'Website',
    bgImage: '/logo.png'
  },
  
  {
    title: 'Project 2',
    description: 'App',
    bgImage: '/logo.png'
  },

  {
    title: 'Project 3',
    description: 'Mobile App',
    bgImage: '/logo.png'
  },
];

export const serviceCards = [
  { icon: assets.logo, title: 'Title 1', description: 'Description 1..', link: ''},
  { icon: assets.logo, title: 'Title 2', description: 'Description 2..', link: ''},
  { icon: assets.logo, title: 'Title 3', description: 'Description 3..', link: ''},
  { icon: assets.logo, title: 'Title 4', description: 'Description 4..', link: ''},
];

export const infoList = [
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Languages', description: 'Apex, Ruby, HTML, CSS, JavaScript, React, SQL, Wordpress, Next.js'},
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Education', description: 'GCSEs, ALevels, Makers Academy, Salesforce Trailheads'},
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'More than 25 repos on github'},
];

export const toolsData = [
  assets.slack, assets.table_plus, assets.vs_code
];

// export const workExperience = [
//   { title: 'Tutoring', description: 'Provided maths tutoring for GCSE students.' },
//   { title: 'Web Dev Job', description: 'Built WordPress websites and handled client projects.' },
//   { title: 'Salesforce Dev', description: 'Currently working on Salesforce projects and automation.' },
// ];

// export const volunteering = [
//   { title: 'Non-Profit', description: 'Contributed to local charity projects and events.' },
//   { title: 'Local Temple', description: 'Assisted with community events and workshops.' },
// ];

// export const education = [
//   { title: 'GCSEs', description: 'Maths, English, Science, and others.' },
//   { title: 'A-Levels', description: 'Further Maths, Computer Science, Physics.' },
//   { title: 'Makers Academy', description: 'Completed intensive web development bootcamp.' },
// ];