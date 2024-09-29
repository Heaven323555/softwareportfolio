import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce website',
        description: "An e-commerce platform built on Django, offering a diverse product catalog, secure user authentication, and streamlined checkout. Features include search, filters, shopping cart, order management, and an admin panel for inventory and sales management. Designed for scalability and responsiveness, with integration of payment gateways for seamless transactions",
        tools: ['Django', 'SQLite', 'Python', 'REST API', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Paypal'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'NUTRI-CROP',
        description: 'Nutricrop is a Flask-based website empowering farmers with expert advice, blog updates, and direct doctor consultations. Its machine learning model recommends crops based on soil nutrients, temperature, and rainfall, with yield predictions. Nutricrop aims to revolutionize agriculture by providing farmers with the knowledge to make informed decisions and improve yields.',
        tools: ['Flask', 'HTML','CSS', 'JavaScript', 'Python', 'SQLAlchemy', 'Flask-SQLAlchemy', 'Flask-WTF', 'Pandas', 'Scikit-learn']
,
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'MERNMarket',
        description: 'The Flipkart Clone using MERN is a full-stack e-commerce platform that replicates the core functionalities of Flipkart. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, it includes features like user authentication, product catalog, shopping cart, order placement, and search functionality. The platform aims to provide users with a familiar and seamless shopping experience similar to Flipkart.My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'CSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', ],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'resort booking_webpage ',
        description: "The Resort Booking website is a user-friendly platform for booking resort accommodations. It offers a wide range of resorts with detailed descriptions, amenities, and pricing. Users can easily search for resorts based on location, dates, and preferences, and securely book their stay online, providing a convenient and hassle-free booking experience.",
        tools: ['Node.js', 'React.js', 'Bootstrap', 'Express.js', 'MongoDB', 'JWT', 'Stripe', 'Google Maps API'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'The Bike Spares Inventory System ',
        description: "The Bike Spares Inventory System is a user-friendly desktop application developed using the .NET MAUI Blazor framework. It features role-based access control, user management, and inventory management capabilities. The application allows for the addition and deduction of spare parts stocks, with constraints based on weekdays and work time. It offers a dashboard for quick insights and supports dark mode for improved user experience.",
        tools: ['.NET MAUI Blazor', 'C#', 'XAML', 'Role-based Access Control', 'JSON Web Tokens (JWT)', 'Pandas', 'Scikit-learn']
        ,
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'CodeMapper ',
        description: "Developed an innovative mapping tool using C++ to visualize complex data structures and algorithms. Utilized C++’s performance capabilities to create a fast and responsive application tailored for developers and learners. Implemented features such as real-time data visualization, interactive tutorials, and customizable settings to enhance user engagement and understanding. Designed an intuitive user interface to facilitate ease of use and optimized performance for seamless interactions. Followed industry best practices in software development to ensure a high-quality final product that effectively meets user needs.",
        tools: [' C++', 'Algorithm Design', 'Software Engineering']
        ,
        code: '',
        demo: '',
        image: ayla,
        role: 'C++ Developer',
    },
    {
        id: 7,
        name: 'Route-Planning ',
        description: "Developed a robust route-planning application using C++ that implements the A* algorithm to optimize navigation and travel efficiency. Leveraged the A* algorithm's heuristic approach to calculate optimal routes based on various factors such as distance, time, and traffic conditions. Implemented features like real-time route adjustments and user-defined preferences to enhance the overall user experience. Designed an intuitive user interface to facilitate ease of navigation and interaction. Followed best practices in software engineering to ensure a reliable and efficient application that effectively meets the needs of users seeking effective travel solutions.",
        tools: [  'C++', 'A* Algorithm', 'Algorithm Design', 'Software Development'],
        code: '',
        demo: '',
        image: ayla,
        role: 'c++ Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
