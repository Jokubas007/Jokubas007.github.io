
document.querySelector('.card-container .button-container .readbtn:first-child > img').addEventListener(
  'click',
  () => {
    document.querySelector('.left-card-container').classList.add('open');
    document.querySelector('.right-card-container').classList.add('open');
    document.querySelector('.card-container .button-container .readbtn:first-child').classList.add('hidden');
    document.querySelector('.card-container .button-container .readbtn:last-child').classList.remove('hidden');
    repositionReadbtn();
  }
);

document.querySelector('.card-container .button-container .readbtn:first-child > img').addEventListener(
  'keypress',
  () => {
    document.querySelector('.left-card-container').classList.add('open');
    document.querySelector('.right-card-container').classList.add('open');
    document.querySelector('.card-container .button-container .readbtn:first-child').classList.add('hidden');
    document.querySelector('.card-container .button-container .readbtn:last-child').classList.remove('hidden');
    repositionReadbtn();
  }
);


document.querySelector('.card-container .button-container .readbtn:last-child > img').addEventListener(
  'click',
  () => {
    document.querySelector('.left-card-container').classList.remove('open');
    document.querySelector('.right-card-container').classList.remove('open');
    document.querySelector('.card-container .button-container .readbtn:first-child').classList.remove('hidden');
    document.querySelector('.card-container .button-container .readbtn:last-child').classList.add('hidden');
    repositionReadbtn();
  }
);

document.querySelector('.card-container .button-container .readbtn:last-child > img').addEventListener(
  'keypress',
  () => {
    document.querySelector('.left-card-container').classList.remove('open');
    document.querySelector('.right-card-container').classList.remove('open');
    document.querySelector('.card-container .button-container .readbtn:first-child').classList.remove('hidden');
    document.querySelector('.card-container .button-container .readbtn:last-child').classList.add('hidden');
    repositionReadbtn();
  }
);

function repositionReadbtn() {
  const card = document.querySelector('.card-container');
  const nav = document.querySelector('.navbar-container');
  const button = document.querySelector('.card-container .button-container .readbtn:not(.hidden)');
  const cardTop = card.getBoundingClientRect().top - nav.offsetHeight;
  if (cardTop - 40 - button.offsetHeight + card.offsetHeight <= 0) {
    button.style.position = "absolute";
    button.style.top = null;
    button.style.bottom = `${0}px`;
  } else if (cardTop <= 0) {
    button.style.position = "fixed";
    button.style.top = `${nav.offsetHeight + 25}px`;
    button.style.bottom = null;
  } else {
    button.style.position = "relative";
    button.style.top = null;
    button.style.bottom = null;
  }
}

window.addEventListener(
  'scroll',
  repositionReadbtn
)
