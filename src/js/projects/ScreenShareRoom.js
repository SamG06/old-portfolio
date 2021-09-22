const screenShareRoom = /*html*/ `
<h1> Screen Share Room</h1>

<p>Tools used: Vue, PeerJS/WebRTC </p>

<div class="project-links">
  <a href="https://screenshareroom.netlify.app/" target="_blank" rel="noopener noreferrer">
    View Live
  </a>
  <a href="https://github.com/SamG06/screen-share-room" target="_blank" rel="noopener noreferrer">
    View Code
  </a>
</div>
<div class="video-wrapper">
  <iframe
    src="https://iframe.videodelivery.net/299999106b10dc42c41f5e734f298963"
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

<h3>What It Does</h3>

<p>
  This project is a web app that allows users to send messages
   and a host to share their screen using a peer to peer connection between participants browsers.
</p>
`;

export default {
  html: screenShareRoom,
  title: "Screen Share Room",
  projectResources: "screenshareroom",
  desc: "Screen share room using WebRTC (PeerJS).",
};
