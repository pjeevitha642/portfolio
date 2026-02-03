const totalFrames = 240;
let currentFrame = 1;
const frameImg = document.getElementById("bgFrame");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const frame = Math.floor((scrollTop / maxScroll) * totalFrames) + 1;
  currentFrame = Math.min(totalFrames, Math.max(1, frame));

  frameImg.src = `images/ezgif-frame-${String(currentFrame).padStart(3, '0')}.jpg`;
});
