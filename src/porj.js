
const project = [    
    {
        id: 6,
        name: "Decentralized Document storage with face recognition",
        description: "A secure document authentication system that encrypts identity documents with AES-GCM, stores them on IPFS, and records the CID on blockchain for tamper-proof verification. Users authenticate via multi-factor authentication (password, OTP, live face recognition using YOLO) to access their encrypted documents, ensuring privacy and decentralization.",
        bigdesc: "This is a blockchain-based secure document authentication system that stores personal identity documents (Aadhaar, PAN, passports) on IPFS with biometric face recognition for access control. Users upload documents which undergo OCR extraction and face capture, then all data is encrypted with AES-GCM and stored on IPFS, generating a unique CID that gets recorded on the blockchain for tamper-proof verification. Access requires multi-factor authentication including password, OTP, and live face matching using YOLO, ensuring only authorized users can retrieve and decrypt their documents while maintaining complete privacy and decentralization.​",
        link: {github_link: "https://github.com/Sameer-s-patil18/Major-project/"},
        skills: ['react vue', 'python', 'IPFS', 'blockchain', 'Fast API', 'DL models']
    },
    {
        id: 4,
        name: "Job Aggregator",
        skills: ["React", 'Flask', 'Postgress SQL', 'mongo DB'],
        description: "A Full Stack Website which uses React for front end, flask for backend and PostgressSQL or mongo DB for database, it scrapes job posts from various websites and prints them on the page",
        bigdesc: "The Job Aggregator is a full-stack web application that collects and displays job postings from various online sources. The frontend is built with React, providing a responsive and user-friendly interface. The backend is developed using Flask, which handles API requests and data processing. Job data is scraped from multiple websites and stored in a PostgreSQL database. Users can browse the latest job listings, filter results, and explore job opportunities all in one place. The platform simplifies the job-hunting process by aggregating multiple sources into a single, efficient interface.",
        link: {
            deployed_link: "https://job-aggregator-kappa.vercel.app/",
            github_link: "https://github.com/sanmay06/job-Aggregator",
        },
        // url:'https://job-aggregator-kappa.vercel.app/' //{deployed: "https://job-aggregator-kappa.vercel.app/", frontEnd:"https://github.com/sanmay06/Job-Aggregator"}
    },
    {
        id: 5,
        name: "Wave",
        skills: ["React Native", "Firebase"],
        description: "A Home Automation App from which you can controll home electronics, appliances, switches, fans ect. ",
        bigdesc: "Wave is a mobile-based Home Automation application built using React Native and Firebase. It enables users to remotely control household appliances such as lights, fans, and switches directly from their smartphones. The app provides real-time status updates and allows toggling individual devices. Firebase handles authentication, real-time database updates, and cloud storage, ensuring seamless performance and scalability. With an intuitive interface and smart connectivity, Wave offers a modern, convenient solution for managing smart home environments efficiently.",
        link: {github_link: "https://github.com/sanmay06/Wave/"}
    },
    {
        id : 1,
        name : "Loan Management",
        skills : ["Java servlets", 'JSP', 'HTML', 'CSS', "JavaScript", 'JDBC', "MY SQL"],
        description : "A web application using Java Servlets and JSP for tracking loans, updating payments, and estimating payoff timelines based on salary." ,
        bigdesc : "The Loan Management System is a web application using Java Servlets and JSP that allows users to store and manage loan details, update payments, and estimate loan payoff timelines based on their salary. Users can input loan information, make payment updates, and the system will automatically adjust the remaining balance and provide an estimated payoff period. The application utilizes MySQL for data storage, ensuring efficient handling of loan records and user data",
        link:{github_link : "https://github.com/sanmay06/loan-management"}
    }, 
    {
        id : 2,
        name: "Weather App",
        skills: ["HTML", 'CSS', "JavaScript"],
        description : "A JavaScript-based app that displays real-time weather updates and changes the background based on the time of day." ,
        bigdesc : "The Weather App is a JavaScript-based web application that provides users with real-time weather updates for their location. It fetches weather data from an external API and displays information such as temperature, humidity, and weather conditions. The app features a dynamic background that changes based on the time of day (morning, afternoon, evening, night), creating a visually engaging user experience. The application is simple, responsive, and aims to make weather checking intuitive and aesthetically pleasing.",
        link: {github_link : "https://github.com/sanmay06/News"}
    },
    {
        id : 3,
        name : "File Clean Up tool",
        skills : ["python"] ,
        description : "A Python tool that deletes files over a specified size with user prompts and removes empty directories to optimize disk space.",
        bigdesc : "The File Cleanup Tool is a Python script that helps users manage disk space by deleting large files. It scans a specified directory, identifies files exceeding a user-defined size limit, and prompts the user for confirmation before deleting them. After removing the selected files, the tool also cleans up any empty directories left behind, ensuring a tidier and more efficient file system." ,
        link: {github_link: "https://github.com/sanmay06/FIle-clean-up-tool"}
    },
]

export default project;