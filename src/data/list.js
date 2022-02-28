import routerImg from "../assets/react-router.jpg";
import expressImg from "../assets/express.svg";
import httpReqImg from "../assets/http-req.svg";
import projectOne from "../assets/projectSS1.png";
import projectTwo from "../assets/projectImg2.png";
import projectThree from "../assets/projectImg3.png";

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
    description:
      "Created this app in MERN stack, used react-redux for state management. Core features include add product to cart, product listing, submit/edit product reviews/ratings, search/filter/sort functionality. User JWT based Authentication, forgot/reset password, checkout process for buying product - shipping -> confirm order -> payment, Stripe & Razorpay payment gateway implemented, user edit profile page. Admin Dasboard Management, sales, product quantity charts representation, order actions (change status - get's real time updated), create new product, edit/ delete products, user admin role update, delete reviews.",
  },
  {
    id: 2,
    title: "Splash Book - A Social Media App to share posts",
    githubUrl: "https://github.com/adidoshi/social-media-frontend",
    liveUrl: "https://splashsocial.netlify.app/",
    img: projectTwo,
    description:
      "MERN stack app, used context API for sharing data globally, pure vanilla CSS for UI, Cloudinary for image upload. Core features include create post with text & image, feed & timeline screen, Follow/Unfollow users, Like Post, JWT based Authentication",
  },
  {
    id: 3,
    title: "Splash Talk - Real Time Chat Application",
    githubUrl: "https://github.com/adidoshi/chat-application",
    liveUrl: "https://splashtalk.herokuapp.com/chats",
    img: projectThree,
    description:
      "Created this MERN stack app, used Chakra UI for CSS, formik library for form validation. Core features include Socket.io implementation for instant messaging, direct private chat & group chat functionality, notification management, Search users, JWT based Authentication.",
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
