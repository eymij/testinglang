document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("start-overlay");
  const music = document.getElementById("bg-music");

  const startApp = () => {
    if (music) {
      music.play().catch((e) => console.warn("Audio play failed:", e));
    }
    overlay.style.display = "none";
    document.removeEventListener("click", startApp);
  };

  document.addEventListener("click", startApp);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s"; // 2–5s
  document.getElementById("heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);
