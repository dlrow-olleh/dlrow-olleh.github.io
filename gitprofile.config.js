// gitprofile.config.js

const config = {
  github: {
    username: 'dlrow-olleh', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['dlrow-olleh.github.io', 'myWebsiteTake2','myPortfolio','Complexity-Project-1'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mahima-beltur',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
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
      //description: 'test description',
    },
    {
      company: 'Johnson & Johnson',
      position: 'Senior Capstone',
      from: 'September 2021',
      to: 'May 2022',
      //companyLink: 'https://example.com',
      //description: 'test description',
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
        'Abstract:As the global population continues to grow exponentially, the demand for food does too. This demand is particularly tangible in the market for seafood, where it outstrips the available supply. One widely touted solution to meet said demand is by expanding offshore aquaculture. An extant challenge in this field is monitoring the health of livestock and the environment. Such constant monitoring requires dense data spanning a large depth over a significant time range, which can become computationally expensive and energy inefficient. The linked paper details an the design specifics of one such aquaculture profiler designed to montitor the environment and alert to any anomalies. Extended work I completed in this project includes an exploration of current tools and practices that are used for environmental estimation and a proposal for a potential alternative model by which the same goal can be achieved. Using environmental measures, such as dissolved oxygen, as analogues for fish and environmental health, I explored a probabilistic method by which a moored automatic mobile profiler (MAMP) can accumulate the minimum number of sparse, discrete data points while recreating an accurate map of the surrounding environments. The process relies on a two-step sequence of training a Gaussian Process, followed by a hidden mode Markov distribution process. The algorithm can determine the optimal time and location to sample for the next data point.',
      ],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://ieeexplore.ieee.org/document/10244719',
    },
    {
      title: 'Forms Builder Prototyoe- Indico Internship',
      description:
        'Designed, developed, and tested an automatic form processing tool prototype to reduce manual data labeling time by using machine learning from previously analyzed forms to generate predictions identifying the layout, fields, and input data types. [Source code is not linked as the project is under NDA]',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/essr0rvwfvdmzvwrznvj',
      link: 'https://indicodata.ai',
    },
    {
      title: 'Surgical Robotic Capston- Johnson & Johnson',
      description:
        'Prototyped both software, sensing, and manupulation solutions to interface with Johnson & Johnson\'s surgical robotic platform. ',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/y3gm2u2hhwu6gev82zjt',
      link: 'https://www.olin.edu/research/johnson-johnson',

    },
    {
      title: 'Sattelite Spectrum: EPFD Research- OSSTP',
      description:
        '- Explored satellite communication technology and policy with the OSSTP Team.- Worked to implement the EPFDdown algorithm in Matlab to verify the downlinked interference between non-geostationary satellites and geostationary satellites.',
      imageUrl: 'https://static.wixstatic.com/media/13635d_6c0a133ac5ff44be9364104a29b051f4~mv2.png/v1/fill/w_216,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copy%20of%20OSSTP_large_lettering.png',
      link: 'https://www.osstp.org',
    },
    {
      title: 'Human-Interaction with Robotics',
      description:
        '- Programmed robot arm to play chess against a human participant autonomously with Python.- Conducted a theoretical exploration into path planning, computer vision, and anti-collision algorithms to construct skeletons for 3-D shapes given an input line with dowels using a pair of robot arms.- Studied coordination of paired robotic arms to align two independent parts using machine learning and path planning.- Worked with incoming members of the Olin Robolab to familiarize themselves with the robot\'s setup and software tools and systems.- Guided incoming members through their introductory projects.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://github.com/olinrobotics/hiro',
    },
    {
      title: 'Agent-based modelling of greed vs desire for survival-Complexity Science',
      description:
        '- Inspired by the sugarscape simulation, I created an agent-based model to mimic human-like behaviour in a world where a disease infects agents based off of proximity. Agents tend to want to stay away from infectd agents, but also want to flock to areas of higher sugar availability. The model mimimcs the power of survival vs greed.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://github.com/dlrow-olleh/Complexity-Project-2/blob/main/reports/final_report.md',
    },
    {
      title: 'Practice Search Engineer- Data Structures and Algorithms',
      description:
        'To practice data structures and networks, I made my own search engine that recommends articles on wikipedia in order of how frequently they\'re visited. [Source code is not linked as the project is part of a private organization]',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      //link: 'https://example.com',
    },
    {
      title: 'Drawbot',
      description:
        'Designed, built, and programmed a robot to take in an image through a camera lens and draw a likeness as a single-lined drawing. The team manufactured each component of the mechanism by hand, and the computer vision algorithm to convert from the image to vectors was created on Matlab.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://github.com/dlrow-olleh/POE-TBD',
    },
    {
      title: 'Bechdel Test Scraper',
      description:
        'An exercise in recursive functions; the project generates a unique,random equation and creates art based off of the outcome.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://github.com/dlrow-olleh/Project-4/blob/master/BechdelTestScraper',
    },
    {
      title: 'Recursive Art',
      description:
        'An exercise in recursive functions; the project generates a unique,random equation and creates art based off of the outcome. [Source code is not linked as the project is part of a private organization]',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      //link: 'https://github.com/sd19spring/ComputationalArt-dlrow-olleh/blob/master/recursive_art.py',
    },
    {
      title: 'Gene Finder',
      description:
        'Given a DNA sequence, the code identifiies the appropriate start and end tags, and recognises all possible versions of a viable gene. Then it looks it up in a directory to identify it. [Source code is not linked as the project is part of a private organization]',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      //link: 'https://github.com/sd19spring/GeneFinder-dlrow-olleh',
    },
    {
      title: 'Recycling non-recyclable plastics',
      description:
        'Conducted an analysis into recycling practices and their inefficiencies. I also attempted to re-create a material science experiment to convert thermoset plastics (non-recyclable) into a recyclable plastic by modifying its material structure.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://cheerful-kitchen-e30.notion.site/Non-recyclable-plastics-are-recyclalbe-6d735823dc984565aba2271e65505fc7',
    },
    {
      title: 'Pando App',
      description:
        'Worked with local activists and community organisers to understand what values and methods bring communities together. The team designed a user interface that enables community members to tag locations they have visited and share their cherished memories. The app also allows small event organisers to draw attentio to the events. The app is currently being developed by an unaffiliated group.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://drive.google.com/file/d/17gFIf0bArrPQDEpP2Qn16-XWWe2H8fWj/view?usp=share_link',
    },
    {
      title: 'Custom Wheelchair Build',
      description:
        'Worked with an eldery couple, Merylee and John, from the local Needham community. Merylee had a number of health conditions that prevented her ease of movement, causing them to carry both a walker and a wheelchair everywhere, in addition to her oxygen tank. My team created a two-in-one walker and wheelchair combo that could also accomodate her oxygen tank.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      link: 'https://docs.google.com/presentation/d/1YPSBK1VPvTipKnfM1oi89bHDxlEJ7nd_T6Yq4BX8sIk/edit?usp=sharing',
    },
    {
      title: 'Eye Movemement Sensor',
      description:
        'Built a circuit that used propes attatched to test subject temples that detected the direction of eye movement as an electrical signal. [Source code is not linked as the project consists of physical circuits.]',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
      //link: 'https://example.com',
    },
    {
      title: 'Pulse Oxymeter Circuit',
      description:
        'Built a circuuit that functions as a pulse oxymeter to track the fluctuation of pulse as an electrical signal. Repeated this project to measure the same signal through a weighing scale.[Source code is not linked as the project consists of physical circuits.]',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGKxjY5YqxTEJt4fbtk1TiBMz4jX-rORRf0M_P_jeqezu1CMGinxlWBKbiqnzVMUZywY&usqp=CAU',
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
