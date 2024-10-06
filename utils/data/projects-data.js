import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Food Delivery Web App',
        description: "I engineered a comprehensive food delivery application, leveraging modern web technologies including React.js, Express.js, MongoDB, Bcrypt, and JWT to deliver a seamless user experience. The platform features advanced food search capabilities by category, personalized order tracking, and integrated Stripe payment processing for secure transactions.",
        tools: ['Express Js', 'MongoDB', 'React Js', 'Stripe', 'JWT Authentication', 'ThunderClient'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Benchmarking Of Databases using JMeter',
        description: 'Conducted load testing and benchmarking on MongoDB, Apache Cassandra, and Amazon DynamoDB to evaluate performance under workloads of 50,000 and 800,000 records. Analyzed CRUD operation latency, revealing Amazon DynamoDB’s superior performance, with latencies of 0.93 seconds for 50,000 records and 2.67 seconds for 800,000 records, outperforming MongoDB in both cases.',
        tools: ['JMeter', 'MongoDB', "Apache Cassandra", "Amazon DynamoDB", "Lambda Function"],
        role: ' Performance Tester',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'WealthWave',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React Js', 'TypeScript', 'Redux', 'MongoDB', 'PostMan API', 'Express Js', 'Regression Js','Charts Js'],
        code: '',
        role: 'Developer',
        demo: '',
        image: realEstate,
    },
   
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