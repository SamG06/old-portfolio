import { videoGenerator } from "./pieces";

const whoIsHiring = /*html*/ `
<h1> Hacker News Job Board </h1>

<p>Tools used: Node JS, Puppeter, React</p>

<p> The Web Scraper code you can see <a href="https://github.com/SamG06/Who-is-hiring-scraper" target="_blank" rel="noopener noreferrer"> here</a> </p>
<div class="project-links">
  <a href="https://whoishiringboard.netlify.app/" target="_blank" rel="noopener noreferrer">
    View Live
  </a>
  <a href="https://github.com/SamG06/WhoIsHiring-Job-Board" target="_blank" rel="noopener noreferrer">
    View Code
  </a>
</div>

${videoGenerator("f2d26271fea1a27c12d6bbb914b3192e")}
<h3>What is it?</h3>

<p>This project is a web app used to help navigate the <a href="https://news.ycombinator.com/submitted?id=whoishiring" target="_blank" rel="noopener noreferrer">whoishiring thread</a> on Hacker News. 
To accomplish this I created keyword search and job post saving features using React.
<br>
<br>
The data you see on this application comes from my own API that runs a node script which scrapes 
the whoishiring thread for jobs postings and makes it ready for API consumption. 


</p>


`;

export default {
  title: "Job Board",
  html: whoIsHiring,
  desc: "Job board search for hackernews whoishiring.",
  projectResources: "whoishiring",
};
