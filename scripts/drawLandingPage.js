

const orangeCountries = [
  {
    name: "India",
    percentage: "19",
    selector: "#IN",
    tooltipClass: "tooltip-india",
    tooltipSelector: ".tooltip-india",
    tooltipShift: -35
  },
  {
    name: "Egypt",
    percentage: "21",
    selector: "#EG",
    tooltipClass: "tooltip-egypt",
    tooltipSelector: ".tooltip-egypt",
    tooltipShift: 0
  },
  {
    name: "South Africa",
    percentage: "27",
    selector: "#ZA",
    tooltipClass: "tooltip-south-africa",
    tooltipSelector: ".tooltip-south-africa",
    tooltipShift: 0
  },
  {
    name: "Mexico",
    percentage: "21",
    selector: "#MX",
    tooltipClass: "tooltip-mexico",
    tooltipSelector: ".tooltip-mexico",
    tooltipShift: 0
  },
  {
    name: "Brazil",
    percentage: "21",
    selector: "#BR",
    tooltipClass: "tooltip-brazil",
    tooltipSelector: ".tooltip-brazil",
    tooltipShift: 0
  },
  {
    name: "Malaysia",
    percentage: "18.6",
    selector: "#MY",
    tooltipClass: "tooltip-malaysia",
    tooltipSelector: ".tooltip-malaysia",
    tooltipShift: -250
  },
  {
    name: "Yemen",
    percentage: "59",
    selector: "#YE",
    tooltipClass: "tooltip-yemen",
    tooltipSelector: ".tooltip-yemen",
    tooltipShift: -250
  },
  {
    name: "United Arab Emirates",
    percentage: "30",
    selector: "#AE",
    tooltipClass: "tooltip-uab",
    tooltipSelector: ".tooltip-uab",
    tooltipShift: -250
  },
]

const tooltipString = orangeCountries.map((country) => `
  <div class="map-tooltip ${country.tooltipClass}">
    <div>${country.name}</div>
    <div>Prevalence of <i>E. histolytica</i> infection is <b>${country.percentage}%</b> of the population</div>
  </div>
`).join('\n');

document.querySelector(".map-container").innerHTML = `
  ${tooltipString}
  <div class="map"></div>
`;

document.querySelector(".map").innerHTML = map;

orangeCountries.forEach((country) => {
  document.querySelector(`${country.selector}`).addEventListener(
    "mouseover",
    () => {
      document.querySelector(`${country.tooltipSelector}`).style.display = "block";
    }
  );
  
  document.querySelector(`${country.selector}`).addEventListener(
    "mouseleave",
    () => {
      document.querySelector(`${country.tooltipSelector}`).style.display = "none";
    }
  );
})

function drawTooltip() {
  orangeCountries.forEach((country) => {
    const countryCoords = document.querySelector(`${country.selector}`).getBoundingClientRect();

    document.querySelector(`${country.tooltipSelector}`).style.top = `${countryCoords.top-125}px`;
    document.querySelector(`${country.tooltipSelector}`).style.left = `${countryCoords.left - 205/2 - country.tooltipShift}px`;
  })

  requestAnimationFrame(drawTooltip);
}

drawTooltip();

let circles = [];
const circleUpdatePeriod = 10;
let currentFrame = 0;
const rows = 24;
const columns = 30;

let circlesString = "";
for(let i = 0; i < rows; i++){
  for(let j = 0; j < columns; j++){
    circlesString += `<circle class="simulation-circle" id="simulation-circle-${columns*i+j}" cx=${20+j*20} cy=${25+i*20} r="7" stroke="black" stroke-width="1" fill="white" />`
    circles.push(null)
  }
}

circlesString = `
  <svg viewBox="0 0 612 492">
    ${circlesString}
  </svg>
`

document.querySelector('.circles-container').innerHTML = circlesString;

function onSimulationCircleHover(e) {
  const number = Number(document.querySelector(`#${e.target.id}`).id.replace(/[A-Za-z-]/g, ''));
  if(circles[number] === null){
    if(Math.random() < 0.2) {
      e.target.style.fill = "#EF9F89";
      circles[number] = currentFrame % circleUpdatePeriod;
    } else {
      e.target.style.fill = "#FCCEC0";
      circles[number] = currentFrame % circleUpdatePeriod;
    }
  }
}

[...document.querySelectorAll('.simulation-circle')].forEach((circle) => {
  circle.addEventListener(
    "mouseover",
    onSimulationCircleHover,
  );
});

function spreadCircles() {
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      if((currentFrame % circleUpdatePeriod) === circles[columns*i+j]) {
        let coords = [];
        if (j !== columns-1 && circles[i*columns+j+1] === null) coords.push(i*columns+j+1);
        if (j !== 0 && circles[i*columns+j-1] === null) coords.push(i*columns+j-1);
        if (i !== rows-1 && circles[(i+1)*columns+j] === null) coords.push((i+1)*columns+j);
        if (i !== 0 && circles[(i-1)*columns+j] === null) coords.push((i-1)*columns+j);
        coords.forEach((coord) => {
          if(Math.random() < 0.2) {
            document.querySelector(`#simulation-circle-${coord}`).style.fill = "#EF9F89";
            circles[coord] = (currentFrame % circleUpdatePeriod);
          } else {
            document.querySelector(`#simulation-circle-${coord}`).style.fill = "#FCCEC0";
            circles[coord] = ((currentFrame-1) % circleUpdatePeriod);
          }
        });
      }
    }
  }
  currentFrame += 1;
  requestAnimationFrame(spreadCircles);
}

spreadCircles();

const amebaContainer = document.querySelector('.ameba-container');
const ameba = document.querySelector('.ameba');
const book = document.querySelector('.book');
const container = document.querySelector('.content-container:nth-child(3)');

function repositionAmeba(){
  book.style.filter = `opacity(${Math.min(Math.max(100 - (window.scrollY - window.innerHeight/2 - ameba.offsetHeight/2), 0), 100)}%)`
  if (window.innerWidth > 1024){
    if (window.scrollY >= 3*window.innerHeight - amebaContainer.offsetHeight - window.innerHeight/2+ameba.offsetHeight/2 + book.offsetHeight) {
      amebaContainer.style.position = 'absolute';
      amebaContainer.style.top = `${3*window.innerHeight - amebaContainer.offsetHeight + book.offsetHeight}px`;
    }
    else if(window.scrollY >= window.innerHeight/2 + ameba.offsetHeight/2){
      amebaContainer.style.position = 'fixed';
      amebaContainer.style.top = `${window.innerHeight/2-ameba.offsetHeight/2}px`;
    }
    else {
      amebaContainer.style.position = 'absolute';
      amebaContainer.style.top = '100vh';
    }
  } else {
    amebaContainer.style.position = null;
    amebaContainer.style.top = null;
  }
}

repositionAmeba();

window.addEventListener(
  'scroll',
  repositionAmeba
);

window.addEventListener(
  'resize',
  repositionAmeba
);