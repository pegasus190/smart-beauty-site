/* animation.js */
const circleContainer = document.getElementById('circles');
const colors = ['circle','diamond-circle'];
const circles = [];

for(let i=0;i<25;i++){
  let circle = document.createElement('div');
  let size = Math.random() * 60 + 20;
  circle.className = 'circle ' + colors[Math.floor(Math.random()*colors.length)];
  circle.style.width = size + 'px';
  circle.style.height = size + 'px';
  circle.style.top = Math.random() * window.innerHeight + 'px';
  circle.style.left = Math.random() * window.innerWidth + 'px';
  circle.style.opacity = Math.random() * 0.6 + 0.2;
  circleContainer.appendChild(circle);

  circles.push({
    el: circle,
    x: parseFloat(circle.style.left),
    y: parseFloat(circle.style.top),
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    opacityDir: Math.random() < 0.5 ? 0.005 : -0.005
  });
}

function animateCircles() {
  circles.forEach(c => {
    c.x += c.dx;
    c.y += c.dy;
    if(c.x < -50) c.x = window.innerWidth + 50;
    if(c.x > window.innerWidth + 50) c.x = -50;
    if(c.y < -50) c.y = window.innerHeight + 50;
    if(c.y > window.innerHeight + 50) c.y = -50;

    let newOpacity = parseFloat(c.el.style.opacity) + c.opacityDir;
    if(newOpacity > 0.8 || newOpacity < 0.2) c.opacityDir *= -1;
    c.el.style.opacity = newOpacity;

    c.el.style.transform = `translate(${c.x}px, ${c.y}px)`;
  });
  requestAnimationFrame(animateCircles);
}

animateCircles();
