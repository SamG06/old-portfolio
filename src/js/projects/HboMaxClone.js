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


<div class="video-wrapper">
  <iframe
    src="https://iframe.videodelivery.net/a2134cde6879331d816963ffbe9cb8d3"
    style="border: none;width: 70%;max-width:1080px"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen="true"
    id="stream-player"
  ></iframe>

  <script src="https://embed.videodelivery.net/embed/sdk.latest.js"></script>

  <!-- Your JavaScript code below-->
  <script>
    const player = Stream(document.getElementById('stream-player'))
    player.addEventListener('play', () => {
      console.log('playing!')
    })
    player.play().catch(() => {
      console.log('playback failed, muting to try again')
      player.muted = true
      player.play()
    })
  </script>
</div>

<p>Clone of the streaming service Hbo Max made with HTML, CSS and JavaScript.</p>
`;

export default {
  title: "Hbo Max Clone",
  html: hboMaxClone,
  desc: "Clone of Hbo Max built with just html, css and js.",
  projectResources: "hbomaxclone",
};
