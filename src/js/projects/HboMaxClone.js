const hboMaxClone = /*html*/ `
<h1> Hbo Max Clone </h1>

<p>Tools used: HTML, CSS, Javascript, Esbuild</p>

<h3>What It Does</h3>

<p>Hacker news has a thread where there are monthly job postings from 
around the world. It can be hard to navigate on the main site so 
I created a tool that makes it a tad bit easier to find jobs that 
suit yourself and save them for later if you need by collecting data
 from the latest month posting.</p>

<h3> The Web Scraper </h3>

<p>For the web scraper I utilized puppeteer which allows me to access the 
whoishiring site via a chromium browser on the backend.
</p>

<h3> How the Web Scraper Functions</h3>

<p>I had to do various things to make sure the scraper is getting the right content.</p>

<h3>Getting the right job month</h3>

<p>For the web scraper I had to do a few things to make it self efficient. For 
one I made sure it always went to the latest month by accessing the right 
element on the initial whoishiring page.
I do this by collecting all the submissions on the submission page for the
whoishiring account.
I make sure to check if the text says whoishiring and then
I choose the first option from the array which should be the
first month for whoishiring.</p>

<h3>Accessing all job postings</h3>

<p>From there I needed to make sure I could access all the posts for the 
month which were all on separate pages.
 So I checked to see if the more button was present and incremented the 
 page for the next one. If there were no more buttons that was the end.</p>

 <h3> Sending to the frontend </h3>

 <p>Now obviously scraping for every request would be redundant and resource heavy,
  resulting in a slow api. So I saved the “job package” in an in-memory datastore 
  so while the server is running the results are always ready to go. And set up a 
  time interval so every 30 minutes the job package will update, so the data is 
  always relatively up to date. The frontend gets a job package with all the
   job postings title and content along with their post id.</p>
 
   <h3>The Frontend</h3>

   <p>I created the frontend using React with functional
    components that utilize hooks. While also using react context to share 
    data that needs to be accessed by multiple components.</p>

    <h3>Frontend Feature List</h3>
<ul>  
<li>Viewing a card list of different job postings</li>
<li>Link to original job posting on hackernews</li>
<li>Job Search</li>
<li>Saving jobs to local storage</li>
<li>Full view </li>
<li>Dark//Light them switch</li>
</ul>
`;

export default {
  title: "Hbo Max Clone",
  html: hboMaxClone,
  desc: "Clone of Hbo Max built with just html, css and js.",
  projectResources: "hbomaxclone",
};
