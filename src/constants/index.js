const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    // {
    // //     id: 1,
    //     date: "Sep 2, 2025",
    //     title:
    //         "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    //     image: "/images/blog1.png",
    //     link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    // },
    // {
    //     id: 2,
    //     date: "Aug 28, 2025",
    //     title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    //     image: "/images/blog2.png",
    //     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    // },
    // {
    //     id: 3,
    //     date: "Aug 15, 2025",
    //     title: "The Ultimate Guide to Mastering GSAP Animations",
    //     image: "/images/blog3.png",
    //     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    // },
];

const techStack = [
    {
        category: "Languages",
        items: ["Java", "SQL", "JavaScript"],
    },
    {
        category: "Backend Frameworks",
        items: ["Spring Boot", "Spring MVC", "Hibernate ORM"],
    },
    {
        category: "APIs & Architecture",
        items: ["RESTful APIs", "Microservices", "JWT Auth"],
    },
    {
        category: "Databases",
        items: ["MySQL", "PostgreSQL"],
    },
    {
        category: "Tools & DevOps",
        items: ["Docker", "Git", "GitHub Actions"],
    },
    {
        category: "Frontend",
        items: ["React", "TypeScript", "JavaScript"],
    },
    {
        category: "AI & NLP",
        items: ["NLP", "ML Concepts", "Data Processing"],
    },
];


const socials = [
    {
        id: 1,
        text: "GitHub",
        icon: "/icons/github.svg",
        bg: "#24292e",
        link: "https://github.com/yash1648",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#0A66C2",
        link: "https://linkedin.com/in/yashbagal666",
    },
    {
        id: 3,
        text: "Email",
        icon: "/icons/email.png",
        bg: "#EA4335",
        link: "mailto:yashbagal623@gmail.com",
    },
    {
        id: 4,
        text: "Portfolio",
        icon: "/icons/atom.svg",
        bg: "#4bcb63", 
        link: "https://yash-bagal-port.vercel.app/", // optional: replace after deployment
    },
];


const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    // {
    //     id: 1,
    //     img: "/images/gal1.png",
    // },
    // {
    //     id: 2,
    //     img: "/images/gal2.png",
    // },
    // {
    //     id: 3,
    //     img: "/images/gal3.png",
    // },
    // {
    //     id: 4,
    //     img: "/images/gal4.png",
    // },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Daily Diary AI",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Daily Diary AI Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Daily Diary AI is an intelligent journaling application designed to help users document their daily thoughts, experiences, and reflections effortlessly.",
                        "You get AI-powered insights, mood tracking, and smart prompts to enrich your journaling experience.",
                        "Just like having a personal writing coach and life assistant in one app.",
                        "Built with TypeScript (79.5%), Java (18.7%), CSS (1.1%), and more for robust backend and frontend.",
                    ],
                },
                {
                    id: 2,
                    name: "Daily Diary AI (GitHub)",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/yash1648/Daily-Diary-AI",
                    position: "top-10 right-20",
                },
            ],
        },

        // ▶ Project 1b
        {
            id: 6,
            name: "Library Management System",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-16 left-24",
            windowPosition: "top-[12vh] left-10",
            children: [
                {
                    id: 1,
                    name: "Library Management System Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A full-featured library system to manage books, members, and transactions.",
                        "Focus on reliability, searchability, and clear role-based access.",
                        "Implemented with Java-centric stack and supporting tooling for maintainability.",
                    ],
                },
                {
                    id: 2,
                    name: "Library Management System (GitHub)",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/yash1648/Library-Management-System",
                    position: "top-12 right-24",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 7,
            name: "Password Manager",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Password Manager Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Password Manager with encryption for security.",
                        "Manage, generate, and store passwords safely with intuitive UI.",
                        "Python (57.8%) powers the backend; JavaScript (23.5%), CSS (9.8%), and HTML (7.6%) create the user-friendly interface.",
                    ],
                },
                {
                    id: 2,
                    name: "Password Manager (GitHub)",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/jaykumarpatil314-ux/Password-Manager",
                    position: "top-20 left-20",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 8,
            name: "Personal Assistant",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Personal Assistant Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A modular Personal Assistant built in Java with Python extensions, designed to automate tasks, manage schedules, and provide intelligent assistance.",
                        "The backend is fully functional, and the frontend interface is currently under development.",
                        "Like your own customizable Siri/Google Assistant for productivity.",
                        "Major code in Java (80%) with CSS (17.1%) for interface, Python (2.9%) for extensions.",
                    ],
                },
            ],
        },

        // ▶ Project 4
        {
            id: 9,
            name: "Prep for Interview",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-20 left-40",
            windowPosition: "top-[40vh] left-10",
            children: [
                {
                    id: 1,
                    name: "Prep for Interview Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A complete roadmap with resources and milestones to master full stack development using Java.",
                        "Guides, tutorials, and interview preparation for aspiring developers.",
                        "100% Java for algorithm practice, coding challenges, and web dev skills.",
                    ],
                },
            ],
        },

        // ▶ Project 5
        {
            id: 10,
            name: "Python File Sorter",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-20 left-70",
            windowPosition: "top-[50vh] left-16",
            children: [
                {
                    id: 1,
                    name: "Python File Sorter Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A simple Python script to organize files in a given directory based on their extensions.",
                        "Drag and drop folders, and watch your files sorted instantly—no more clutter!",
                        "100% Python: easy to use and extend for personal or office use.",
                    ],
                },
            ],
        },

        // ▶ Project 6
        {
            id: 11,
            name: "Personal Portfolio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-36 left-60",
            windowPosition: "top-[60vh] left-24",
            children: [
                {
                    id: 1,
                    name: "Personal Portfolio Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A visually appealing portfolio site to showcase work, skills, and contact info.",
                        "Built with CSS (50.5%), JavaScript (47.5%), and HTML (2%) for a modern, interactive experience.",
                        "Say hello to your new professional web hub!",
                    ],
                },
            ],
        },

        // ▶ Project 7
        {
            id: 12,
            name: "Food Delivery App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Food Delivery App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                        "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                        "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
                        "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
                    ],
                },
                {
                    id: 2,
                    name: "food-delivery-app.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "food-delivery-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};


const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "yash.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/yash-1.jpg", // update to your actual image path
        },
        
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Backend Developer Crafting Reliable Systems",
            image: "/images/yash-1.jpg", // same as first image for preview
            description: [
                "Hey! I’m Yash 👋, a backend-focused developer who loves building clean, scalable systems with Java and Spring Boot.",
                "I specialize in RESTful APIs, microservices, JWT-based authentication, and database design with MySQL and PostgreSQL.",
                "I care a lot about writing maintainable code, clear architecture, and backend services that are secure, predictable, and easy to extend.",
                "Outside of code, you’ll usually find me exploring new tech, contributing to open source, or sharpening my problem-solving skills through projects and competitive programming.",
            ],
        },
    ],
};


const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
