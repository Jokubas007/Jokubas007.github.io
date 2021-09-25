function generate(canvas, sandbox) {
  const animationStep = 1 - (window.scrollY) / window.innerHeight === 1 ? 
                          1.1 : 1 - (window.scrollY) / window.innerHeight;
  canvas.style.opacity = 1;

  const shaderFrag = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    #define PI 3.1415926535
    #define HALF_PI 1.57079632679

    uniform vec2 u_resolution;
    uniform float u_treshold;

    uniform sampler2D u_image; // ../assets/transition/transition.png

    void main(){
      vec2 uv = gl_FragCoord.xy/u_resolution.xy;
      vec2 textCoord = gl_FragCoord.xy / u_resolution;

      vec4 col = texture2D(u_image, uv).xyzw;
      col = smoothstep(${animationStep}, ${animationStep+0.05} , col);
      col.a = col.x;


      gl_FragColor = col;
    }
  `;
  if (animationStep <= 0.4) {
    const blur = Math.max(animationStep*5/0.4, 0);
    if (animationStep >= 0.2) {
      canvas.style.filter = `blur(${blur}px)`;
    } else {
      canvas.style.filter = `blur(0px)`;
    }
    
  } else {
    canvas.style.filter = `blur(5px)`;
  }
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  sandbox.load(shaderFrag);
}

const canvas = document.getElementById('canvas-transition');
canvas.style.opacity = 0;

const scaleX = (window.innerWidth) / 500;
const scaleY = window.innerHeight / 500;
//canvas.style.transform = `scale(${scaleX}, ${scaleY})`;
//canvas.style.transformOrigin = 'top left';

const sandbox = new GlslCanvas(canvas);

setTimeout(() => generate(canvas, sandbox), 100);


window.addEventListener('scroll', () => generate(canvas, sandbox));
window.addEventListener('resize', () => {
  const scaleX = (window.innerWidth) / 500;
  const scaleY = window.innerHeight / 500;
  //canvas.style.transform = `scale(${scaleX}, ${scaleY})`;
});
