const cat = document.getElementById("cat");
let position = 0;
let direction = "right";

const stillCat = "https://media.giphy.com/media/ql96nmkwvjV3a/giphy.gif";
const walkingCat =
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxiZWM3ZDk5a242emlodmNrejhheHVjZHk5azlwMzlmZXI0bmhyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D5GyCFkInbJlu/giphy.gif";

document.addEventListener("keydown", (event) => {
  const step = 10;
  const maxWidth = window.innerWidth - cat.offsetWidth;

  if (event.key === "ArrowRight") {
    cat.src = walkingCat;
    position += step;
    direction = "right";
  } else if (event.key === "ArrowLeft") {
    cat.src = walkingCat;
    position -= step;
    direction = "left";
  }

  // Constrain the position
  position = Math.max(0, Math.min(position, maxWidth));

  cat.style.left = `${position}px`;
  cat.style.transform = direction === "left" ? "scaleX(-1)" : "scaleX(1)";
});

