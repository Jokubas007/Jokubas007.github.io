function background (){
  let animationFrame = 0;
  const animationLength = 750;

  const circles = [
    {
      radius: 0.13,
      x: 0.95,
      y: 112,
      delay: 0,
    },
    {
      radius: 0.2,
      x: 0,
      y: 500,
      delay: 100,
    },
    {
      radius: 0.1,
      x: 0.75,
      y: 800,
      delay: 250,
    },
    {
      radius: 0.11,
      x: 0.15,
      y: 1350,
      delay: 450,
    },
    {
      radius: 0.22,
      x: 1,
      y: 2000,
      delay: 350,
    },
    {
      radius: 0.12,
      x: 0.3,
      y: 2700,
      delay: 650,
    },
  ];

  function getPosition(currentAnimationFrame, length){
    const z = (currentAnimationFrame % length) / length;
    if (z <= 0.4) {
      return 4 * ((1 / 0.4) * z * (1 - (1 / 0.4) * z));
    }
    return 0;
  };

  function draw(){
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const background = document.querySelector('.background');

    const width = background.offsetWidth;
    const height = background.offsetHeight;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    ctx.clearRect(0, 0, windowWidth, windowHeight);

    if(window.innerWidth >= 1024) {
      circles.forEach((circle) => {
        ctx.fillStyle = `rgba(26, 132, 137, ${0.8 * (getPosition(animationFrame + circle.delay, animationLength))})`;
        for (let i = 0; i <= Math.floor(height / 3000); i++) {
          ctx.beginPath();
          ctx.arc(
            width * circle.x,
            circle.y - window.scrollY + i * 3000,
            circle.radius * windowWidth, 0, 2 * Math.PI,
          );
          ctx.fill();
        }
      });
  
      animationFrame += 1;
    }

    window.requestAnimationFrame(draw);
  };

  window.requestAnimationFrame(draw);
}

background();
