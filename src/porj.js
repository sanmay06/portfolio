
const project = [
    {
        id: 4,
        name: "Job Aggregator",
        language: "React, Flask, Postgress SQL",
        description: "A Full Stack Website which uses React for front end, flask for backend and PostgressSQL for database, it scrapes job posts from various websites and prints them on the page",
        bigdesc: "The Job Aggregator is a full-stack web application that collects and displays job postings from various online sources. The frontend is built with React, providing a responsive and user-friendly interface. The backend is developed using Flask, which handles API requests and data processing. Job data is scraped from multiple websites and stored in a PostgreSQL database. Users can browse the latest job listings, filter results, and explore job opportunities all in one place. The platform simplifies the job-hunting process by aggregating multiple sources into a single, efficient interface.",
        url: {deployed: "https://job-aggregator-kappa.vercel.app/", frontEnd:"https://github.com/sanmay06/Job-Aggregator"}
    },
    {
        id: 5,
        name: "Wave",
        language: "React Native, Firebase",
        description: "A Home Automation App from which you can controll home electronics, appliances, switches, fans ect. ",
        bigdesc: "Wave is a mobile-based Home Automation application built using React Native and Firebase. It enables users to remotely control household appliances such as lights, fans, and switches directly from their smartphones. The app provides real-time status updates and allows toggling individual devices. Firebase handles authentication, real-time database updates, and cloud storage, ensuring seamless performance and scalability. With an intuitive interface and smart connectivity, Wave offers a modern, convenient solution for managing smart home environments efficiently.",
        url: ""
    },
    {
        id : 1,
        name : "Loan Management",
        language : "Java servlets, JSP, HTML, CSS, JavaScript ",
        description : "A web application using Java Servlets and JSP for tracking loans, updating payments, and estimating payoff timelines based on salary." ,
        bigdesc : "The Loan Management System is a web application using Java Servlets and JSP that allows users to store and manage loan details, update payments, and estimate loan payoff timelines based on their salary. Users can input loan information, make payment updates, and the system will automatically adjust the remaining balance and provide an estimated payoff period. The application utilizes MySQL for data storage, ensuring efficient handling of loan records and user data",
        url : "https://github.com/sanmay06/loan-management"
    }, 
    {
        id : 2,
        name: "Weather App",
        language : "HTML, CSS, JavaScript" ,
        description : "A JavaScript-based app that displays real-time weather updates and changes the background based on the time of day." ,
        bigdesc : "The Weather App is a JavaScript-based web application that provides users with real-time weather updates for their location. It fetches weather data from an external API and displays information such as temperature, humidity, and weather conditions. The app features a dynamic background that changes based on the time of day (morning, afternoon, evening, night), creating a visually engaging user experience. The application is simple, responsive, and aims to make weather checking intuitive and aesthetically pleasing.",
        url : "https://github.com/sanmay06/News"
    },
    {
        id : 3 ,
        name : "File Clean Up tool",
        language : "python" ,
        description : "A Python tool that deletes files over a specified size with user prompts and removes empty directories to optimize disk space.",
        bigdesc : "The File Cleanup Tool is a Python script that helps users manage disk space by deleting large files. It scans a specified directory, identifies files exceeding a user-defined size limit, and prompts the user for confirmation before deleting them. After removing the selected files, the tool also cleans up any empty directories left behind, ensuring a tidier and more efficient file system." ,
        url: "https://github.com/sanmay06/FIle-clean-up-tool"
    },
]

export default project;