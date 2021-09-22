/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringToFragment\": () => (/* binding */ stringToFragment)\n/* harmony export */ });\n/* harmony import */ var _projects_WhoIsHiring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/WhoIsHiring */ \"./src/js/projects/WhoIsHiring.js\");\n/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminal */ \"./src/js/terminal.js\");\n/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/index */ \"./src/js/projects/index.js\");\n\n\nvar githubsvg = \"<svg width=\\\"40\\\" height=\\\"40\\\" viewBox=\\\"0 0 40 40\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n<path d=\\\"M19.9844 2.98035C10.3242 2.97644 2.5 10.7968 2.5 20.4491C2.5 28.0819 7.39453 34.5702 14.2109 36.953C15.1289 37.1835 14.9883 36.5311 14.9883 36.0858V33.0585C9.6875 33.6796 9.47266 30.1718 9.11719 29.5858C8.39844 28.3593 6.69922 28.0468 7.20703 27.4608C8.41406 26.8397 9.64453 27.6171 11.0703 29.7226C12.1016 31.2499 14.1133 30.9921 15.1328 30.7382C15.3555 29.8202 15.832 28.9999 16.4883 28.3632C10.9961 27.3788 8.70703 24.0272 8.70703 20.0429C8.70703 18.1093 9.34375 16.3319 10.5938 14.8983C9.79688 12.535 10.668 10.5116 10.7852 10.2108C13.0547 10.0077 15.4141 11.8358 15.5977 11.9804C16.8867 11.6327 18.3594 11.4491 20.0078 11.4491C21.6641 11.4491 23.1406 11.6405 24.4414 11.9921C24.8828 11.6561 27.0703 10.0858 29.1797 10.2772C29.293 10.578 30.1445 12.5546 29.3945 14.8866C30.6602 16.3241 31.3047 18.1171 31.3047 20.0546C31.3047 24.0468 29 27.4022 23.4922 28.371C23.9639 28.8349 24.3385 29.3882 24.5941 29.9986C24.8496 30.6089 24.981 31.264 24.9805 31.9257V36.3202C25.0117 36.6718 24.9805 37.0194 25.5664 37.0194C32.4844 34.6874 37.4648 28.1522 37.4648 20.453C37.4648 10.7968 29.6367 2.98035 19.9844 2.98035Z\\\" fill=\\\"#D6D6D6\\\"/>\\n</svg>\\n\";\nvar openLink = \"<svg width=\\\"33\\\" height=\\\"33\\\" viewBox=\\\"0 0 33 33\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n<path d=\\\"M6.1875 2.0625V26.8125H30.9375V2.0625H6.1875ZM28.875 24.75H8.25V4.125H28.875V24.75ZM4.125 28.875V7.21875L2.0625 5.15625V30.9375H27.8438L25.7812 28.875H4.125Z\\\" fill=\\\"#E4E4E4\\\"/>\\n<path d=\\\"M11.3438 8.25L16.5 13.4062L10.3125 19.5938L13.4062 22.6875L19.5938 16.5L24.75 21.6562V8.25H11.3438Z\\\" fill=\\\"#E4E4E4\\\"/>\\n</svg>\\n\";\nwindow.addEventListener(\"load\", function () {\n  document.querySelector(\"body\").style.opacity = 1;\n  document.querySelector(\"body\").classList.add(\"page-ready\");\n}); // Generate Technologies\n\nvar stringToFragment = function stringToFragment(html) {\n  return document.createRange().createContextualFragment(html);\n};\nvar listEl = document.getElementById(\"techList\");\nvar technologies = [{\n  title: \"Frontend\",\n  tech: [\"HTML\", \"CSS\", \"JavaScript\", \"Vue\", \"React\", \"WebRTC\"]\n}, {\n  title: \"Backend\",\n  tech: [\"Node JS(Fastify, Express)\", \"MongoDB\", \"PostgreSQL\", \"Socket.io\"]\n}, {\n  title: \"Dev Tools\",\n  tech: [\"VsCode\", \"Digital Ocean\", \"Git\", \"Heroku\"]\n}];\ntechnologies.forEach(function (e) {\n  var techs = e.tech.map(function (tech) {\n    return \"<li>\".concat(tech, \"</li>\");\n  });\n  var completeList = stringToFragment(\"<div class=\\\"tech-list\\\"><h5>\".concat(e.title, \"</h5><ul>\").concat(techs.join(\"\"), \" </ul></div>\"));\n  listEl.appendChild(completeList);\n});\nvar siteTerminal = document.getElementById(\"siteTerminal\");\nvar content = document.querySelector(\".content\");\n\nvar terminalTransform = function terminalTransform() {\n  var distanceFromTop = content.getBoundingClientRect().top;\n\n  if (distanceFromTop < 80) {\n    siteTerminal.classList.add(\"mini-version\");\n  } else {\n    siteTerminal.classList.remove(\"mini-version\");\n  }\n}; //window.addEventListener(\"scroll\", () => terminalTransform());\n// PROJECTS\n\n\n\nvar githubSvg = \"<svg class=\\\"github-svg\\\" width=\\\"40\\\" height=\\\"40\\\" viewBox=\\\"0 0 40 40\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n<path d=\\\"M19.9844 2.98035C10.3242 2.97644 2.5 10.7968 2.5 20.4491C2.5 28.0819 7.39453 34.5702 14.2109 36.953C15.1289 37.1835 14.9883 36.5311 14.9883 36.0858V33.0585C9.6875 33.6796 9.47266 30.1718 9.11719 29.5858C8.39844 28.3593 6.69922 28.0468 7.20703 27.4608C8.41406 26.8397 9.64453 27.6171 11.0703 29.7226C12.1016 31.2499 14.1133 30.9921 15.1328 30.7382C15.3555 29.8202 15.832 28.9999 16.4883 28.3632C10.9961 27.3788 8.70703 24.0272 8.70703 20.0429C8.70703 18.1093 9.34375 16.3319 10.5938 14.8983C9.79688 12.535 10.668 10.5116 10.7852 10.2108C13.0547 10.0077 15.4141 11.8358 15.5977 11.9804C16.8867 11.6327 18.3594 11.4491 20.0078 11.4491C21.6641 11.4491 23.1406 11.6405 24.4414 11.9921C24.8828 11.6561 27.0703 10.0858 29.1797 10.2772C29.293 10.578 30.1445 12.5546 29.3945 14.8866C30.6602 16.3241 31.3047 18.1171 31.3047 20.0546C31.3047 24.0468 29 27.4022 23.4922 28.371C23.9639 28.8349 24.3385 29.3882 24.5941 29.9986C24.8496 30.6089 24.981 31.264 24.9805 31.9257V36.3202C25.0117 36.6718 24.9805 37.0194 25.5664 37.0194C32.4844 34.6874 37.4648 28.1522 37.4648 20.453C37.4648 10.7968 29.6367 2.98035 19.9844 2.98035Z\\\" fill=\\\"#D6D6D6\\\"/>\\n</svg>\\n\";\nvar openLinkSvg = \"<svg class=\\\"link-svg\\\" width=\\\"33\\\" height=\\\"33\\\" viewBox=\\\"0 0 33 33\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n<path d=\\\"M6.1875 2.0625V26.8125H30.9375V2.0625H6.1875ZM28.875 24.75H8.25V4.125H28.875V24.75ZM4.125 28.875V7.21875L2.0625 5.15625V30.9375H27.8438L25.7812 28.875H4.125Z\\\" fill=\\\"#E4E4E4\\\"/>\\n<path d=\\\"M11.3438 8.25L16.5 13.4062L10.3125 19.5938L13.4062 22.6875L19.5938 16.5L24.75 21.6562V8.25H11.3438Z\\\" fill=\\\"#E4E4E4\\\"/>\\n</svg>\\n\";\n\nvar projectEL = function projectEL(_ref, i) {\n  var title = _ref.title,\n      desc = _ref.desc,\n      projectResources = _ref.projectResources;\n  return stringToFragment(\"<article class=\\\"project-card\\\" onclick=\\\"showProject(\".concat(i, \");window.scrollTo(0, 0);\\\"  >\\n   \\n      <div  class=\\\"project-image-container\\\">\\n        <div class=\\\"purple-overlay\\\"></div>\\n        <img src=\\\"images/project/\").concat(projectResources, \"/card.png\\\"/>\\n      </div>\\n      <div class=\\\"info\\\">\\n        <h3>\").concat(title, \"</h3>\\n        <p>\").concat(desc, \"</p>\\n        <div class=\\\"project-actions\\\">\\n          <button  class=\\\"learn-more\\\" onclick=\\\"showProject(\").concat(i, \");window.scrollTo(0, 0);\\\">Learn More</button>\\n        </div>   \\n        </div>\\n    </article>\"));\n};\n\nvar projectsContainer = document.querySelector(\".projects-container\");\nvar projectsFragment = document.createDocumentFragment();\n_projects_index__WEBPACK_IMPORTED_MODULE_2__.default.forEach(function (v, i) {\n  var el = projectEL(v, i);\n  projectsFragment.appendChild(el);\n});\nprojectsContainer.appendChild(projectsFragment);\n\nvar projectIndex = function projectIndex() {\n  var url = window.location.href;\n  var projectIndex = url.substring(url.lastIndexOf(\"/\") + 1);\n  var projectDoesNotExist = _projects_index__WEBPACK_IMPORTED_MODULE_2__.default.length - 1 < projectIndex;\n  var lowerThanZero = projectIndex < 0;\n  var notANumber = isNaN(projectIndex);\n  console.log(notANumber, \"not number\");\n  console.log(lowerThanZero, \"lower than zero\");\n  console.log(projectDoesNotExist, _projects_index__WEBPACK_IMPORTED_MODULE_2__.default.length, projectIndex, \"does not exist\");\n\n  if (notANumber || lowerThanZero || projectDoesNotExist) {\n    return false;\n  }\n\n  return projectIndex;\n};\n\nfunction projectToShow() {\n  console.log(\"showing project\" + projectIndex());\n  var index = projectIndex();\n  var home = document.querySelector(\".homepage\");\n  var project = document.querySelector(\".project-display\");\n\n  if (projectIndex()) {\n    home.style.display = \"none\";\n    project.innerHTML = _projects_index__WEBPACK_IMPORTED_MODULE_2__.default[index].html;\n    project.style.display = \"block\";\n  } else {\n    home.style.display = \"block\";\n    project.innerHTML = \"\";\n    project.style.display = \"none\";\n  }\n}\n\nwindow.showProject = function (index) {\n  // Prevent multiple pushes in history\n  if (projectIndex() === index.toString()) {\n    document.title = \"Portfolio | Samuel Graham\";\n    return;\n  }\n\n  history.pushState({\n    project: index\n  }, _projects_index__WEBPACK_IMPORTED_MODULE_2__.default[index].title, \"\".concat(index));\n  document.title = _projects_index__WEBPACK_IMPORTED_MODULE_2__.default[index].title;\n  projectToShow();\n}; // Running project to show on load\n\n\nprojectToShow(); // Managing project viewer through url\n\nwindow.addEventListener(\"popstate\", function (_ref2) {\n  var state = _ref2.state;\n  console.log(\"poo\");\n  console.log(\"url state POPPED\", state);\n  projectToShow();\n}); // Scrolling\n\nwindow.scrollToAnchor = function (area) {\n  history.pushState(\"\", \"\", \"/\");\n  projectToShow();\n  document.getElementById(\"\".concat(area, \"Anchor\")).scrollIntoView({\n    behavior: \"smooth\"\n  });\n};\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/main.js?");

/***/ }),

/***/ "./src/js/projects/HboMaxClone.js":
/*!****************************************!*\
  !*** ./src/js/projects/HboMaxClone.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar hboMaxClone =\n/*html*/\n\"\\n<h1> Hbo Max Clone </h1>\\n\\n<p>Tools used: HTML, CSS, Javascript, ESBuild</p>\\n\\n<div class=\\\"project-links\\\">\\n  <a href=\\\"https://streaming-service-clone.netlify.app/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n    View Live\\n  </a>\\n  <a href=\\\"https://github.com/SamG06/streaming-service-clone\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n    View Code\\n  </a>\\n</div>\\n\\n\\n<div class=\\\"video-wrapper\\\">\\n  <iframe\\n    src=\\\"https://iframe.videodelivery.net/a2134cde6879331d816963ffbe9cb8d3\\\"\\n    style=\\\"border: none;width: 70%;max-width:1080px\\\"\\n    allow=\\\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\\\"\\n    allowfullscreen=\\\"true\\\"\\n    id=\\\"stream-player\\\"\\n  ></iframe>\\n\\n  <script src=\\\"https://embed.videodelivery.net/embed/sdk.latest.js\\\"></script>\\n\\n  <!-- Your JavaScript code below-->\\n  <script>\\n    const player = Stream(document.getElementById('stream-player'))\\n    player.addEventListener('play', () => {\\n      console.log('playing!')\\n    })\\n    player.play().catch(() => {\\n      console.log('playback failed, muting to try again')\\n      player.muted = true\\n      player.play()\\n    })\\n  </script>\\n</div>\\n\\n<p>Clone of the streaming service Hbo Max made with HTML, CSS and JavaScript.</p>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  title: \"Hbo Max Clone\",\n  html: hboMaxClone,\n  desc: \"Clone of Hbo Max built with just html, css and js.\",\n  projectResources: \"hbomaxclone\"\n});\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/projects/HboMaxClone.js?");

/***/ }),

/***/ "./src/js/projects/ScreenShareRoom.js":
/*!********************************************!*\
  !*** ./src/js/projects/ScreenShareRoom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar screenShareRoom =\n/*html*/\n\"\\n<h1> Screen Share Room</h1>\\n\\n<p>Tools used: Vue, PeerJS/WebRTC </p>\\n\\n<div class=\\\"project-links\\\">\\n  <a href=\\\"https://screenshareroom.netlify.app/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n    View Live\\n  </a>\\n  <a href=\\\"https://github.com/SamG06/screen-share-room\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n    View Code\\n  </a>\\n</div>\\n<div class=\\\"video-wrapper\\\">\\n  <iframe\\n    src=\\\"https://iframe.videodelivery.net/299999106b10dc42c41f5e734f298963\\\"\\n    style=\\\"border: none;width: 70%;max-width:1080px\\\"\\n    allow=\\\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\\\"\\n    allowfullscreen=\\\"true\\\"\\n    id=\\\"stream-player\\\"\\n  ></iframe>\\n\\n  <script src=\\\"https://embed.videodelivery.net/embed/sdk.latest.js\\\"></script>\\n\\n  <!-- Your JavaScript code below-->\\n  <script>\\n    const player = Stream(document.getElementById('stream-player'))\\n    player.addEventListener('play', () => {\\n      console.log('playing!')\\n    })\\n    player.play().catch(() => {\\n      console.log('playback failed, muting to try again')\\n      player.muted = true\\n      player.play()\\n    })\\n  </script>\\n</div>\\n\\n<h3>What It Does</h3>\\n\\n<p>\\n  This project is a web app that allows users to send messages\\n   and a host to share their screen using a peer to peer connection between participants browsers.\\n</p>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  html: screenShareRoom,\n  title: \"Screen Share Room\",\n  projectResources: \"screenshareroom\",\n  desc: \"Screen share room using WebRTC (PeerJS).\"\n});\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/projects/ScreenShareRoom.js?");

/***/ }),

/***/ "./src/js/projects/WhoIsHiring.js":
/*!****************************************!*\
  !*** ./src/js/projects/WhoIsHiring.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar whoIsHiring =\n/*html*/\n\"\\n<h1> Hacker News Job Board </h1>\\n\\n<p>Tools used: Node JS, Puppeter, React</p>\\n\\n<div class=\\\"project-links\\\">\\n  <a href=\\\"https://screenshareroom.netlify.app/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n    View Live\\n  </a>\\n  <a href=\\\"https://github.com/SamG06/WhoIsHiring-Job-Board\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n    View Code\\n  </a>\\n</div>\\n\\n<h3>What is it?</h3>\\n\\n<p>This project is a web app used to help navigate the <a href=\\\"https://news.ycombinator.com/submitted?id=whoishiring\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">whoishiring thread</a> on Hacker News. \\nTo accomplish this I created keyword search and job post saving features using React.\\n<br>\\n<br>\\nThe data you see on this application comes from my own VPS that runs a node script which scrapes \\nthe whoishiring thread for jobs postings and making it ready for api consumption.\\n\\n\\n</p>\\n\\n<h3> The Web Scraper </h3>\\n\\n<img src=\\\"images/project/whoishiring/post/job_json.png\\\" alt=\\\"json response example\\\" style=\\\"max-width:500px;width:100%\\\" />\\n<!--\\n<p>For the web scraper I utilized puppeteer which allows me to access the \\nwhoishiring site via a chromium browser on the backend.\\n</p>\\n\\n<h3> How the Web Scraper Functions</h3>\\n\\n<p>I had to do various things to make sure the scraper is getting the right content.</p>\\n\\n<h3>Getting the right job month</h3>\\n\\n<p>For the web scraper I had to do a few things to make it self efficient. For \\none I made sure it always went to the latest month by accessing the right \\nelement on the initial whoishiring page.\\nI do this by collecting all the submissions on the submission page for the\\nwhoishiring account.\\nI make sure to check if the text says whoishiring and then\\nI choose the first option from the array which should be the\\nfirst month for whoishiring.</p>\\n\\n<h3>Accessing all job postings</h3>\\n\\n<p>From there I needed to make sure I could access all the posts for the \\nmonth which were all on separate pages.\\n So I checked to see if the more button was present and incremented the \\n page for the next one. If there were no more buttons that was the end.</p>\\n\\n <h3> Sending to the frontend </h3>\\n\\n <p>Now obviously scraping for every request would be redundant and resource heavy,\\n  resulting in a slow api. So I saved the \\u201Cjob package\\u201D in an in-memory datastore \\n  so while the server is running the results are always ready to go. And set up a \\n  time interval so every 30 minutes the job package will update, so the data is \\n  always relatively up to date. The frontend gets a job package with all the\\n   job postings title and content along with their post id.</p>\\n \\n   <h3>The Frontend</h3>\\n\\n   <p>I created the frontend using React with functional\\n    components that utilize hooks. While also using react context to share \\n    data that needs to be accessed by multiple components.</p>\\n\\n    <h3>Frontend Feature List</h3>\\n<ul>  \\n<li>Viewing a card list of different job postings</li>\\n<li>Link to original job posting on hackernews</li>\\n<li>Job Search</li>\\n<li>Saving jobs to local storage</li>\\n<li>Full view </li>\\n<li>Dark//Light them switch</li>\\n</ul> -->\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  title: \"Job Board\",\n  html: whoIsHiring,\n  desc: \"Job board search for hackernews whoishiring.\",\n  projectResources: \"whoishiring\"\n});\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/projects/WhoIsHiring.js?");

/***/ }),

/***/ "./src/js/projects/index.js":
/*!**********************************!*\
  !*** ./src/js/projects/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _HboMaxClone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HboMaxClone */ \"./src/js/projects/HboMaxClone.js\");\n/* harmony import */ var _ScreenShareRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenShareRoom */ \"./src/js/projects/ScreenShareRoom.js\");\n/* harmony import */ var _WhoIsHiring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WhoIsHiring */ \"./src/js/projects/WhoIsHiring.js\");\n\n\n\n_WhoIsHiring__WEBPACK_IMPORTED_MODULE_2__.default;\n_ScreenShareRoom__WEBPACK_IMPORTED_MODULE_1__.default;\n_HboMaxClone__WEBPACK_IMPORTED_MODULE_0__.default;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_ScreenShareRoom__WEBPACK_IMPORTED_MODULE_1__.default, _HboMaxClone__WEBPACK_IMPORTED_MODULE_0__.default, _WhoIsHiring__WEBPACK_IMPORTED_MODULE_2__.default]);\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/projects/index.js?");

/***/ }),

/***/ "./src/js/terminal.js":
/*!****************************!*\
  !*** ./src/js/terminal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _textarea_caret_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-caret-position */ \"./src/js/textarea-caret-position.js\");\n/* harmony import */ var _textarea_caret_position__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_textarea_caret_position__WEBPACK_IMPORTED_MODULE_1__);\nvar monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nvar date = new Date();\nvar month = monthNames[date.getMonth()];\nvar day = date.getDate();\n\nvar stringDay = function stringDay(day) {\n  var endsWith = day.toString()[day.toString().length - 1];\n  console.log(day, endsWith);\n  var ending = \"th\";\n\n  if (endsWith === \"1\" && day !== 11) {\n    ending = \"st\";\n  }\n\n  if (endsWith === \"2\" && day !== 12) {\n    ending = \"nd\";\n  }\n\n  if (endsWith === \"3\" && day !== 13) {\n    ending = \"rd\";\n  }\n\n  return \"\".concat(day).concat(ending);\n};\n\nvar siteTerminal = document.getElementById(\"siteTerminal\");\nvar caret = document.getElementById(\"caret\");\nvar terminalInput = document.getElementById(\"terminalInput\");\n\n\nconsole.log((_textarea_caret_position__WEBPACK_IMPORTED_MODULE_1___default()));\nsiteTerminal.addEventListener(\"click\", function () {\n  terminalInput.focus();\n});\nvar caretInterval;\nterminalInput.addEventListener(\"focus\", function () {\n  if (caretInterval) return;\n  caret.style.opacity = \"1\";\n  caretInterval = setInterval(function () {\n    var opacity = caret.style.opacity;\n    caret.style.opacity = opacity === \"1\" ? \"0\" : \"1\";\n  }, 500);\n});\n\nvar moveCaret = function moveCaret() {\n  var move = _textarea_caret_position__WEBPACK_IMPORTED_MODULE_1___default()(terminalInput, terminalInput.selectionEnd);\n  caret.style.left = move.left + \"px\";\n};\n\n[\"keyup\", \"click\", \"scroll\"].forEach(function (event) {\n  terminalInput.addEventListener(event, moveCaret);\n});\nterminalInput.addEventListener(\"blur\", function () {\n  clearInterval(caretInterval);\n  caret.style.opacity = \"0\";\n  caretInterval = null;\n});\nterminalInput.addEventListener(\"input\", function (e) {});\nwindow.addEventListener(\"keyup\", function (e) {\n  if (e.code === \"KeyT\") {\n    terminalInput.focus();\n  }\n});\nterminalInput.addEventListener(\"keyup\", function (e) {\n  var fullText = e.target.value;\n  var command = e.target.value.split(\" \")[0].toLowerCase();\n  var commandError = \"\";\n\n  if (e.key === \"Enter\") {\n    console.log(\"running terminal command\", e.target.value);\n\n    if (command === \"easter-egg\") {\n      alert(\"Wow this is an easter egg. Good Job.\");\n    } else if (command === \"github\") {\n      window.open(\"https://github.com/SamG06\", \"_blank\").focus();\n    } else if (command === \"goto\") {\n      var area = e.target.value.split(\" \")[1];\n\n      if (area) {\n        var areaReady = area.toLowerCase().trim();\n\n        var scrollThere = function scrollThere(id) {\n          document.getElementById(id).scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n          });\n        };\n\n        if (areaReady === \"about\") {\n          scrollThere(\"aboutAnchor\");\n        } else if (areaReady === \"projects\") {\n          scrollThere(\"projectsAnchor\");\n        } else if (areaReady === \"home\") {\n          scrollThere(\"homeAnchor\");\n        } else {\n          commandError = \"\".concat(fullText.substr(fullText.indexOf(\" \") + 1), \" isn't a valid area.\");\n        }\n      }\n    } else {\n      commandError = \"\".concat(command, \" is not a valid command.\");\n    }\n\n    var previous = (0,_main__WEBPACK_IMPORTED_MODULE_0__.stringToFragment)(\"<div>sam's-site:~ <span class=\\\"gray-out\\\">\".concat(e.target.value, \"</span>\\n      <div class=\\\"command-error\\\">\").concat(commandError, \"</div>\\n      </div>\"));\n    previousCommands.append(previous);\n    terminalInput.value = \"\";\n    moveCaret();\n  }\n});\nvar completeDate = \"\".concat(month, \" \").concat(stringDay(day));\nvar loggedInEl = document.getElementById(\"loggedIn\");\n\nvar _goto = document.getElementById(\"goto\");\n\nvar typeText = function typeText(el, type) {\n  type.split(\"\").forEach(function (letter, index) {\n    setTimeout(function () {\n      el.innerHTML += letter;\n    }, index * 20);\n  });\n};\n\nvar loggedInText = \"Logged in \" + completeDate;\ntypeText(loggedInEl, loggedInText);\nsetTimeout(function () {\n  typeText(_goto, \"goto - goto home/about/projects ex: goto about\");\n}, loggedInText.length * 20);\nsetTimeout(function () {\n  typeText(github, \"github - opens my github in new tab\");\n}, loggedInText.length * 40);\nsetTimeout(function () {\n  typeText(terminalLabel, \"sam's-site:~\");\n\n  if (window.scrollY === 0) {\n    terminalInput.focus();\n  }\n}, loggedInText.length * 60);\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/terminal.js?");

/***/ }),

/***/ "./src/js/textarea-caret-position.js":
/*!*******************************************!*\
  !*** ./src/js/textarea-caret-position.js ***!
  \*******************************************/
/***/ ((module) => {

eval("!function () {\n  var p = [\"direction\", \"boxSizing\", \"width\", \"height\", \"overflowX\", \"overflowY\", \"borderTopWidth\", \"borderRightWidth\", \"borderBottomWidth\", \"borderLeftWidth\", \"borderStyle\", \"paddingTop\", \"paddingRight\", \"paddingBottom\", \"paddingLeft\", \"fontStyle\", \"fontVariant\", \"fontWeight\", \"fontStretch\", \"fontSize\", \"fontSizeAdjust\", \"lineHeight\", \"fontFamily\", \"textAlign\", \"textTransform\", \"textIndent\", \"textDecoration\", \"letterSpacing\", \"wordSpacing\", \"tabSize\", \"MozTabSize\"],\n      l = \"undefined\" != typeof window,\n      h = l && null != window.mozInnerScreenX;\n\n  function e(e, t, o) {\n    if (!l) throw new Error(\"textarea-caret-position#getCaretCoordinates should only be called in a browser\");\n    var i = o && o.debug || !1;\n    !i || (a = document.querySelector(\"#input-textarea-caret-position-mirror-div\")) && a.parentNode.removeChild(a);\n    o = document.createElement(\"div\");\n    o.id = \"input-textarea-caret-position-mirror-div\", document.body.appendChild(o);\n    var n = o.style,\n        r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,\n        d = \"INPUT\" === e.nodeName;\n    n.whiteSpace = \"pre-wrap\", d || (n.wordWrap = \"break-word\"), n.position = \"absolute\", i || (n.visibility = \"hidden\"), p.forEach(function (e) {\n      var t, o, i;\n      d && \"lineHeight\" === e ? \"border-box\" === r.boxSizing ? (t = parseInt(r.height), i = (o = parseInt(r.paddingTop) + parseInt(r.paddingBottom) + parseInt(r.borderTopWidth) + parseInt(r.borderBottomWidth)) + parseInt(r.lineHeight), n.lineHeight = i < t ? t - o + \"px\" : t === i ? r.lineHeight : 0) : n.lineHeight = r.height : n[e] = r[e];\n    }), h ? e.scrollHeight > parseInt(r.height) && (n.overflowY = \"scroll\") : n.overflow = \"hidden\", o.textContent = e.value.substring(0, t), d && (o.textContent = o.textContent.replace(/\\s/g, \" \"));\n    var a = document.createElement(\"span\");\n    a.textContent = e.value.substring(t) || \".\", o.appendChild(a);\n    t = {\n      top: a.offsetTop + parseInt(r.borderTopWidth),\n      left: a.offsetLeft + parseInt(r.borderLeftWidth),\n      height: parseInt(r.lineHeight)\n    };\n    return i ? a.style.backgroundColor = \"#aaa\" : document.body.removeChild(o), t;\n  }\n\n   true && void 0 !== module.exports ? module.exports = e : l && (window.getCaretCoordinates = e);\n}();\n\n//# sourceURL=webpack://vanilla-portfolio/./src/js/textarea-caret-position.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;