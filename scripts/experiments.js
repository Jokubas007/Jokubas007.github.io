const experimentsWeeks = [
  "JUNE 14 - 20",
  "JUNE 21 - 27",
  "JUNE 28 - JULY 4",
  "JULY 5 - 11",
  "JULY 12 - 18",
  "JULY 19 - 25",
  "JULY 26 - AUGUST 1",
  "AUGUST 2 - 8",
  "AUGUST 9 - 15",
  "AUGUST 16 - 22",
  "AUGUST 23 - 29",
  "AUGUST 30 - SEPTEMBER 5",
  "SEPTEMBER 6 - 12",
  "SEPTEMBER 13 - 19",
  "SEPTEMBER 20 - 26",
  "SEPTEMBER 27 - OCTOBER 3",
  "OCTOBER 4 - 10",
  "OCTOBER 11 - 17",
  "OCTOBER 18 - 24",
];

const experimentsTabCount = [
  {
    id: "calendar-june",
    count: 3,
    sumCount: 0,
  },
  {
    id: "calendar-july",
    count: 4,
    sumCount: 3,
  },
  {
    id: "calendar-august",
    count: 5,
    sumCount: 7,
  },
  {
    id: "calendar-september",
    count: 4,
    sumCount: 12,
  },
  {
    id: "calendar-october",
    count: 3,
    sumCount: 16,
  },
]

let currentWeek = 0;


function refreshExperimentsPage() {
  document.querySelector('.week-selector > .button-previous').classList.remove('hidden');
  document.querySelector('.week-selector > .button-next').classList.remove('hidden');
  if (currentWeek === 0){
    document.querySelector('.week-selector > .button-previous').classList.add('hidden');
  }
  if (currentWeek === experimentsWeeks.length) {
    document.querySelector('.week-selector > .button-next').classList.add('hidden');
  }
  document.querySelector('.week-selector > div').innerHTML = experimentsWeeks[currentWeek];
  experimentsTabCount.forEach((tab) => {
    tabStrings = [];
    for (let i = 0; i < tab.count; i++) {
      if (i + tab.sumCount < currentWeek) {
        tabStrings = [
          ...tabStrings,
          `
            <svg 
              tabindex="0"
              onclick="setCurrentWeek(${i+tab.sumCount})"
              onkeypress="setCurrentWeek(${i+tab.sumCount})"
              width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#FCCEC0"/>
            </svg>          
          `
        ]
      } else if (i + tab.sumCount > currentWeek) {
        tabStrings = [
          ...tabStrings,
          `
            <svg 
              tabindex="0"
              onclick="setCurrentWeek(${i+tab.sumCount})"
              onkeypress="setCurrentWeek(${i+tab.sumCount})"
              width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="8" stroke="#EF9F89" stroke-width="2"/>
            </svg>                  
          `
        ]
      } else {
        tabStrings = [
          ...tabStrings,
          `
            <svg
              tabindex="0"
              onclick="setCurrentWeek(${i+tab.sumCount})"
              onkeypress="setCurrentWeek(${i+tab.sumCount})"
              width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#EF9F89"/>
            </svg>                 
          `
        ]
      }
    }
    document.querySelector(`#${tab.id}`).innerHTML = tabStrings.join('\n');
  })

  for (let i = 0; i < experimentsWeeks.length; i++) {
    if (i === currentWeek) {
      document.querySelector(`#week-${i}`).classList.remove('hidden');
    } else {
      document.querySelector(`#week-${i}`).classList.add('hidden');
    }
  }
}

refreshExperimentsPage();

document.querySelector('.week-selector > .button-previous').addEventListener(
  'click',
  () => {
    currentWeek = currentWeek - 1;
    refreshExperimentsPage();
  }
)

document.querySelector('.week-selector > .button-previous').addEventListener(
  'keypress',
  (e) => {
    if (e.key === 'Enter') {
      currentWeek = currentWeek - 1;
      refreshExperimentsPage();
    }
  }
)

document.querySelector('.week-selector > .button-next').addEventListener(
  'click',
  () => {
    currentWeek = currentWeek + 1;
    refreshExperimentsPage();
  }
)

document.querySelector('.week-selector > .button-next').addEventListener(
  'keypress',
  (e) => {
    if (e.key === 'Enter') {
      currentWeek = currentWeek + 1;
      refreshExperimentsPage();
    }
  }
)

function setCurrentWeek(week) {
  currentWeek = week;
  refreshExperimentsPage();
}