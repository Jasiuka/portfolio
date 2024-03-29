export const skills = [
  "JavaScript",
  "React",
  "Vue",
  "Node",
  "HTML",
  "CSS",
  "SQL",
  "Ruby",
  "Git",
  "Rails",
];

export const projects = [
  {
    id: 1,
    title: "Contacts application",
    description: `Teltonika IoT Academy internship application. This is my intership application, which I developed from scratch, by myself from given figma design. Developing this project I improved my skills with Vue.js, saw how real world applications are developed and how does project management looks like. This web application consist of 4 pages: Employees Contacts, Companies, Structures, Accounts. Application lets you create companies, create structure of company and then add employees by specifying which company, department, division they belongs to, etc. In summary, this application is a comprehensive employee contact management system, allowing users to create and manage company structures, departments, and divisions, as well as manage employee records. `,
    tools: ["Vue.js", "PocketBase", "CSS"],
    features: [
      "CRUD operations for contacts, companies, company structures",
      "Filter",
      "Pagination",
      "Search",
      "Login",
      "Authorization",
    ],
    image: "./assets/projects/contacts-app.webp",
    code: "https://github.com/Jasiuka/contacts-application",
    live: "https://contacts-app-lj.netlify.app/",
  },
  {
    id: 2,
    title: "Veterinary Clinic System",
    description: `This is my studies module project, where I developed a full-stack application consisting of a database, client, and server. It was my first attempt at creating a full-stack application. During development, I enhanced my React.js skills and gained insights into backend operations and the creation of RESTful APIs. I also improved my understanding of SQL databases.

        The web application I created is a 'Veterinary Clinic' system with features such as user signup, login, password reset, appointment booking, and CRUD (Create, Read, Update, Delete) operations for pet profiles. Additionally, veterinarians have the ability to write diagnoses for pet profiles, attach documents, and view their upcoming visits.
        
        This project not only honed my technical skills but also provided a practical understanding of how different layers of a full-stack application work together to deliver a functional web solution. This project, which was a studies module, was developed solely for educational purposes. I've decided not to continue its development, having learned valuable lessons from the mistakes made. I'll now focus on moving forward with other projects.`,
    tools: ["React.js", "Node.js(Express)", "CSS"],
    features: [
      "Signup",
      "Login",
      "Password Reset",
      "CRUD operations for pet profiles",
      "Email sending",
      "File uploading",
      "Authorization",
    ],
    image: "./assets/projects/vet-app.webp",
    code: "https://github.com/Jasiuka/vet-clinic",
    live: null,
  },
  {
    id: 3,
    title: "Weather application",
    description:
      "Weather web application, I chose 2 simple applications (Weather app, Todo app), and decided to develop them in 5 chosen technologies: Vanilla JS, React.js, React.js TS, Vue.js, Svelte*, this way I will learn about each technology, will see how frameworks help to build web applications faster and how different technologies work, also will write unit tests for these apps. This is my Vanilla JS web application, where you type city name and you get weather forecast for that city, also you can change mesurement settings. For this app used 3 Public APIs: Geonames - for getting geo locations (coordinates) by city name, Geocode - for converting coordinates to nearest city, Open Meteo - for weather forecasts and used corsproxy url to fix CORS errors. ",
    tools: ["HTML", "JavaScript", "SCSS"],
    features: [
      "Measurement units changing",
      "Image representing current weather",
      "Saving location & settings",
      "Hourly forecast",
      "14 days forecast",
      "Responsive",
    ],
    image: "./assets/projects/weather-app.webp",
    code: "https://github.com/Jasiuka/VanillaJS_Weather-app",
    live: "https://jasiuka.github.io/VanillaJS_Weather-app/",
  },
  {
    id: 4,
    title: "My Portfolio",
    description:
      "This is my portfolio web page project, which was intended to be a redesign/remake of my old one, but it ended up looking like a new portfolio. I developed this web page using vanilla JavaScript, HTML, and CSS, as I usually develop web apps with some framework. Instead, I just wanted to develop this website with vanilla JS. Instead of hardcoding HTML in some parts, I created a generator script to generate projects and skills HTML code. I did this because it's easily scalable. For example, if I want to add a new project, all I have to do is add a new project object to the projects array, and everything will be rendered automatically. The same goes for the skills section. I also separated the 'more about project' data to enhance the appearance of the main page. Additionally, the project page is dynamically created based on the project ID. If a project ID does not exist, a message will be displayed stating that the project with the given ID does not exist.",
    tools: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive",
      "Form validation",
      "Notifications",
      "Serverless email sending",
    ],
    image: "./assets/projects/portfolio-app.webp",
    code: "https://github.com/Jasiuka/portfolio",
    live: null,
  },
];
