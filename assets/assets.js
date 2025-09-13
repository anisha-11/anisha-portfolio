import profile_picture from './profile-picture.jpeg';
import logo from './circle-logo.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import slack from './slack.png';
import table_plus from './tableplus.png';
import vs_code from './vs-code.png';

export const assets = {
  profile_picture,
  logo
};

export const workCards = [
  {
    title: 'Project 1',
    description: 'Website',
    bgImage: '/circle-logo.png'
  },
  
  {
    title: 'Project 2',
    description: 'App',
    bgImage: '/circle-logo.png'
  },

  {
    title: 'Project 3',
    description: 'Mobile App',
    bgImage: '/circle-logo.png'
  },
];

export const serviceCards = [
  { icon: assets.logo, title: 'Title 1', description: 'Description 1..', link: ''},
  { icon: assets.logo, title: 'Title 2', description: 'Description 2..', link: ''},
  { icon: assets.logo, title: 'Title 3', description: 'Description 3..', link: ''},
  { icon: assets.logo, title: 'Title 4', description: 'Description 4..', link: ''},
];

export const infoList = [
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React, Next.js'},
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Education', description: 'Makers Academy'},
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'More than 20 repos on github'},
];

export const toolsData = [
  assets.slack, assets.table_plus, assets.vs_code
];