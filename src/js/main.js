import whoIsHiring from "./projects/WhoIsHiring";
import terminal from "./terminal";

const githubsvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9844 2.98035C10.3242 2.97644 2.5 10.7968 2.5 20.4491C2.5 28.0819 7.39453 34.5702 14.2109 36.953C15.1289 37.1835 14.9883 36.5311 14.9883 36.0858V33.0585C9.6875 33.6796 9.47266 30.1718 9.11719 29.5858C8.39844 28.3593 6.69922 28.0468 7.20703 27.4608C8.41406 26.8397 9.64453 27.6171 11.0703 29.7226C12.1016 31.2499 14.1133 30.9921 15.1328 30.7382C15.3555 29.8202 15.832 28.9999 16.4883 28.3632C10.9961 27.3788 8.70703 24.0272 8.70703 20.0429C8.70703 18.1093 9.34375 16.3319 10.5938 14.8983C9.79688 12.535 10.668 10.5116 10.7852 10.2108C13.0547 10.0077 15.4141 11.8358 15.5977 11.9804C16.8867 11.6327 18.3594 11.4491 20.0078 11.4491C21.6641 11.4491 23.1406 11.6405 24.4414 11.9921C24.8828 11.6561 27.0703 10.0858 29.1797 10.2772C29.293 10.578 30.1445 12.5546 29.3945 14.8866C30.6602 16.3241 31.3047 18.1171 31.3047 20.0546C31.3047 24.0468 29 27.4022 23.4922 28.371C23.9639 28.8349 24.3385 29.3882 24.5941 29.9986C24.8496 30.6089 24.981 31.264 24.9805 31.9257V36.3202C25.0117 36.6718 24.9805 37.0194 25.5664 37.0194C32.4844 34.6874 37.4648 28.1522 37.4648 20.453C37.4648 10.7968 29.6367 2.98035 19.9844 2.98035Z" fill="#D6D6D6"/>
</svg>
`;

const openLink = `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.1875 2.0625V26.8125H30.9375V2.0625H6.1875ZM28.875 24.75H8.25V4.125H28.875V24.75ZM4.125 28.875V7.21875L2.0625 5.15625V30.9375H27.8438L25.7812 28.875H4.125Z" fill="#E4E4E4"/>
<path d="M11.3438 8.25L16.5 13.4062L10.3125 19.5938L13.4062 22.6875L19.5938 16.5L24.75 21.6562V8.25H11.3438Z" fill="#E4E4E4"/>
</svg>
`;

window.addEventListener("load", () => {
  document.querySelector("body").style.opacity = 1;
  document.querySelector("body").classList.add("page-ready");
});

// Generate Technologies
export const stringToFragment = (html) =>
  document.createRange().createContextualFragment(html);

const listEl = document.getElementById("techList");

const technologies = [
  {
    title: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "Vue", "React", "WebRTC"],
  },
  {
    title: "Backend",
    tech: ["Node JS(Fastify, Express)", "MongoDB", "PostgreSQL", "Socket.io"],
  },
  {
    title: "Dev Tools",
    tech: ["VsCode", "Digital Ocean", "Git", "Heroku"],
  },
];

technologies.forEach((e) => {
  const techs = e.tech.map((tech) => `<li>${tech}</li>`);
  const completeList = stringToFragment(
    `<div class="tech-list"><h5>${e.title}</h5><ul>${techs.join(
      ""
    )} </ul></div>`
  );
  listEl.appendChild(completeList);
});

const siteTerminal = document.getElementById("siteTerminal");
const content = document.querySelector(".content");

const terminalTransform = () => {
  const distanceFromTop = content.getBoundingClientRect().top;
  if (distanceFromTop < 80) {
    siteTerminal.classList.add("mini-version");
  } else {
    siteTerminal.classList.remove("mini-version");
  }
};

//window.addEventListener("scroll", () => terminalTransform());

// PROJECTS
import projects from "./projects/index";

const githubSvg = `<svg class="github-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9844 2.98035C10.3242 2.97644 2.5 10.7968 2.5 20.4491C2.5 28.0819 7.39453 34.5702 14.2109 36.953C15.1289 37.1835 14.9883 36.5311 14.9883 36.0858V33.0585C9.6875 33.6796 9.47266 30.1718 9.11719 29.5858C8.39844 28.3593 6.69922 28.0468 7.20703 27.4608C8.41406 26.8397 9.64453 27.6171 11.0703 29.7226C12.1016 31.2499 14.1133 30.9921 15.1328 30.7382C15.3555 29.8202 15.832 28.9999 16.4883 28.3632C10.9961 27.3788 8.70703 24.0272 8.70703 20.0429C8.70703 18.1093 9.34375 16.3319 10.5938 14.8983C9.79688 12.535 10.668 10.5116 10.7852 10.2108C13.0547 10.0077 15.4141 11.8358 15.5977 11.9804C16.8867 11.6327 18.3594 11.4491 20.0078 11.4491C21.6641 11.4491 23.1406 11.6405 24.4414 11.9921C24.8828 11.6561 27.0703 10.0858 29.1797 10.2772C29.293 10.578 30.1445 12.5546 29.3945 14.8866C30.6602 16.3241 31.3047 18.1171 31.3047 20.0546C31.3047 24.0468 29 27.4022 23.4922 28.371C23.9639 28.8349 24.3385 29.3882 24.5941 29.9986C24.8496 30.6089 24.981 31.264 24.9805 31.9257V36.3202C25.0117 36.6718 24.9805 37.0194 25.5664 37.0194C32.4844 34.6874 37.4648 28.1522 37.4648 20.453C37.4648 10.7968 29.6367 2.98035 19.9844 2.98035Z" fill="#D6D6D6"/>
</svg>
`;

const openLinkSvg = `<svg class="link-svg" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.1875 2.0625V26.8125H30.9375V2.0625H6.1875ZM28.875 24.75H8.25V4.125H28.875V24.75ZM4.125 28.875V7.21875L2.0625 5.15625V30.9375H27.8438L25.7812 28.875H4.125Z" fill="#E4E4E4"/>
<path d="M11.3438 8.25L16.5 13.4062L10.3125 19.5938L13.4062 22.6875L19.5938 16.5L24.75 21.6562V8.25H11.3438Z" fill="#E4E4E4"/>
</svg>
`;

const projectEL = ({ title, desc, projectResources }, i) => {
  return stringToFragment(
    `<article class="project-card" onclick="showProject(${i});window.scrollTo(0, 0);"  >
   
      <div  class="project-image-container">
        <div class="purple-overlay"></div>
        <img src="images/project/${projectResources}/card.png" alt="image of project"/>
      </div>
      <div class="info">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="project-actions">
          <button  class="learn-more" onclick="showProject(${i});window.scrollTo(0, 0);">Learn More</button>
        </div>   
        </div>
    </article>`
  );
};

const projectsContainer = document.querySelector(".projects-container");

const projectsFragment = document.createDocumentFragment();

projects.forEach((v, i) => {
  const el = projectEL(v, i);
  projectsFragment.appendChild(el);
});

projectsContainer.appendChild(projectsFragment);

const projectIndex = () => {
  const url = window.location.href;
  const projectIndex = url.substring(url.lastIndexOf("/") + 1);
  const projectDoesNotExist = projects.length - 1 < projectIndex;
  const lowerThanZero = projectIndex < 0;
  const notANumber = isNaN(projectIndex);
  console.log(notANumber, "not number");
  console.log(lowerThanZero, "lower than zero");
  console.log(
    projectDoesNotExist,
    projects.length,
    projectIndex,
    "does not exist"
  );
  if (notANumber || lowerThanZero || projectDoesNotExist) {
    return false;
  }
  return projectIndex;
};

function projectToShow() {
  console.log("showing project" + projectIndex());
  const index = projectIndex();
  const home = document.querySelector(".homepage");
  const project = document.querySelector(".project-display");
  if (projectIndex()) {
    home.style.display = "none";
    project.innerHTML = projects[index].html;
    project.style.display = "block";
  } else {
    home.style.display = "block";
    project.innerHTML = "";
    project.style.display = "none";
  }
}

window.showProject = (index) => {
  // Prevent multiple pushes in history
  if (projectIndex() === index.toString()) {
    document.title = "Portfolio | Samuel Graham";
    return;
  }
  history.pushState({ project: index }, projects[index].title, `${index}`);
  document.title = projects[index].title;
  projectToShow();
};

// Running project to show on load
projectToShow();

// Managing project viewer through url
window.addEventListener("popstate", ({ state }) => {
  console.log("poo");
  console.log("url state POPPED", state);
  projectToShow();
});

// Scrolling

window.scrollToAnchor = (area) => {
  history.pushState("", "", `/`);
  document.title = "Portfolio | Samuel Graham";

  projectToShow();
  document.getElementById(`${area}Anchor`).scrollIntoView({
    behavior: "smooth",
  });
};
