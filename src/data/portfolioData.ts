import { Project, SkillGroup, ExperienceItem, EducationItem, ActivityItem, LanguageItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Hiba Mounir',
  title: 'Mobile & Web Application Developer',
  tagline: 'Crafting responsive mobile applications and modern web experiences with clean architecture and meticulous attention to detail.',
  location: 'Agadir, Morocco',
  email: 'hiba.mounir77@gmail.com',
  phone: '+212 609091699',
  phoneDisplay: '+212 609 091 699',
  githubUser: 'Hiba13434085',
  githubUrl: 'https://github.com/Hiba13434085',
  repoUrl: 'https://github.com/BEN-KAOUTAR/portfolio',
  status: 'Available for Junior Developer Roles & Opportunities',
  bio: 'Motivated Mobile and Web Application Developer with a strong passion for learning and building modern digital solutions. Experienced in Flutter, Android (Kotlin), HTML, CSS, JavaScript, and Git through academic projects and a professional internship at iKenas. Strong problem-solving skills, attention to detail, and the ability to collaborate effectively within development teams.',
};

export const HERO_STATS = [
  { value: 'Flutter & Dart', label: 'Cross-Platform Mobile', subtext: 'BLoC, Provider & SQLite' },
  { value: 'Kotlin & Android', label: 'Native Architecture', subtext: 'MVVM, Views & SharedPreferences' },
  { value: 'Web Technologies', label: 'HTML5, CSS3 & JavaScript', subtext: 'Responsive & Accessible' },
  { value: 'CMC Souss-Massa', label: 'Diploma 2024–2026', subtext: 'Digital Development Major' },
];

export const WHAT_I_DO = [
  {
    number: '01',
    title: 'Mobile Development',
    subtitle: 'Cross-Platform & Native Mobile',
    description:
      'Building performant, responsive Android apps using Kotlin and cross-platform apps using Flutter & Dart. Integrating state management, offline persistence, and smooth transitions.',
    technologies: ['Flutter', 'Dart', 'Android SDK', 'Kotlin'],
  },
  {
    number: '02',
    title: 'Web Development',
    subtitle: 'Modern & Responsive Layouts',
    description:
      'Developing structured web interfaces using HTML5, modern CSS3, JavaScript, and Bootstrap. Focused on clean semantic markup, fast load times, and cross-browser responsiveness.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    number: '03',
    title: 'UI & Application Flow',
    subtitle: 'Intuitive Navigation & Clean Aesthetics',
    description:
      'Translating user requirements into ergonomic mobile and web screens. Designing clear user journeys, readable dark interfaces, and tactile touch interactions.',
    technologies: ['Component Design', 'Touch UX', 'Dark Mode UI', 'Adaptive Grids'],
  },
  {
    number: '04',
    title: 'Agile & Collaboration',
    subtitle: 'Version Control & Iterative Sprints',
    description:
      'Collaborating effectively within agile engineering teams using Git/GitHub, sprint planning, ticket tracking, and rigorous testing on physical mobile devices.',
    technologies: ['Git', 'GitHub', 'Agile / Scrum', 'Device Testing'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'schoolline',
    number: '01',
    title: 'SchoolLine',
    subtitle: 'Educational Mobile Ecosystem (iKenas Internship)',
    category: 'Mobile',
    tag: 'Flutter / Node.js',
    accentColor: '#9B5CFF',
    thumbnail: '/assets/schoolline_1.jpeg',
    logo: '/assets/schoolline_logo.png',
    images: [
      '/assets/schoolline_1.jpeg',
      '/assets/schoolline_2.jpeg',
      '/assets/schoolline_3.jpeg',
      '/assets/schoolline_4.jpeg',
      '/assets/schoolline_5.jpeg',
      '/assets/schoolline_6.jpeg',
      '/assets/schoolline_17.png',
      '/assets/schoolline_18.png',
      '/assets/schoolline_24.jpeg',
    ],
    shortDesc:
      'Multi-platform mobile school management application developed during my internship at iKenas, centralizing student data, grades, attendance, and teacher–parent communication.',
    longDesc:
      'SchoolLine is a comprehensive mobile educational management platform developed during my professional internship at iKenas in Agadir. Built to modernize communication across educational institutions, it connects administrators, teachers, and parents within a synchronized mobile hub.\n\nThe system includes offline caching for resilient on-the-go data access, JWT token security, and Firebase Cloud Messaging for urgent announcements. It adopts clean MVVM separation with Repository Pattern, BLoC and Provider state management, connected to an Express.js and MongoDB REST API.',
    features: [
      'Multi-role access for School Administrators, Teachers, and Parents',
      'Academic grade tracking with subject breakdowns, evolution charts, and class rankings',
      'Attendance tracking with justified/unjustified absences and monthly calendar view',
      'Tuition fee status overview with per-month visual indicators',
      'In-app messaging module supporting direct and group conversations',
      'Categorized notifications center for exams, homework, and urgent alerts',
      'Offline caching layer for uninterrupted access in unstable network conditions',
    ],
    techStack: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'BLoC', 'Provider', 'Firebase FCM'],
    githubUrl: 'https://github.com/Hiba13434085',
  },
  {
    id: 'academic-pro',
    number: '02',
    title: 'Academic Pro',
    subtitle: 'Vocational Training Center Workspace',
    category: 'Cross-Platform',
    tag: 'Flutter / SQLite',
    accentColor: '#B77CFF',
    thumbnail: '/assets/academic_pro_1.png',
    logo: '/assets/academic_pro_logo.png',
    images: [
      '/assets/academic_pro_1.png',
      '/assets/academic_pro_2.png',
      '/assets/academic_pro_3.png',
      '/assets/academic_pro_4.png',
      '/assets/academic_pro_5.png',
      '/assets/academic_pro_6.png',
      '/assets/academic_pro_7.png',
    ],
    shortDesc:
      'Cross-platform academic management system designed for Moroccan vocational hubs (CMC). Centralizes grades, attendance, and timetables completely offline.',
    longDesc:
      'Academic Pro is an academic management solution engineered with Flutter to digitize and streamline administrative workflows in vocational training institutes. It replaces fragmented spreadsheets and paper slips with an offline-first workspace powered by SQLite.\n\nSupports three distinct user profiles: Educational Director, Trainer, and Student, providing the Director with complete authority to manage account credentials, timetables, and exam periods.',
    features: [
      'Three dedicated role profiles: Educational Director, Trainer, and Student',
      '100% offline functionality backed by a local SQLite relational schema',
      'Automated generation and printable formatting of official student grade transcripts',
      'Interactive visual dashboard displaying performance metrics, attendance trends, and charts',
      'Unified schedule coordinator for trainers and student cohorts',
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Provider', 'PDF Generation'],
    liveUrl: 'https://ben-kaoutar.github.io/my_flutter_project/',
    githubUrl: 'https://github.com/Hiba13434085',
  },
  {
    id: 'courtkeeper',
    number: '03',
    title: 'Tennis App',
    subtitle: 'Native Android Tennis App',
    category: 'Android',
    tag: 'Kotlin / Android',
    accentColor: '#4ADE80',
    thumbnail: '/assets/courtkeeper_match.jpg',
    logo: '/assets/courtkeeper_logo.png',
    images: [
      '/assets/courtkeeper_match.jpg',
    ],
    shortDesc:
      'Native Android tennis match tracker strictly adhering to official rules: Points (0, 15, 30, 40), Deuce, Advantage, Tie-breaks, and persistent match history.',
    longDesc:
      'CourtKeeper is a native Android application designed to track tennis games live on the court. It implements official ITF scoring logic, handling complex score transitions such as Deuce and Advantage states, Game wins with 2-point margins, and Tie-breaks.\n\nBuilt with Kotlin, RecyclerView, and SharedPreferences with Gson serialization to store past matches and recover in-progress games across app lifecycles.',
    features: [
      'Automated score evaluation adhering to official tennis scoring rules (0, 15, 30, 40)',
      'Accurate handling of Deuce and Advantage (AD) sequences',
      'Automated Game, Set, and Tie-break calculation with 2-game margin validations',
      'Persistent match state preserving current gameplay after unexpected interruptions',
      'Full match history archive featuring date, opponent scores, and match winners via RecyclerView',
      'High-contrast dark court mode optimized for outdoor readability',
    ],
    techStack: ['Kotlin', 'Android SDK', 'RecyclerView', 'SharedPreferences', 'Gson'],
    githubUrl: 'https://github.com/BEN-KAOUTAR/courtkeeper',
  },
  {
    id: 'scientific-calculator',
    number: '04',
    title: 'Native Calculator',
    subtitle: 'Native Android Calculator',
    category: 'Android',
    tag: 'Kotlin / XML',
    accentColor: '#F59E0B',
    thumbnail: '/assets/calculatrice_clean.jpg',
    logo: '/assets/calculatrice_logo.png',
    images: [
      '/assets/calculatrice_clean.jpg',
    ],
    shortDesc:
      'Native Android standard calculator featuring essential arithmetic operations: addition, subtraction, multiplication, and division with an intuitive and responsive layout.',
    longDesc:
      'A clean and modern native Android calculator designed for fast everyday math. Built with Kotlin and custom XML layouts, it handles standard arithmetic operations—addition, subtraction, multiplication, and division—with real-time result previews, decimal precision, and error handling for division by zero.',
    features: [
      'Essential arithmetic operations: Addition (+), Subtraction (−), Multiplication (×), and Division (÷)',
      'Real-time calculation display with clean expression and answer formatting',
      'Clear (C) and All Clear (AC) functions for quick entry resets',
      'Decimal precision and sign toggling (+/−) for accurate daily computations',
      'Responsive touchscreen interface optimized for smartphones and tablets in both portrait and landscape',
    ],
    techStack: ['Kotlin', 'Android SDK', 'Custom XML Layouts', 'SharedPreferences', 'Gson'],
    githubUrl: 'https://github.com/BEN-KAOUTAR/calculatrice',
  },
  {
    id: 'amannet',
    number: '05',
    title: 'AmanNet Community',
    subtitle: 'Residential Community Platform',
    category: 'Cross-Platform',
    tag: 'Flutter / Node.js',
    accentColor: '#A855F7',
    thumbnail: '/assets/amannet_1.png',
    logo: '/assets/amannet_logo.png',
    images: [
      '/assets/amannet_1.png',
      '/assets/amannet_2.png',
      '/assets/amannet_3.png',
      '/assets/amannet_4.png',
      '/assets/amannet_5.png',
    ],
    shortDesc:
      'Smart residential community management system featuring dynamic QR visitor passes, incident logging, and real-time resident-to-syndic communication.',
    longDesc:
      'AmanNet is a modern residential ecosystem designed to streamline community operations. Residents can create one-time QR passes for guests, review maintenance fees, and submit photo-documented incident tickets. A synchronized management console enables property managers to track dues and send urgent announcements.',
    features: [
      'Dynamic QR codes for visitor check-in and access authorization',
      'Incident reporting system with camera capture and resolution tracking',
      'Community announcement bulletin and instant messaging',
      'Maintenance fee accounting with payment receipt generation',
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/Hiba13434085',
  },
];

export const TOOLKIT_GROUPS: SkillGroup[] = [
  {
    category: 'Mobile Development',
    description: 'Cross-platform and native engineering for smartphones and tablets',
    skills: [
      { name: 'Flutter', level: 'Core Framework', iconName: 'Layers', context: 'Cross-platform mobile apps with reactive state' },
      { name: 'Dart', level: 'Primary Language', iconName: 'Code2', context: 'Object-oriented programming, async streams' },
      { name: 'Android SDK', level: 'Native Platform', iconName: 'Smartphone', context: 'Lifecycles, services, permissions & views' },
      { name: 'Kotlin', level: 'Native Language', iconName: 'Cpu', context: 'Modern concise native Android development' },
    ],
  },
  {
    category: 'Web Development',
    description: 'Standard-compliant responsive interfaces and modern styling',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup', iconName: 'FileCode', context: 'Structured, accessible document layout' },
      { name: 'CSS3', level: 'Responsive Layouts', iconName: 'Palette', context: 'Flexbox, CSS Grid, media queries & animations' },
      { name: 'JavaScript', level: 'Client Scripting', iconName: 'Terminal', context: 'DOM manipulation, async fetch, ES6+ features' },
      { name: 'Bootstrap', level: 'UI Framework', iconName: 'LayoutGrid', context: 'Rapid grid prototyping and utility classes' },
    ],
  },
  {
    category: 'Data & Architecture',
    description: 'State management, local persistence, and design patterns',
    skills: [
      { name: 'SQLite', level: 'Local Database', iconName: 'Database', context: 'Offline data caching and relational persistence' },
      { name: 'SharedPreferences', level: 'Key-Value Storage', iconName: 'HardDrive', context: 'App preferences, tokens, and local state' },
      { name: 'BLoC & Provider', level: 'State Management', iconName: 'GitBranch', context: 'Predictable state and business logic separation' },
      { name: 'MVVM Pattern', level: 'Architecture', iconName: 'Workflow', context: 'Modular separation of UI and domain data' },
    ],
  },
  {
    category: 'Tools & Methodology',
    description: 'Engineering workflows, version control, and collaboration',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', iconName: 'GitFork', context: 'Branching, code reviews, and remote repositories' },
      { name: 'Agile & Scrum', level: 'Methodology', iconName: 'CheckCircle2', context: 'Sprint planning, standups, and progress tracking' },
      { name: 'Android Studio', level: 'Primary IDE', iconName: 'Laptop', context: 'Profiling, device emulation, and APK packaging' },
      { name: 'VS Code', level: 'Code Editor', iconName: 'Code', context: 'Flutter and web development workflow' },
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discover & Understand',
    desc: 'Analyzing user needs, functional specifications, and data models to define a solid technical foundation.',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    desc: 'Crafting responsive wireframes, intuitive navigation flows, and ergonomic mobile screen hierarchies.',
  },
  {
    step: '03',
    title: 'Develop & Implement',
    desc: 'Writing clean, maintainable Flutter, Kotlin, and Web code with structured state management and local persistence.',
  },
  {
    step: '04',
    title: 'Test & Refine',
    desc: 'Testing rigorously across physical devices and screen densities to ensure responsiveness, stability, and speed.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2026',
    role: 'Application Developer Intern',
    company: 'IKENAS',
    location: 'Agadir, Morocco',
    type: 'Professional Internship',
    responsibilities: [
      'Contributed to the development and enhancement of the SchoolLine educational mobile application.',
      'Collaborated actively with senior developers using team communication and project management tools.',
      'Participated in sprint planning, task estimation, and daily project progress tracking.',
      'Worked in a collaborative Agile development environment following code review standards.',
      'Implemented feature modules and verified stability through rigorous on-device testing.',
    ],
    technologies: ['Flutter', 'Dart', 'Agile/Scrum', 'Git', 'Mobile Testing'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2024 – 2026',
    degree: 'Diploma in Digital Development — Mobile Application Development',
    institution: 'Cités des Métiers et des Compétences (CMC)',
    location: 'Souss-Massa, Morocco',
    details: 'Comprehensive technical curriculum covering cross-platform mobile development (Flutter/Dart), native Android (Kotlin), web technologies (HTML/CSS/JS), relational databases, and software engineering practices.',
  },
  {
    period: '2023 – 2024',
    degree: 'Baccalaureate in Physical Sciences — French Option',
    institution: 'Mohammed El Derfoufi High School',
    location: 'Morocco',
    details: 'Rigorous foundation in mathematics, analytical reasoning, and experimental physical sciences.',
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    title: 'Market Day Showcase',
    organization: 'CMC Souss-Massa',
    description: 'Participated in the annual Market Day organized by CMC, presenting project concepts and engaging with tech peers.',
  },
  {
    title: 'Social Community Volunteering',
    organization: 'Retirement Home Initiative',
    description: 'Participated as a volunteer in a community social visit to a local retirement home, bringing support and shared time.',
  },
  {
    title: 'Academic Collaboration',
    organization: 'CMC Digital Hub',
    description: 'Collaborated on multiple academic sprint projects utilizing modern team communication, Git, and agile tracking tools.',
  },
];

export const LANGUAGES: LanguageItem[] = [
  { language: 'Arabic', proficiency: 'Native', note: 'Mother tongue, fluent written and spoken' },
  { language: 'English', proficiency: 'Fluent', note: 'Technical documentation, professional reading and communication' },
  { language: 'French', proficiency: 'Intermediate', note: 'Academic and professional correspondence' },
];

export const SOFT_SKILLS = [
  'Adaptability to new frameworks & tools',
  'Strong sense of responsibility & ownership',
  'Team spirit & collaborative mindset',
  'Passion for sport, stamina & energy',
  'Problem-solving & analytical precision',
];

export const HOBBIES = [
  { name: 'Reading', icon: 'BookOpen', desc: 'Expanding perspectives and learning new topics' },
  { name: 'Travel', icon: 'Compass', desc: 'Exploring cultural landscapes and nature' },
  { name: 'Cooking', icon: 'UtensilsCrossed', desc: 'Experimenting with recipes and precision' },
  { name: 'Bodybuilding & Volleyball', icon: 'Dumbbell', desc: 'Staying active, disciplined, and energized' },
  { name: 'Sudoku & Bedazzling', icon: 'Sparkles', desc: 'Logical puzzles and creative detail craft' },
];
