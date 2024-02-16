const mouse = {
  x: null,
  y: null,
};


function createHeart() {
    const heart = document.createElement("div");
    const heartStyle = heart.style;
    heart.textContent = "❤️";
    heartStyle.position = "absolute";
    heartStyle.top = `${mouse.y}px`;
    heartStyle.left = `${mouse.x}px`;
    heartStyle.scale = `${Math.random() * 100 + 30}%`
    heartStyle.rotate = `${Math.random() * 50 - 25}deg`
    document.body.appendChild(heart);
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 200);
}

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  createHeart();
});
