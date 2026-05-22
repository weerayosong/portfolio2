// Data Cert
const certsData = [
    {
        title: "Junior Software Developer Bootcamp",
        issuer: "Generation TH",
        icon: "fa-solid fa-globe",
        bgImage:
            "https://thailand.generation.org/wp-content/uploads/2024/08/Final-Junior-Software-Developer.png",
        link: "https://thailand.generation.org/programs/junior-software-developer/",
    },
    {
        title: "HTML CSS Masterful",
        issuer: "MilerDev",
        icon: "fa-brands fa-html5",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/581515a9d7e528f430eeba8c9f61f21b77de30ea/images/htmlcss.png?raw=true",
        link: "https://milerdev.com/certificate/CERT-RXC6-RW2P",
    },
    {
        title: "Figma to Code",
        issuer: "MilerDev",
        icon: "fa-brands fa-css3-alt",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/581515a9d7e528f430eeba8c9f61f21b77de30ea/images/figmacode.png?raw=true",
        link: "https://milerdev.com/certificate/CERT-RR6T-RCPA",
    },
    {
        title: "JavaScript Mastery",
        issuer: "MilerDev",
        icon: "fa-brands fa-js",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/581515a9d7e528f430eeba8c9f61f21b77de30ea/images/jsmastery.png?raw=true",
        link: "https://milerdev.com/certificate/CERT-FLXX-FTQU",
    },
    {
        title: "ReactJS Front-End Mastery",
        issuer: "MilerDev",
        icon: "fa-brands fa-react",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/581515a9d7e528f430eeba8c9f61f21b77de30ea/images/reactfrontend.png?raw=true",
        link: "https://milerdev.com/certificate/CERT-4325-QVED",
    },
    {
        title: "The Complete JavaScript Course 2025",
        issuer: "Jonas Schmedtmann",
        icon: "fa-brands fa-js",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/ud1.png?raw=true",
        link: "https://www.udemy.com/certificate/UC-f0e171d2-8c7b-4ac8-8fba-0732aea0b2fa/",
    },
    {
        title: "The Ultimate React Course 2025",
        issuer: "Jonas Schmedtmann",
        icon: "fa-brands fa-react",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/ud2.png?raw=true",
        link: "https://www.udemy.com/certificate/UC-3ef70702-3c40-4e21-9c93-67af3477b4c9/",
    },
    {
        title: "Node.js, Express, MongoDB & More",
        issuer: "Jonas Schmedtmann",
        icon: "fa-brands fa-node",
        bgImage:
            "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/ud3.png?raw=true",
        link: "https://www.udemy.com/certificate/UC-7f576566-1de9-4ce6-85a3-2fba8e2133bc/",
    },
];

// Data Projects
const projectsData = [
    {
        title: "Juicy Healthy | Full-Stack E-Commerce Learning Journey",
        desc: "My very first self-taught (trial and errors) full-stack project built to understand the foundational mechanics of a real-world E-commerce website. It served as a practical learning ground for global state management with Redux Toolkit, secure user authentication, and PayPal payment integration, paved the way for my deeper studies in advanced system design.",
        tags: [
            "My First Full-Stack Project",
            "MERN Stack",
            "Redux Toolkit",
            "PayPal Integration",
            "Vercel & Render",
        ],
        image: "https://github.com/weerayosong/weerayosong.github.io/raw/refs/heads/main/images/proj1.mp4",
        githubLink: "https://github.com/weerayosong/juicy-healthy",
        previewLink: "https://juicy-healthy.vercel.app/",
    },
    {
        title: "[WIP] MERN Architecture Lab: Balance Tracker",
        desc: "A full-stack architectural case study focusing on production-ready system design via the MERN stack. Implements advanced task workflows with clean separation of concerns, optimized database modeling, and decoupled cross-cloud deployment on Vercel and Render.",
        tags: [
            "System Design",
            "MERN Stack",
            "REST API Architecture",
            "Vercel & Render",
        ],
        image: "https://github.com/weerayosong/weerayosong.github.io/raw/refs/heads/main/images/proj2b.mp4",
        githubLink: "https://github.com/weerayosong/balance-tracker",
        previewLink: "",
    },
    {
        title: "[WIP] JSD12 Full-Stack Architecture & System Design Lab",
        desc: "An architectural system design project applying MERN and PERN stacks to a unified dashboard. It demonstrates decoupled logic (SoC) across MongoDB and PostgreSQL, fully production-ready and cross-deployed via Vercel and Render.",
        tags: [
            "System Design",
            "MERN (MongoDB) / PERN (Supabase)",
            "Authentication & Authorization",
            "Vercel & Render",
        ],
        image: "https://github.com/weerayosong/weerayosong.github.io/raw/refs/heads/main/images/proj3.mp4",
        githubLink:
            "https://github.com/weerayosong/jsd12-full-stack-app-fe.git",
        previewLink: "",
    },
];

const miniProjectsData = [
    {
        title: "Mini #1: yosong.dev | weerayosong's Portfolio",
        desc: "Now you're looking at this mini. That's right, It's this page.",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini1.png?raw=true",
        tags: ["HTML", "Tailwind CSS", "JavaScript"],
        githubLink: "https://github.com/weerayosong/weerayosong.github.io",
        previewLink: "https://www.yosong.dev/",
    },
    {
        title: "Mini #2: Empire Strikes Clicker!",
        desc: "Cookie clicker-clone with the love of Star wars in mind!",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini2.png?raw=true",
        tags: ["HTML", "Tailwind CSS", "JavaScript", "DOM Manipulation"],
        githubLink:
            "https://github.com/weerayosong/jsd12_week07/tree/main/02_empire-strikes-clicker",
        previewLink: "https://jsd12week07.vercel.app/",
    },
    {
        title: "Mini #3: Dark Side Converter | PX to REM",
        desc: "PX to REM unit converter made by Lord Vader",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini3.png?raw=true",
        tags: ["HTML", "TailwindCSS", "JavaScript", "DOM Manipulation"],
        githubLink: "https://github.com/weerayosong/px-rem-converter-darkside",
        previewLink: "https://px-rem-converter-darkside.vercel.app/",
    },
    {
        title: "Mini #4: My first API - Pokemon-Simple-API",
        desc: "PokeAPI in new simple API Schema, Contain only neccessesary property.",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini4.png?raw=true",
        tags: ["JavaScript", "REST API", "Node", "Express"],
        githubLink: "https://github.com/weerayosong/pokemon-simple",
        previewLink: "https://pokemon-simple.vercel.app/",
    },
    {
        title: "Mini #5: Space Castle Dooms | JS Browser-based Rogue-like game",
        desc: "Practice myself by make game with REACT!",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini5.png?raw=true",
        tags: ["React", "JavaScript", "Tailwind CSS"],
        githubLink: "https://github.com/weerayosong/space-castle-dooms.git",
        previewLink: "https://space-castle-dooms.vercel.app/",
    },
    {
        title: "Mini #6: Dark Side Converter | Tailwind CSS-Size",
        desc: "You'll use Tailwind CSS-Size with more Precisionly (like Stromtrooper).",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini6.png?raw=true",
        tags: ["HTML", "Tailwind CSS", "JavaScript"],
        githubLink:
            "https://github.com/weerayosong/tailwindcss-size-converter-darkside",
        previewLink: "https://tailwindcss-size-converter-darkside.vercel.app/",
    },
    {
        title: "Mini #7: FE + BE | JS Browser-based RPG game",
        desc: "At least made a quick game with React, better than abandon whole project.",
        image: "https://github.com/weerayosong/weerayosong.github.io/blob/main/images/mini7b.png?raw=true",
        tags: ["React", "JavaScript", "Tailwind CSS"],
        githubLink: "https://github.com/weerayosong/febe-game.git",
        previewLink: "https://febe-game.vercel.app/",
    },
];
