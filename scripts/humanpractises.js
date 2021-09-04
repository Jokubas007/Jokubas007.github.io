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
              onclick="refreshPageText(${tab.line_number})"
              onkeypress="refreshPageText(${tab.line_number})"
            >
              ${tab.label}
              <div class="box-${tab.stakeholder.toLowerCase()}"><span class="tooltip">${tab.stakeholder}</span></div>
            </div>
            ${
              tab.tooltip === null ? "" :
              `
                <div class="month-entry orange">
                  ${tab.tooltip}
                  <div></div>
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
  const activeTabId = Math.min(...filteredTabs.map((tab) => tab.line_number));
  refreshPageText(activeTabId);
}

function refreshPageText(newId) {
  if (document.querySelector('.month-entry.active') !== null) {
    document.querySelector('.month-entry.active').classList.remove('active');
  }
  document.querySelector(`#month-entry-${newId}`).classList.add('active');
  const activeTab = hpTabs.filter((tab) => tab.line_number === newId)[0];
  document.querySelector('.humanpractises-content > .text > h2').innerHTML = activeTab.heading;
  document.querySelector('.humanpractises-content > .text > div').innerHTML = activeTab.description;
}

refreshHPpage();


function draw(){
  const index = document.querySelector('.humanpractises-content .text');
  const content = document.querySelector('.humanpractises-content');
  const navbar = document.querySelector('.navbar');
  if (
    window.scrollY + navbar.offsetHeight + 32 + index.offsetHeight > content.offsetHeight + content.offsetTop - 96
  ) {
    index.style.position = 'absolute';
    index.style.top = null;
    index.style.bottom = '96px';
    index.style.right = '96px';
    index.style.width = `65vw`;
  } else if (window.scrollY - content.offsetTop >= -16) {
    index.style.position = 'fixed';
    index.style.bottom = null;
    index.style.top = `${navbar.offsetHeight + 32}px`;
    index.style.right = '96px';
    index.style.width = `65vw`;
  } else {
    index.style.position = 'relative';
    index.style.bottom = null;
    index.style.top = null;
    index.style.right = null;
    index.style.width = `65vw`;
  }

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

