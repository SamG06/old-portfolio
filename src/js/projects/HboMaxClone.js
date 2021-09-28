import { videoGenerator } from "./pieces";

const hboMaxClone = /*html*/ `
<h1> Hbo Max Clone </h1>

<p>Tools used: HTML, CSS, Javascript, ESBuild</p>

<div class="project-links">
  <a href="https://streaming-service-clone.netlify.app/" target="_blank" rel="noopener noreferrer">
    View Live
  </a>
  <a href="https://github.com/SamG06/streaming-service-clone" target="_blank" rel="noopener noreferrer">
    View Code
  </a>
</div>

${videoGenerator("a2134cde6879331d816963ffbe9cb8d3")}

<p>Clone of the streaming service Hbo Max made with HTML, CSS and JavaScript.</p>
`;

export default {
  title: "Hbo Max Clone",
  html: hboMaxClone,
  desc: "Clone of Hbo Max built with just html, css and js.",
  projectResources: "hbomaxclone",
};
