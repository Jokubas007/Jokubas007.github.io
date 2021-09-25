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
    col = step(u_treshold, col);

    gl_FragColor = col;
}