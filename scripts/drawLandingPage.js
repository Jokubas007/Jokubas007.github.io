

const orangeCountries = [
  {
    name: "China",
    infections: "10 000",
    deaths: "10 000",
    selector: "#China-mainland",
    tooltipClass: "tooltip-china",
    tooltipSelector: ".tooltip-china",
    tooltipShift: -120
  },
  {
    name: "India",
    infections: "10 000",
    deaths: "10 000",
    selector: "#IN",
    tooltipClass: "tooltip-india",
    tooltipSelector: ".tooltip-india",
    tooltipShift: -35
  },
  {
    name: "Iran",
    infections: "10 000",
    deaths: "10 000",
    selector: "#IR",
    tooltipClass: "tooltip-iran",
    tooltipSelector: ".tooltip-iran",
    tooltipShift: 0
  },
  {
    name: "Saudi Arabia",
    infections: "10 000",
    deaths: "10 000",
    selector: "#SA",
    tooltipClass: "tooltip-saudi-arabia",
    tooltipSelector: ".tooltip-saudi-arabia",
    tooltipShift: 0
  },
  {
    name: "Egypt",
    infections: "10 000",
    deaths: "10 000",
    selector: "#EG",
    tooltipClass: "tooltip-egypt",
    tooltipSelector: ".tooltip-egypt",
    tooltipShift: 0
  },
  {
    name: "South Africa",
    infections: "10 000",
    deaths: "10 000",
    selector: "#ZA",
    tooltipClass: "tooltip-south-africa",
    tooltipSelector: ".tooltip-south-africa",
    tooltipShift: 0
  },
  {
    name: "Tanzania",
    infections: "10 000",
    deaths: "10 000",
    selector: "#TZ",
    tooltipClass: "tooltip-tanzania",
    tooltipSelector: ".tooltip-tanzania",
    tooltipShift: 0
  },
  {
    name: "Mexico",
    infections: "10 000",
    deaths: "10 000",
    selector: "#MX",
    tooltipClass: "tooltip-mexico",
    tooltipSelector: ".tooltip-mexico",
    tooltipShift: 0
  },
  {
    name: "Brazil",
    infections: "10 000",
    deaths: "10 000",
    selector: "#BR",
    tooltipClass: "tooltip-brazil",
    tooltipSelector: ".tooltip-brazil",
    tooltipShift: 0
  },
  {
    name: "Colombia",
    infections: "10 000",
    deaths: "10 000",
    selector: "#CO",
    tooltipClass: "tooltip-colombia",
    tooltipSelector: ".tooltip-colombia",
    tooltipShift: 0
  },
  {
    name: "Ecuador",
    infections: "10 000",
    deaths: "10 000",
    selector: "#EC",
    tooltipClass: "tooltip-ecuador",
    tooltipSelector: ".tooltip-ecuador",
    tooltipShift: 0
  }
]

const tooltipString = orangeCountries.map((country) => `
  <div class="map-tooltip ${country.tooltipClass}">
    <div>${country.name}</div>
    <table>
      <tr>
        <th>Avg. cases/year</th>
        <th>Avg. deaths/year</th>
      </tr>
      <tr>
        <td>${country.infections}</td>
        <td>${country.deaths}</td>
      </tr>
    </table>
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
const rows = 30;
const columns = 50;

let circlesString = "";
for(let i = 0; i < rows; i++){
  for(let j = 0; j < columns; j++){
    circlesString += `<circle class="simulation-circle" id="simulation-circle-${columns*i+j}" cx=${12+j*12} cy=${12+i*12} r="4" stroke="black" stroke-width="1" fill="white" />`
    circles.push(null)
  }
}

circlesString = `
  <svg viewBox="0 0 612 372" perserveAspectRatio="xMinYMid">
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
