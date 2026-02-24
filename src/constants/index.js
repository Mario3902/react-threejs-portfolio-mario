import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Técnico de Informática e Sistemas Multimédia",
    company_name: "Itel",
    icon: otu,
    iconBg: "#fff",
    date: "2022 - Present",
    points: [
      "Programação ",
      "Designer ",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "Cfitel",
    company_name: "Richmond Hill High School, ON",
    icon: rhhs,
    iconBg: "#fff",
    date: "2018-2022",
    points: [
      "Inglês",
      "UI/UX Design",
      "programação front-end",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: " Desenvolvedor de Software",
    company_name: "Hakyoff",
    icon: ibm,
    iconBg: "#fff",
    date: "Jan. 2026 - Present",
    points: [
      "Desenvolvimento de software com React.js e Node.js",
    ],
  },
  {
    title: "Desenvolvedor de Software",
    company_name: "Onewa Africa",
    icon: wonderland,
    iconBg: "#fff",
    date: "Jun. 2024 - Jan. 2026",
    points: [
      "Desenvolvedor front-end com React.js e Node.js",
      "Desenvolvedor back-end com Laravel e PHP",
      "Desenvolvedor mobile com React Native",
      "Desenvolvedor desktop com Electron",
    ],
  },
  {
    title: "Estagiário de TI",
    company_name: "TIS",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "Jan. 2023 - Aug. 2023",
    points: [
      "Desenvolvedor front-end com React.js e Node.js",
      "Desenvolvedor back-end com Laravel e PHP",
    ],
  },

];


const extracurricular = [
  {
    title: "Hacking",
    type: "Professional Certificate",
    icon: ibm,
    iconBg: "#052FAD",
    date: "Feb 2026",
    points: [
      "Pipelines RAG, Bancos de Dados Vetoriais, IA Agética, LangChain, LangGraph, CrewAI, AutoGen, BeeAI, MCP, IA Generativa Multimodal",
    ],
    credential: "*",
  },
  {
    title: "Desenvolvedor Full-Stack Microsoft",
    type: "Professional Certificate",
    icon: microsoft,
    iconBg: "#000000",
    date: "Feb 2026",
    points: [
      "C#, .NET 10, Blazor WebAssembly, ASP.NET Core Web API, SQL Server, JWT Auth, RBAC, CI/CD, Entity Framework Core",
    ],
    credential: "*",
  },
  {
    title: "GitHub Copilot Intermediate (GH-300)",
    type: "Professional Certificate",
    icon: microsoft,
    iconBg: "#000000",
    date: "Issued: Oct 13, 2025 - Expires: Oct 13, 2027",
    points: [
      "Engenharia de Prompt, Arquitetura de Chat Copilot, Aplicação de Políticas, Integração de IA Empresarial, Fluxos de Trabalho de Desenvolvimento Seguro"
    ],
    credential: "*",
  },
  {
    title: "MongoDB Python Developer Path",
    type: "Proof of Completion",
    icon: mongodb,
    iconBg: "#000000",
    date: "Feb 2025",
    points: ["PyMongo, NoSQL Schema Design, Data Aggregation, MongoDB Query Optimization"],
    credential: "*",
  },
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "Issued: Sep 2024 - Expires: Sep 2027",
    points: ["Controle de Versão, Git, Actions, CI/CD, Gerenciamento de Repositório, Fluxo de Trabalho SAP"],
    credential: "*",
  },
  {
    title: "Arquiteto de Scripting Empresarial Certificado",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: ["RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization"],
    credential: connectwisecert,
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Gerenciamento de Configuração, Automação, Google Cloud Platform (GCP), Servidores em Nuvem e Máquinas Virtuais, Ferramentas de Controle de Versão, Automação.",
    ],
    credential: "*",
  },
  {
    title: "WHMIS (Saúde e Segurança no Trabalho)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: ["Conscientização sobre Perigos, Conformidade Legal, Proteção Pessoal, Prevenção de Acidentes"],
  },
];

const projects = [
  {
    name: "HakyOff 🔍",
    description:
      "A HakyOff é uma plataforma dedicada à treinamentos em Segurança da Informação, com foco principal em Segurança Ofensiva. Oferecemos uma variedade de treinamentos especializados, laboratórios práticos envolventes e uma comunidade ativa de profissionais e entusiastas da segurança cibernética.",
    tags: [
      {
        name: "SvelteKit 2",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini/NLP",
        color: "green-text-gradient",
      },
      {
        name: "ATS-Simulation",
        color: "pink-text-gradient",
      },
      {
        name: "Rule-Engine",
        color: "blue-text-gradient",
      },
    ],
    image: atsscreenerlanding,
    source_code_link: "https://github.com/Mario3902",
    live_project_link: "https://www.hakyoff.com/",
  },
  {
    name: "Onewa Africa",
    description:
      "ONEWA, uma Organização Não Governamental sem fins lucrativos, movida pelo propósito de transformar vidas e comunidades por meio da educação, da inclusão social e da solidariedade ativa.",
    tags: [
      {
        name: "Next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: "TipTap 3 / Yjs",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
      {
        name: "OpenRouter AI",
        color: "blue-text-gradient",
      },
    ],
    image: axelotlanding,
    source_code_link: "https://github.com/Mario3902",
    live_project_link: "https://onewaafrica.com",
  },
  {
    name: "Fubex",
    description:
      "Uma oportunidade única para jovens angolanos alcançarem seus sonhos académicos. Bolsas nacionais e internacionais com cobertura total ou comparticipada até 85%.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "DNS-over-HTTPS",
        color: "pink-text-gradient",
      },
      {
        name: "WCAG2.2",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "https://github.com/Mario3902",
    live_project_link: "https://bolsadeestudosemanuelxirimbimbi.com/",
  },

  // {
  //   name: "FinancialFlow 💸",
  //   description:
  //     "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
  //   tags: [
  //     {
  //       name: "React-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: financialflowimage,
  //   source_code_link: "https://github.com/sunnypatell/financialflow",
  //   live_project_link: "https://financial-flow.vercel.app/",
  // },
  // {
  //   name: "Enterprise API Tester 🌐",
  //   description:
  //     "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
  //   tags: [
  //     {
  //       name: "Typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Authentication-Body",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: enterpriseapitester,
  //   source_code_link: "https://github.com/sunnypatell/enterprise-api-request-tester",
  //   live_project_link: "https://enterprise-api-request-tester.vercel.app/",
  // },

  // {
  //   name: "COVID-19 GTA Cases Data Analysis 🧪",
  //   description:
  //     "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "numpy",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: pythonanalysis,
  //   source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  //   live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  // },
  // {
  //   name: "Secure Password Generator 🔐",
  //   description:
  //     "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sha-256",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "encryption/decryption",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "data-algorithms",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: password_generator,
  //   source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  //   live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  // },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
