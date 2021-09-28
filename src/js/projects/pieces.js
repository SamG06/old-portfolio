export const videoGenerator = (videoId) => /*html*/ `<div class="video-wrapper">
    <iframe
      src="https://iframe.videodelivery.net/${videoId}"
      style="border: none;width: 100%;max-width:1080px"
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
  </div>`;
