const animation = document.getElementById('overview-animation');
let animationInProgress = false;
let animationLeftViewport = animation.getBoundingClientRect().top + animation.getBoundingClientRect().height >= 0 && 
                            animation.getBoundingClientRect().bottom - animation.getBoundingClientRect().height <= window.innerHeight;

window.addEventListener(
  'scroll',
  () => {
    const animationInViewport = animation.getBoundingClientRect().top + animation.getBoundingClientRect().height >= 0 && 
                                animation.getBoundingClientRect().bottom - animation.getBoundingClientRect().height <= window.innerHeight;
    if (!animationInViewport && !animationLeftViewport && !animationInProgress) {
      animationLeftViewport = true;
      animation.innerHTML = `
        <defs>
          <marker
              id="arrowhead"
              markerWidth="5"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto">
              <polygon
                  points="0 0, 5 3.5, 0 7"
                  fill="#054d54"
              />
          </marker>
        </defs>
        <line 
          x1="50"
          y1="200"
          x2="900"
          y2="200"
          style="stroke:#054d54; stroke-width:2"
          marker-end="url(#arrowhead)"
        />
        <line 
          x1="200"
          y1="380"
          x2="200"
          y2="20"
          style="stroke:#054d54; stroke-width:2"
          marker-end="url(#arrowhead)"
        />
      `;
    }
    if (animationInViewport && !animationInProgress && animationLeftViewport) {
      animationInProgress = true;
      animationLeftViewport = false;
      drawSineAnimation('overview-animation', 3*0.01, 3, () => {animationInProgress = false}, () => {});
    }
  }
);

const proteinAnimation = document.getElementById('protein-animation');
let proteinAnimationPlayed = false;

window.addEventListener(
  'scroll',
  () => {
    const proteinAnimationInViewport = proteinAnimation.getBoundingClientRect().top + proteinAnimation.getBoundingClientRect().height >= 0 && 
                                proteinAnimation.getBoundingClientRect().bottom - proteinAnimation.getBoundingClientRect().height <= window.innerHeight;
    if (proteinAnimationInViewport && !proteinAnimationPlayed) {
      proteinAnimationPlayed = true;
      drawSineAnimation('protein-animation', 4*0.01, 3, () => {}, () => {
        [...document.querySelectorAll('#protein-animation .svg-button')].forEach((button) => {
          button.addEventListener(
            'click',
            () => {
              [...document.querySelectorAll('.protein-cycle')].forEach((el) => el.classList.remove('active'));
              [...document.querySelectorAll('#protein-animation .svg-button')].forEach((el) => el.classList.remove('active'));
              document.getElementById(`protein-cycle-${button.id.replace(/[^0-9]+/, "")}`).classList.add('active');
              document.getElementById(`protein-animation-${button.id.replace(/[^0-9]+/, "")}`).classList.add('active');
              button.blur()
            }
          );
          button.setAttribute('tabindex', 0);
          button.addEventListener(
            'keypress',
            () => {
              [...document.querySelectorAll('.protein-cycle')].forEach((el) => el.classList.remove('active'));
              [...document.querySelectorAll('#protein-animation .svg-button')].forEach((el) => el.classList.remove('active'));
              document.getElementById(`protein-cycle-${button.id.replace(/[^0-9]+/, "")}`).classList.add('active');
              document.getElementById(`protein-animation-${button.id.replace(/[^0-9]+/, "")}`).classList.add('active');
            }
          );
        });
      });
    }
  }
);


