document.querySelector("#wet-lab-button").addEventListener(
  'click',
  () => {
    if (currentTab !== 'Wet lab') {
      currentTab = 'Wet lab';
      refreshHPpage();
    }
  }
);
document.querySelector("#wet-lab-button").addEventListener(
  'keypress',
  (e) => {
    if (e.key === "Enter" && currentTab !== 'Wet lab') {
      currentTab = 'Wet lab';
      refreshHPpage();
    }
  }
);
document.querySelector("#dry-lab-button").addEventListener(
  'click',
  () => {
    if (currentTab !== 'Dry lab') {
      currentTab = 'Dry lab';
      refreshHPpage();
    }
  }
);
document.querySelector("#dry-lab-button").addEventListener(
  'keypress',
  (e) => {
    if (e.key === "Enter" && currentTab !== 'Dry lab') {
      currentTab = 'Dry lab';
      refreshHPpage();
    }
  }
);
document.querySelector("#hp-button").addEventListener(
  'click',
  () => {
    if (currentTab !== 'Human practices') {
      currentTab = 'Human practices';
      refreshHPpage();
    }
  }
);
document.querySelector("#hp-button").addEventListener(
  'keypress',
  (e) => {
    if (e.key === "Enter" && currentTab !== 'Human practices') {
      currentTab = 'Human practices';
      refreshHPpage();
    }
  }
);


const months = [
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
]
let currentTab = 'Wet lab';

function toggleActiveTab(id) {
  const header = document.querySelector(`#month-entry-${id} > .month-entry-header`);
  const text = document.querySelector(`#month-entry-${id} > .month-entry-text`);

  if (header.classList.contains('active')) {
    header.classList.remove('active');
    text.classList.remove('active');
  } else {
    header.classList.add('active');
    text.classList.add('active');
  }
}

function refreshHPpage() {
  switch(currentTab) {
    case 'Wet lab':
      document.querySelector("#wet-lab-button").classList.add('active');
      document.querySelector("#dry-lab-button").classList.remove('active');
      document.querySelector("#hp-button").classList.remove('active');
      break;
    case 'Dry lab':
      document.querySelector("#wet-lab-button").classList.remove('active');
      document.querySelector("#dry-lab-button").classList.add('active');
      document.querySelector("#hp-button").classList.remove('active');
      break;
    case 'Human practices':
      document.querySelector("#wet-lab-button").classList.remove('active');
      document.querySelector("#dry-lab-button").classList.remove('active');
      document.querySelector("#hp-button").classList.add('active');
      break;
  }
  filteredTabs = hpTabs.filter((tab) => tab.squad === currentTab);
  const monthString = months.map((month) => `
    <div class="month">
      <h3>${month}</h3>
      <div class="month-content">
        ${
          filteredTabs.filter((tab) => tab.month === month).sort((a, b) => a.line_number - b.line_number).map((tab) => `
            <div
              class="month-entry"
              tabindex="0"
              id="month-entry-${tab.line_number}"
              onclick="toggleActiveTab(${tab.line_number})"
              onkeypress="toggleActiveTab(${tab.line_number})"
            >
              <div class="month-entry-header">
                <h4>${tab.label}</h4>
                <div class="box-${tab.stakeholder.toLowerCase()}"><span class="tooltip">${tab.stakeholder}</span></div>
              </div>
              <div class="month-entry-text">
                ${tab.description}
              </div>
            </div>
            ${
              tab.tooltip === null ? "" :
              `
                <div class="month-entry">
                  <div class="month-entry-header orange">
                    <h4>${tab.tooltip}</h4>
                    <div></div>
                  </div>
                </div>
              `
            }
          `).join('\n')
        }
        <div class="breaker"></div>
      </div>
    </div>
  `).join('\n');
  document.querySelector('.calendar').innerHTML = monthString;
}

refreshHPpage();

window.addEventListener(
  'scroll',
  () => {
    if(1*window.innerHeight < window.scrollY) {
      document.querySelector('.humanpractises-content > .back-to-top-btn').classList.add('active');
      [...document.querySelectorAll('.humanpractises-content > .list-container > div')].forEach((listItem) => {
        listItem.classList.add('active');
      });
    } else {
      document.querySelector('.humanpractises-content > .back-to-top-btn').classList.remove('active');
      [...document.querySelectorAll('.humanpractises-content > .list-container > div')].forEach((listItem) => {
        listItem.classList.remove('active');
      });
    }
  }
)

document.querySelector('.humanpractises-content > .back-to-top-btn').addEventListener(
  'click',
  () => {
    window.scrollTo(0, window.innerHeight - 25);
  }
)

document.querySelector('.humanpractises-content > .back-to-top-btn').addEventListener(
  'keypress',
  () => {
    window.scrollTo(0, window.innerHeight - 25);
  }
)
