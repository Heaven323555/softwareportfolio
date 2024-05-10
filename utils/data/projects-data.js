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
        id: 4,
        name: 'The Bike Spares Inventory System ',
        description: "The Bike Spares Inventory System is a user-friendly desktop application developed using the .NET MAUI Blazor framework. It features role-based access control, user management, and inventory management capabilities. The application allows for the addition and deduction of spare parts stocks, with constraints based on weekdays and work time. It offers a dashboard for quick insights and supports dark mode for improved user experience.",
        tools: ['.NET MAUI Blazor', 'C#', 'XAML', 'Role-based Access Control', 'JSON Web Tokens (JWT)', 'Pandas', 'Scikit-learn']
        ,
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
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