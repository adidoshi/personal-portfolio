import routerImg from "../assets/react-router.jpg";
import expressImg from "../assets/express.svg";
import httpReqImg from "../assets/http-req.svg";
import projectOne from "../assets/projectSS1.png";
import projectTwo from "../assets/projectImg2.png";
import projectThree from "../assets/projectImg3.png";
import projectFour from "../assets/projectSs4.png";
import projectFive from "../assets/projectSs5.png";
import projectSix from "../assets/projectSs6.png";
import projectSeven from "../assets/projectSs7.png";
import projectEight from "../assets/projectSs8.png";

export const iconsList = [
  {
    iconSymbol: "javascript-plain",
    title: "JavaScript",
  },
  {
    iconSymbol: "react-original",
    title: "React",
  },
  {
    iconSymbol: "typescript-plain",
    title: "TypeScript",
  },
  {
    iconSymbol: "redux-original",
    title: "Redux",
  },
  {
    iconSymbol: "nodejs-plain",
    title: "Node.js",
  },
  {
    iconSymbol: "express-original",
    title: "Express.js",
  },
  {
    iconSymbol: "mongodb-plain",
    title: "MongoDB",
  },
  {
    iconSymbol: "tailwindcss-plain",
    title: "tailwindcss",
  },
  {
    iconSymbol: "bootstrap-plain",
    title: "Bootstrap",
  },
  {
    iconSymbol: "materialui-plain",
    title: "MUI",
  },
  {
    iconSymbol: "html5-plain",
    title: "HTML5",
  },
  {
    iconSymbol: "css3-plain",
    title: "CSS3",
  },
  {
    iconSymbol: "git-plain",
    title: "git",
  },
  {
    iconSymbol: "github-original",
    title: "GitHub",
  },
];

export const projectsList = [
  {
    id: 1,
    title: "Splash Store - Ecommerce Application",
    githubUrl: "https://github.com/adidoshi/e-commerce_frontend",
    liveUrl: "https://splashstore.netlify.app/",
    img: projectOne,
    iconSymbol: [
      "react-original",
      "redux-original",
      "nodejs-plain",
      "mongodb-plain",
    ],
    description:
      "Created this app in MERN stack, used react-redux for state management. Core features include add product to cart, product listing, submit/edit product reviews/ratings, search/filter/sort functionality. User JWT based Authentication, forgot/reset password, checkout process for buying product - shipping -> confirm order -> payment, Stripe & Razorpay payment gateway implemented, user edit profile page. Admin Dasboard Management, sales, product quantity charts representation, order actions (change status - get's real time updated), create new product, edit/ delete products, user admin role update, delete reviews.",
  },
  {
    id: 2,
    title: "Splash Book - A Social Media App to share posts",
    githubUrl: "https://github.com/adidoshi/social-media-frontend",
    liveUrl: "https://splashsocial.netlify.app/",
    img: projectTwo,
    iconSymbol: [
      "react-original",
      "express-original",
      "nodejs-plain",
      "mongodb-plain",
    ],
    description:
      "MERN stack app, used context API for sharing data globally, pure vanilla CSS for UI, Cloudinary for image upload. Core features include create post with text & image, feed & timeline screen, Follow/Unfollow users, Like Post, JWT based Authentication",
  },
  {
    id: 3,
    title: "Splash Talk - Real Time Chat Application",
    githubUrl: "https://github.com/adidoshi/chat-application",
    liveUrl: "https://splashtalk.herokuapp.com/chats",
    img: projectThree,
    iconSymbol: [
      "react-original",
      "nodejs-plain",
      "express-original",
      "mongodb-plain",
    ],
    description:
      "Created this MERN stack app, used Chakra UI for CSS, formik library for form validation. Core features include Socket.io implementation for instant messaging, direct private chat & group chat functionality, notification management, Search users, JWT based Authentication.",
  },
  {
    id: 4,
    title: "Splash Tube - Youtube Clone",
    date: "16th Jan 2022",
    img: projectFour,
    iconSymbol: [
      "sass-original",
      "firebase-plain",
      "react-original",
      "redux-original",
    ],
    tech: [
      "Firebase",
      "Redux",
      "Google Oauth",
      "Youtube API V3",
      "lazy-load",
      "react-loading-skeleton",
    ],
    description:
      "App built with React JS, redux for state & Sass for styling. Used firebase for google authentication & app deployment. Core features include top vidoes fetched, categories sort, user subscription page subscription count, channel page/videos.",
    githubUrl: "https://github.com/adidoshi/youtube-clone",
    liveUrl: "https://ytclone-byadi.web.app",
  },
  {
    id: 5,
    title: "Splash to-do Notes",
    img: projectFive,
    date: "18th Nov, 2022",
    iconSymbol: [
      "react-original",
      "redux-original",
      "express-original",
      "mongodb-plain",
    ],
    tech: ["Redux-toolkit", "JWT", "React-bootstrap", "markdown"],
    description:
      "MERN stack app, redux toolkit for state management, React Bootstrap for css. Core features include all CRUD operations - create/edit/delete/fetch user notes, user profile page, JWT based Authentication, pin/add to favourite.",
    githubUrl: "https://github.com/adidoshi/todo-list_frontend",
    liveUrl: "https://splashtodonotes.netlify.app",
  },
  {
    id: 6,
    title: "Weather Search",
    date: "8th Sep, 2021",
    img: projectSeven,
    iconSymbol: ["javascript-plain", "css3-plain", "html5-plain"],
    tech: ["Vanilla Javascript", "Plain CSS", "HTML"],
    description:
      "The app fetches weather data world wide. It take's city as a input from user & then display's temperature & other factors for the city, OpenWeather API. It also refresh different image for particular city!",
    githubUrl: "https://github.com/adidoshi/Weather-App",
    liveUrl: "https://worldwideweathersearch.netlify.app/",
  },
  {
    id: 7,
    title: "Palindrome date finder",
    date: "20th August, 2021",
    img: projectSix,
    iconSymbol: ["javascript-plain", "css3-plain", "html5-plain"],
    tech: ["Vanilla Javascript", "Plain CSS", "HTML"],
    description:
      "It tell's weather your birthdate is a Palindrome, if not it show's the nearest palindrome date - (previous / next) & by how many days you missed it.",
    githubUrl: "https://github.com/adidoshi/palindrome-birthday",
    liveUrl: "https://palindrome-birthday-finder.netlify.app/",
  },
  {
    id: 8,
    title: "Food Recipe App",
    date: "14th July, 2021",
    iconSymbol: ["javascript-plain", "css3-plain", "html5-plain"],
    img: projectEight,
    tech: ["Vanilla Javascript", "Plain CSS", "HTML"],
    description:
      "Recipe search by ingredients & dish name! The app display's the data of food-recipes. It is a fully responsive web-app.",
    githubUrl: "https://github.com/adidoshi/Recipe-search",
    liveUrl: "https://foodrecipebyitems.netlify.app/",
  },
];

export const blogsList = [
  {
    id: 1,
    title: "React Router DOM v6",
    readTime: "6 min read",
    img: routerImg,
    url: "https://dev.to/adidoshi/react-router-dom-v6-51j2",
  },
  {
    id: 2,
    title: "Express Error Handling",
    readTime: "5 min read",
    img: expressImg,
    url: "https://dev.to/adidoshi/express-error-handling-7nd",
  },
  {
    id: 3,
    title: "HTTP Request Methods",
    readTime: "4 min read",
    img: httpReqImg,
    url: "https://dev.to/adidoshi/http-request-methods-16ik",
  },
];
