// gitprofile.config.js

const config = {
  github: {
    username: 'dlrow-olleh', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['dlrow-olleh.github.io', 'myWebsiteTake2','myPortfolio'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'linkedin.com/in/mahima-beltur',
    //twitter: 'arif_szn',
   // mastodon: 'arifszn@mastodon.social',
    //facebook: '',
    //instagram: '',
    //youtube: '', // example: 'pewdiepie'
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    website: 'https://dlrow-olleh.github.io',
    phone: '',
    email: 'mahimabeltur@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1WyXA3ulayPNV2ntpVWgdN6fplLoEMdek/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'C++',
    'React.js',
    'Node.js',
    'Flask.js',
    'JavaScript',
    'OpenCV',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Indico Data',
      position: 'Software Engineering Intern- R&D',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'https://www.indicodata.ai',
      description: 'test description'
    },
    {
      company: 'Johnson & Johnson',
      position: 'Senior Capstone',
      from: 'September 2021',
      to: 'May 2022',
      //companyLink: 'https://example.com',
      description: 'test description'
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Olin College of Engineering',
      degree: 'B.S. Engineering, Conc. Computing',
      from: '2018',
      to: '2023',
      positions: 'TA Software Design, TA Iterate for Social Good, TA Affordable Design & Entrepreneurship, Department of Wellness Student Rep, Resident Resource, IT Student Worker',
      activities: 'Research in Underwater Robotics and Human-Interaction with Robotics, AHS Concentration in Writing'
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Underwater Autonomous Robot Research',
      description:[
        'Successfully led a team of four to re-design and overhaul existing software and electrical systems for the autonomous un- derwater robotic profiler resulting in double the range in operating speeds, and achieved a control precision of 0.5cm in deep water. The new system specifications were presented at the Oceans Conference 2023 in Limerick\n',
        'Designed a data processing and planning algorithm leveraging reinforcement learning methods to optimize environmental estimation from sparse data, enabling continuous monitoring of the aquaculture environment while reducing data collection by approximately 80% thus enabling efficient power and energy consumption in robot and longer deployment periods.',
      ],
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ocap-lair-olin.github.io/',
    },
    {
      title: 'Forms Builder Prototyoe- Indico Internship',
      description:
        '- Designed, developed, and tested an automatic form processing tool prototype to reduce manual data labeling time more than 50% by using machine learning from previously analyzed forms to generate predictions identifying the layout, fields, and input data types. \n - Designed and integrated the front-end and back-end of the prototype with Indico’s proprietary API for maximizum accuracy in OCR and smooth integration.\n- Successfully identified and leveraged optimal open-source third-party services such as OpenCV, Flask, and scikit-learn to reduce development costs and maximize system performance.\n - Identified and collaborated with key stakeholders to make informed design decisions to increase user satisfaction measured through user interviews.\n - Facilitated seamless communication and collaboration among cross-functional teams and external stakeholders, contributing to productive discussions regarding design and product direction, reducing project timeline delays, and ensuring on-time product deployment.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://indicodata.ai',
    },
    {
      title: 'Surgical Robotic Capston- Johnson & Johnson',
      description:
        '- Led the process of designing and prototyping a standardized soft robotic surgical tool for future integration with the Johnson & Johnson robotic platform.- Researched, implemented, modified, and tested pneumatic soft robot designs for use in thoracic surgery.- Experimented with feedback mechanisms using OpenCV to strengthen surgeons.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.olin.edu/research/johnson-johnson',
    },
    {
      title: 'Sattelite Spectrum: EPFD Research- OSSTP',
      description:
        '- Explored satellite communication technology and policy with the OSSTP Team.- Worked to implement the EPFDdown algorithm in Matlab to verify the downlinked interference between non-geostationary satellites and geostationary satellites.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.osstp.org',
    },
    {
      title: 'Human-Interaction with Robotics',
      description:
        '- Programmed robot arm to play chess against a human participant autonomously with Python.- Conducted a theoretical exploration into path planning, computer vision, and anti-collision algorithms to construct skeletons for 3-D shapes given an input line with dowels using a pair of robot arms.- Studied coordination of paired robotic arms to align two independent parts using machine learning and path planning.- Worked with incoming members of the Olin Robolab to familiarize themselves with the robot\'s setup and software tools and systems.- Guided incoming members through their introductory projects.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/orgs/olinrobotics/teams/hiro',
    },
    {
      title: 'Agent-based modelling of greed vs desire for survival-Complexity Science',
      description:
        '- Inspired by the sugarscape simulation, I created an agent-based model to mimic human-like behaviour in a world where a disease infects agents based off of proximity. Agents tend to want to stay away from infectd agents, but also want to flock to areas of higher sugar availability. The model mimimcs the power of survival vs greed.',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
    {
      title: 'Practice Search Engineer- Data Structures and Algorithms',
      description:
        'To practice data structures and networks, I made my own search engine that recommends articles on wikipedia in order of how frequently they\'re visited',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
    {
      title: 'Drawbot',
      description:
        'Designed, built, and programmed a robot to take in an image through a camera lens and draw a likeness as a single-lined drawing. The team manufactured each component of the mechanism by hand, and the computer vision algorithm to convert from the image to vectors was created on Matlab.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/dlrow-olleh/POE-TBD',
    },
    {
      title: 'Bechdel Test Scraper',
      description:
        'An exercise in recursive functions; the project generates a unique,random equation and creates art based off of the outcome.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/sd19spring/ComputationalArt-dlrow-olleh/blob/master/recursive_art.py',
    },
    {
      title: 'Recursive Art',
      description:
        'An exercise in recursive functions; the project generates a unique,random equation and creates art based off of the outcome.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/sd19spring/ComputationalArt-dlrow-olleh/blob/master/recursive_art.py',
    },
    {
      title: 'Gene Finder',
      description:
        'Given a DNA sequence, the code identifiies the appropriate start and end tags, and recognises all possible versions of a viable gene. Then it looks it up in a directory to identify it',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/sd19spring/GeneFinder-dlrow-olleh',
    },
    {
      title: 'Recycling non-recyclable plastics',
      description:
        'Conducted an analysis into recycling practices and their inefficiencies. I also attempted to re-create a material science experiment to convert thermoset plastics (non-recyclable) into a recyclable plastic by modifying its material structure.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://cheerful-kitchen-e30.notion.site/Non-recyclable-plastics-are-recyclalbe-6d735823dc984565aba2271e65505fc7',
    },
    {
      title: 'Pando App',
      description:
        'Worked with local activists and community organisers to understand what values and methods bring communities together. The team designed a user interface that enables community members to tag locations they have visited and share their cherished memories. The app also allows small event organisers to draw attentio to the events. The app is currently being developed by an unaffiliated group.',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
    {
      title: 'Custom Wheelchair Build',
      description:
        'Worked with an eldery couple, Merylee and John, from the local Needham community. Merylee had a number of health conditions that prevented her ease of movement, causing them to carry both a walker and a wheelchair everywhere, in addition to her oxygen tank. My team created a two-in-one walker and wheelchair combo that could also accomodate her oxygen tank.',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
    {
      title: 'Eye Movemement Sensor',
      description:
        'Built a circuit that used propes attatched to test subject temples that detected the direction of eye movement as an electrical signal.',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
    {
      title: 'Pulse Oxymeter Circuit',
      description:
        'Built a circuuit that functions as a pulse oxymeter to track the fluctuation of pulse as an electrical signal. Repeated this project to measure the same signal through a weighing scale.',
      imageUrl: 'https://via.placeholder.com/250x250',
      //link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
