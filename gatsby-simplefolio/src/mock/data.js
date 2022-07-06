import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daniel Stenmark', // e.g: 'Name | Developer'
  lang: 'sv', // e.g: en, es, fr, jp
  description: 'Portfolio of Stockholm based copywriter Daniel Stenmark', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Daniel Stenmark',
  subtitle: "I'm the new copywriter in town.",
  cta: 'Who am I and what do I do?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Likes words. Sometimes sentences. Paragraphs - that's the limit.",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Characters in a row',
    info: 'I do a lot of awesome things. This is an example of one of them.',
    info2:
      'Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'A text I wrote',
    info: 'This is another example of an awesome thing I did.',
    info2:
      'Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Some words put together - by me',
    info: 'Third example! Incredible.',
    info2:
      'Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's talk",
  email: 'stenmark9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-stenmark-2a4903170',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/daniel.stenmark.71',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
