function generate(canvas, sandbox) {
  const animationStep = 1 - (window.scrollY) / window.innerHeight === 1 ? 
                          1.1 : 1 - (window.scrollY) / window.innerHeight;
  canvas.style.opacity = 1;

  const shaderFrag = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_treshold;

    uniform sampler2D u_image; // ../assets/transition/transition.png

    void main(){
      vec2 uv = gl_FragCoord.xy/u_resolution.xy;
      vec2 textCoord = gl_FragCoord.xy / u_resolution;

      vec4 col = texture2D(u_image, uv).xyzw;
      col = step(${animationStep}, col);
      col.a = col.x;

      gl_FragColor = col;
    }
  `;
  canvas.width = 2*canvas.clientWidth;
  canvas.height = 2*canvas.clientHeight;
  sandbox.load(shaderFrag);
}

const canvas = document.getElementById('canvas-transition');
canvas.style.opacity = 0;

const sandbox = new GlslCanvas(canvas);

if (window.innerWidth >= 1024) {
  setTimeout(() => generate(canvas, sandbox), 100);
}

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 1024) {
    generate(canvas, sandbox);
  }
});
