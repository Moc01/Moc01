var config = {
    /*Configure your basic information here, all data should be strings*/
    name: "Skylar Rivers",
    sex: "Male",
    age: "25",
    phone: "123-456-7890",
    email: "skylar.rivers@example.com",
    address: "New York City, USA",
    instagram: "@skylar.codes",
    log: "SkylarRivers",
    excpect_work: "Full Stack Developer",


    /*Configure your motto collection for the homepage*/
    motto: [
        "Tomorrow may not be better, but believe that a better tomorrow will come.",
        "Where there's a will, there's a way.",
        "Go For It!",
        "Dream big, work hard.",
        "The journey of a thousand miles begins with a single step.",
        "Truth is meant to destroy illusion.",
        "Shoot for the moon. Even if you miss, you'll land among the stars.",
        "Success is not final, failure is not fatal.",
        "Carpe Diem!",
        "Stay hungry, stay foolish.",
        "The best way to predict the future is to create it.",
        "We must trade what we have for what we don't have",
        "Life is what happens while you're busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams."
    ],


    /*Configure your greeting message here, you can use HTML tags*/
    welcome: "Hello World!<br>" +
             "Welcome to my portfolio<br>" +
             "Hi, I'm Skylar Rivers, a Full Stack Developer<br>" +
             "Nice to meet you!",


    /*Configure your about me information here, you can use HTML tags*/
    about: "<p>Hello! I'm Skylar Rivers, a passionate Full Stack Developer with a strong foundation in modern web technologies.</p>" +
        "<p>I have extensive experience in both frontend and backend development, with a solid understanding of computer science fundamentals. I'm a team player with strong problem-solving skills and the ability to work independently. I'm committed to delivering high-quality code and maintaining excellent communication with team members.</p>" +
        "<p>I look forward to connecting with you!</p>",


    /** 
    * Configure your skills here
    * ["Skill", Proficiency, "Color"]
    */  
    skills: [
        ["JavaScript", 90, "red"],
        ["Python", 85, "blue"],
        ["React", 80, "#1abc9c"],
        ["Node.js", 75, "rgba(0,0,0)"],
        ["MongoDB", 70, "yellow"],
        ["Docker", 65, "pink"]
    ],


    /*Configure your skills description here, you can use HTML tags*/
    skills_description: "<ul>" +
        "     <li>Strong knowledge of computer science fundamentals and algorithms.</li>" +
        "     <li>Expertise in JavaScript and modern frameworks.</li>" +
        "     <li>Proficient in frontend development with React.</li>" +
        "     <li>Experience with Node.js backend development.</li>" +
        "     <li>Familiar with Python programming.</li>" +
        "     <li>Strong database design and optimization skills.</li>" +
        "     <li>Proficient in Linux/Unix environments.</li>" +
        "     <li>Experience with various frameworks and libraries.</li>" +
        "     <li>Knowledge of caching and messaging systems.</li>" +
        "     <li>Understanding of distributed systems.</li>" +
        "     <li>Full stack development capabilities.</li>" +
        " </ul>",


    /**
     * Configure your portfolio here
     * ["img", "url", "ProjectName", "brief"]
     */
    portfolio: [
        ["./images/pro-1.png", "https://example.com/blog", "Personal Blog", "A tech blog built with Next.js<br>Updated regularly"],
        ["./images/pro-2.png", "https://github.com/skylarrivers/project1", "E-commerce Platform", "Full-stack e-commerce solution<br>2023/5/15"],
        ["./images/pro-3.png", "https://github.com/skylarrivers/project2", "Task Management App", "React Native mobile application"]
    ],


    /**
     * Configure your work experience here
     * ["Date", "Position", "Description"]
     */
    work: [
        ["2022/1 — Present", "<br>Senior Developer",
            "<p><strong>Tech Solutions Inc.</strong></p>" +
            "<p>Led a team of 5 developers in building scalable web applications. Improved system performance by 40% through optimization and refactoring.</p>" +
            "<p>Implemented new features and maintained existing codebase while mentoring junior developers.</p>"
        ],

        ["2020/6 — 2021/12", "<br>Full Stack Developer",
            "<p><strong>Digital Innovations LLC</strong></p>" +
            "<p>Developed and maintained multiple client websites using React and Node.js. Collaborated with design team to implement responsive UI/UX.</p>" +
            "<p>Reduced loading time by 60% through implementation of lazy loading and code splitting.</p>"
        ]
    ],


    /**
     * Configure your achievements here
     * ["Date", "Achievement", "Description"]
     */
    others: [
        ["2023-05-15", "AWS Certified Solutions Architect", "Achieved professional certification in cloud architecture design and implementation."],
        ["2022-11-30", "Best Team Project Award", "Led team to victory in company-wide innovation challenge."],
        ["2022-06-20", "Speaker at Tech Conference", "Presented on 'Modern Web Development Practices' at regional tech conference."],
        ["2021-12-10", "Open Source Contributor", "Major contributor to popular open-source project with over 1000 stars on GitHub."]
    ],


    /**
     * Configure your social media links here
     * ["img", "url", "desc"]
     */
    icon: [
        ["./svg/github.svg", "https://github.com/skylarrivers", "My GitHub Profile"],
        ["./svg/linkedin.svg", "https://linkedin.com/in/skylarrivers", "My LinkedIn Profile"],
        ["./svg/instagram.svg", "https://instagram.com/skylar.codes", "My Instagram Profile"],
        ["./svg/blog.svg", "https://blog.skylarrivers.com", "My Tech Blog"],
        ["./svg/twitter.svg", "https://twitter.com/skylarrivers", "My Twitter Profile"]
    ],


    //Image URLs - recommend only changing the avatar image
    url: [
        //background, avatar, portfolio background, other background
        "./images/intro-bg.jpg",
        "./images/avatar.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
