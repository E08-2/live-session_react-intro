// * INTRODUCTION TO REACT

// * 1. What is React?

// Introductory video: https://www.youtube.com/watch?v=N3AkSS5hXMA

// React is a JavaScript library for building fast and interactive user interfaces (UIs).
// It lets you build complex UIs from smaller "pieces" of code (called "components").
// Once you create a component, you can reuse it anywhere in your project.
// Your UI is written in JavaScript, which React then "translates" into HTML.
// React is a JS *library* to help you build UIs, not a *framework* (i.e. a complete solution).
// However, it has become part of a large "ecosystem" of third-party packages...
// ... which, when used together, can help us build a complete solution.
// React can also help you build Single Page Applications (SPAs).

// * What is a SPA?

// A SPA is a website which stays in a single page, rather than muliple pages for different parts of the website.
// By using a SPA, you can change what is displayed on the page according to what the user wants to do...
// ... insead of navigating to different pages for different parts of the site.
// This means the SPA can change only what is needed with each user interaction, without needing to reload the page.
// In a more "traditional" website, navigating to a new page would mean serving a new page each time.
// By only changing what is needed, users' load times are much faster, and the server doesn't have to send unnecessary information.

// * Why use React to build a SPA?

// React is currently the most popular frontend JavaScript library.
// ? Link: https://www.npmtrends.com/@angular/core-vs-react-vs-vue
// It was originally created by Facebook.
// It is extremely popular: used by companies like UberEats, Netflix, Airbnb, Dropbox and many many more.
// It is quite simple to read, and easy to use.
// It is highly reactive (hence the name!)... 
// ... You can get quick and satisfying responses to user interactions without reloading the page.
// (So it is good from a UX perspective).
// It is flexible and reusable, for example through the use of components (see above).
// It is fast, and Search Engine Optimization (SEO) friendly...
// ... by reducing page load times, your site can rank highly in search enging algorithms.

// =======================================================================================

// * 2. Creating our first React App

// A. Navigate to the folder you want to create your project in.
// B. Run the following command to install your first React app ("my-first-react-app").

// ? npx create-react-app my-first-react-app
// * "npx" is a package runner which comes installed with npm.
// * It lets us execute the "create-react-app" package without installing it first.
// * This means we can create React apps whenever we want - more convenient than having to always install a package first!

// C. Navigate to the "my-first-react-app" folder:
// ? cd my-first-react-app
// D. Run "npm start" to see the default React page.

// ======================================================================================

// * 3. Exploring our new project - what are the key parts?

// * A. node_modules

// Where all the project's dependencies (external modules) are kept.
// ? An external module is some JS written by someone else, which you can import into your project to do some task for you.
// We will look at how to use external modules in the coming weeks!

// * B. public

// Contains static assets for your project.
// ? A static asset is a file that you will use in your project that the server will not change in any way.
// These are files which just need to be delivered to the user "as they are".
// For example, html files and images. 

// * C. src

// The folder we will spend the most time in!
// This is the "source" folder, which contains our React files, which we can use to create our UI.
// We just saw that the default UI lives in "App.js".
// Once we run "npm start", we start a development server - this will open localhost:3000 by default and display your index.html file.
// If we change part of App.js and save, the page will automatically reload and display the latest version.
// * This is called "hot reloading" - it's useful to immediately see how your changes affect the UI. 