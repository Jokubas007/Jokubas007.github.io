// Add event for scrollbar
window.addEventListener(
  'scroll',
  function onScroll(){ 
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.documentElement.style.setProperty('--scroll', winScroll / height)
  },
  false
);


// Construct navbar
function initializeNavbar() {
  if (window.innerWidth <= 1024) {
    const navbarHTMLStrings = navigationTabs.map((tab) => {
      const tabStrings = tab.menuItems.map((item) => `
        <li><div class="breaker"></div><a class="dropdown-link" href="${item.path}">${item.title}</a></li>
      `);
      return `
        <li
          role="tab"
          class="nav-item"
          tabIndex="0"
          onclick="navbarHandleClickMobile()"
          onkeydown="navbarHandleClickMobile()"
          onblur="navbarFocusedElement = undefined"
        >
          <div class="nav-dropdown-title">
            ${tab.title} <img alt="" src="https://2021.igem.org/wiki/images/c/c8/T--Vilnius-Lithuania--iconDropdown.svg" />
          </div>
          <ul class="dropdown-menu">
            ${tabStrings.join('\n')}
          </ul>
        </li>
      `
    });
    document.querySelector('.nav-menu').innerHTML = `
      <li class="nav-item-accessibility">
        <div
          class="nav-icon"
          role="tab"
          tabindex="0"
          onclick="navbarHandleClickDesktop()"
          onkeydown="navbarHandleClickDesktop()"
          onblur="navbarFocusedElement = undefined"
        >
          <img class="nav-icon-img" alt="Accessibility" src="https://2021.igem.org/wiki/images/e/ef/T--Vilnius-Lithuania--iconAccessibility.svg" />
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-menu-content">
          <div class="item">
            <div >
            <div 
              role="button" 
              tabindex="0"
              id="disability-button"
            >
              <div class="pillButton">
              <img alt="" src="https://2021.igem.org/wiki/images/2/21/T--Vilnius-Lithuania--iconPillBackground.svg" />
              <div id="disability-button-pill">
                <svg width="56" height="43" viewBox="0 0 56 43" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="6" y="6" width="44" height="31" rx="15.5" />
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="56" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                </svg>
              </div>
              </div>
            </div>
            </div>
            <div class="text">
            <div class="title">
              Cognitive disability profile
            </div>
            <div class="subtitle">
              Assists with focusing
            </div>
            </div>
            <div class="icon">
            <img alt="" src="https://2021.igem.org/wiki/images/7/7c/T--Vilnius-Lithuania--iconDisability.svg" />
            </div>
          </div>
          <div class="item">
            <div >
            <div 
              role="button" 
              tabindex="0"
              id="dyslexia-button"
            >
              <div class="pillButton">
              <img alt="" src="https://2021.igem.org/wiki/images/2/21/T--Vilnius-Lithuania--iconPillBackground.svg" />
              <div id="dyslexia-button-pill">
                <svg width="56" height="43" viewBox="0 0 56 43" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="6" y="6" width="44" height="31" rx="15.5" />
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="56" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                </svg>
              </div>
              </div>
            </div>
            </div>
            <div class="text">
            <div class="title">
              Dyslexia friendly profile
            </div>
            </div>
            <div class="icon">
            <img alt="" src="https://2021.igem.org/wiki/images/a/ab/T--Vilnius-Lithuania--iconDyslexia.svg" />
            </div>
          </div>
          </div>
        </div>
      </li>
      <li
        role="tab"
        tabIndex="0"
        class="nav-item-menu"
      >
        <div
          class="nav-icon"
          role="tab"
          tabIndex="0"
          onclick="navbarHandleClickDesktop()"
          onkeydown="navbarHandleClickDesktop()"
          onblur="navbarFocusedElement = undefined"
        >
          <img
            class="nav-icon-img"
            alt="Menu"
            src="https://2021.igem.org/wiki/images/7/79/T--Vilnius-Lithuania--iconMenu.svg"
          /> 
          <img class="nav-icon-dropdown" alt="" src="https://2021.igem.org/wiki/images/c/c8/T--Vilnius-Lithuania--iconDropdown.svg" />
        </div>
        <div class="side-menu">
          <ul class="side-menu-content">
            ${navbarHTMLStrings.join('\n')}
          </ul>
        </div>
      </li>
    `;
  } else {
    const navbarHTMLStrings = navigationTabs.map((tab) => {
      const tabStrings = tab.menuItems.map((item) => `
        <li><a class="dropdown-link" href="${item.path}">${item.title}</a></li>
      `);
      return `
        <li
          role="tab"
          class="nav-item"
          tabIndex="0"
          onclick="navbarHandleClickDesktop()"
          onkeydown="navbarHandleClickDesktop()"
          onblur="navbarFocusedElement = undefined"
        >
          <div class="nav-dropdown-title">
            ${tab.title} <img alt="" src="https://2021.igem.org/wiki/images/c/c8/T--Vilnius-Lithuania--iconDropdown.svg" />
          </div>
          <ul class="dropdown-menu">
            ${tabStrings.join('\n')}
          </ul>
        </li>
      `
    });
    document.querySelector('.nav-menu').innerHTML = `
      ${navbarHTMLStrings.join('\n')}
      <li class="nav-item-accessibility">
        <div
          class="nav-icon"
          role="tab"
          tabindex="0"
          onclick="navbarHandleClickDesktop()"
          onkeydown="navbarHandleClickDesktop()"
          onblur="navbarFocusedElement = undefined"
        >
          <img class="nav-icon-img" alt="Accessibility" src="https://2021.igem.org/wiki/images/e/ef/T--Vilnius-Lithuania--iconAccessibility.svg" />
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-menu-content">
          <div class="item">
            <div >
            <div 
              role="button" 
              tabindex="0"
              id="disability-button"
            >
              <div class="pillButton">
              <img alt="" src="https://2021.igem.org/wiki/images/2/21/T--Vilnius-Lithuania--iconPillBackground.svg" />
              <div id="disability-button-pill">
                <svg width="56" height="43" viewBox="0 0 56 43" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="6" y="6" width="44" height="31" rx="15.5" />
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="56" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                </svg>
              </div>
              </div>
            </div>
            </div>
            <div class="text">
            <div class="title">
              Cognitive disability profile
            </div>
            <div class="subtitle">
              Assists with focusing
            </div>
            </div>
            <div class="icon">
            <img alt="" src="https://2021.igem.org/wiki/images/7/7c/T--Vilnius-Lithuania--iconDisability.svg" />
            </div>
          </div>
          <div class="breaker"></div>
          <div class="item">
            <div >
            <div 
              role="button" 
              tabindex="0"
              id="dyslexia-button"
            >
              <div class="pillButton">
              <img alt="" src="https://2021.igem.org/wiki/images/2/21/T--Vilnius-Lithuania--iconPillBackground.svg" />
              <div id="dyslexia-button-pill">
                <svg width="56" height="43" viewBox="0 0 56 43" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <rect x="6" y="6" width="44" height="31" rx="15.5" />
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="56" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                </svg>
              </div>
              </div>
            </div>
            </div>
            <div class="text">
            <div class="title">
              Dyslexia friendly profile
            </div>
            </div>
            <div class="icon">
            <img alt="" src="https://2021.igem.org/wiki/images/a/ab/T--Vilnius-Lithuania--iconDyslexia.svg" />
            </div>
          </div>
          </div>
        </div>
      </li>
    `;
  }

  // Add event listeners for accessibility menu
  document.querySelector('#dyslexia-button').addEventListener(
    'mousedown',
    function (e){
      e.preventDefault()
    }
  );
  document.querySelector('#dyslexia-button').addEventListener(
    'click',
    toggleDyslexiaProfile
  );
  document.querySelector('#dyslexia-button').addEventListener(
    'keydown',
    function (e){
      if(e.key === 'Enter'){
        e.preventDefault()
      }
    }
  );
  document.querySelector('#dyslexia-button').addEventListener(
    'keyup',
    function (e){
      if(e.key === 'Enter'){
        toggleDyslexiaProfile();
      }
    }
  );
  document.querySelector('#disability-button').addEventListener(
    'mousedown',
    function (e){
      e.preventDefault()
    }
  );
  document.querySelector('#disability-button').addEventListener(
    'click',
    toggleDisabilityProfile
  );
  document.querySelector('#disability-button').addEventListener(
    'keydown',
    function (e){
      if(e.key === 'Enter'){
        e.preventDefault()
      }
    }
  );
  document.querySelector('#disability-button').addEventListener(
    'keyup',
    function (e){
      if(e.key === 'Enter'){
        toggleDyslexiaProfile();
      }
    }
  );
  updateNavbar();
}

initializeNavbar();
window.addEventListener(
  'resize',
  initializeNavbar,
);

function updateNavbar() {
  if (localStorage.getItem('vilnius-lithuania-disability-profile') === null) {
    localStorage.setItem('vilnius-lithuania-disability-profile', false);
  }

  if (localStorage.getItem('vilnius-lithuania-dyslexia-profile') === null) {
    localStorage.setItem('vilnius-lithuania-dyslexia-profile', false);
  }

  if (localStorage.getItem('vilnius-lithuania-dyslexia-profile') === 'true') {
    document.documentElement.style.setProperty('--main-font', 'OpenDyslexic');
    document.documentElement.style.setProperty('--secondary-font', 'OpenDyslexic');
    document.querySelector('#dyslexia-button-pill').classList.add('pill-enabled');
    document.querySelector('#dyslexia-button-pill').classList.remove('pill-disabled');
  } else {
    document.documentElement.style.setProperty('--main-font', 'Quicksand');
    document.documentElement.style.setProperty('--secondary-font', 'Spartan');
    document.querySelector('#dyslexia-button-pill').classList.remove('pill-enabled');
    document.querySelector('#dyslexia-button-pill').classList.add('pill-disabled');
  }

  if (localStorage.getItem('vilnius-lithuania-disability-profile') === 'true') {
    document.documentElement.style.setProperty('--disability-profile', '');
    document.querySelector('#disability-button-pill').classList.add('pill-enabled');
    document.querySelector('#disability-button-pill').classList.remove('pill-disabled');
  } else {
    document.documentElement.style.setProperty('--disability-profile', 'true');
    document.querySelector('#disability-button-pill').classList.remove('pill-enabled');
    document.querySelector('#disability-button-pill').classList.add('pill-disabled');
  }
}

function toggleDyslexiaProfile() {
  const state = (localStorage.getItem('vilnius-lithuania-dyslexia-profile') === "true");
  localStorage.setItem('vilnius-lithuania-dyslexia-profile', !state);
  updateNavbar();
}

function toggleDisabilityProfile() {
  const state = (localStorage.getItem('vilnius-lithuania-disability-profile') === "true");
  localStorage.setItem('vilnius-lithuania-disability-profile', !state);
  updateNavbar();
}

var navbarFocusedElement = undefined;

function navbarHandleClickDesktop() {
  if (document.activeElement === navbarFocusedElement) {
    document.activeElement.blur();
    navbarFocusedElement = undefined;
  } else {
    navbarFocusedElement = document.activeElement;
  }
};

function navbarHandleClickMobile() {
  if (document.activeElement === navbarFocusedElement) {
    document.activeElement.blur();
    document.querySelector('.nav-item-menu').focus();
    navbarFocusedElement = undefined;
  } else {
    navbarFocusedElement = document.activeElement;
  }
}
