function generate(canvas, sandbox) {
  const animationStep = 1 - (window.scrollY) / window.innerHeight === 1 ? 1.1 : 1 - (window.scrollY) / window.innerHeight;
  canvas.style.opacity = 1;

  const shaderFrag = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    #define PI 3.1415926535
    #define HALF_PI 1.57079632679

    uniform vec2 u_resolution;
    uniform float u_treshold;

    uniform sampler2D u_sprite; // ../assets/transition/transition.png

    void main(){
      vec2 uv = gl_FragCoord.xy/u_resolution.xy;

      vec4 col = texture2D(u_sprite, uv);
      col = step(${animationStep}, col);
      col.a = col.x;

      gl_FragColor = col;
    }
  `;
  if (animationStep <= 0.045) {
    const blur = Math.max(animationStep*10/0.045, 0);
    canvas.style.filter = `blur(${blur}px)`;
  } else {
    canvas.style.filter = 'blur(10px)';
  }
  sandbox.load(shaderFrag);
}

const canvas = document.getElementById('canvas-transition');
canvas.style.opacity = 0;

const scaleX = (window.innerWidth) / 500;
const scaleY = window.innerHeight / 500;
canvas.style.transform = `scale(${scaleX}, ${scaleY})`;
canvas.style.transformOrigin = 'top left';

const sandbox = new GlslCanvas(canvas);

window.addEventListener('scroll', () => generate(canvas, sandbox));
window.addEventListener('resize', () => {
  const scaleX = (window.innerWidth) / 500;
  const scaleY = window.innerHeight / 500;
  canvas.style.transform = `scale(${scaleX}, ${scaleY})`;
});
