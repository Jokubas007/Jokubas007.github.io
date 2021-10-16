function contentPage(whichIndexActive, isInitialLoad, indexWidth){
  const sectionsElements = document.querySelectorAll('.index-headline');
  const sections = Array.from(sectionsElements).map((section, idx) => ({
    name: section.innerHTML,
    id: `headline-${idx}`,
  }));
  sectionsElements.forEach((section, idx) => {
    section.id = `headline-${idx}`
  });

  const figuresElements = document.querySelectorAll('.figure-container');
  const figures = Array.from(figuresElements).map((figure, idx) => (  {
    title: figure.lastElementChild.firstElementChild.innerHTML,
    id: `figure-${idx}`,
    img: figure.firstElementChild.src,
  }));
  figuresElements.forEach((figure, idx) => {
    figure.id = `figure-${idx}`
  });

  let referencesElements = [];
  if (document.querySelector('.references-container') !== null) {
    referencesElements = Array.from(document.querySelector('.references-container').childNodes)
                                .filter((reference) => reference.nodeName !== "#text");
  }
  const references = [];
  for (let i = 0; i < referencesElements.length/2; i++) {
    references.push({
      number: referencesElements[2*i].innerHTML,
      text: referencesElements[2*i+1].innerHTML,
    });
  }

  const availableTabs = [
    sections.length ? {
      buttonName: 'sections-button',
      tabName: 'Sections'
     } : false,
    figures.length ? {
      buttonName: 'figures-button',
      tabName: 'Figures'
     } : false,
    references.length ? {
      buttonName: 'references-button',
      tabName: 'References'
     } : false
  ].filter((tab) => tab);
  
  const availableTabsButtonsStrings = availableTabs.map((tab, idx) => (
    (idx + 1) !== availableTabs.length ? `
      <div
        id=${tab.buttonName}
        role="button"
        tabIndex="0"
      >
        ${tab.tabName}
      </div>
      <div class="vertical-breaker"></div>
    ` : `
      <div
        id=${tab.buttonName}
        role="button"
        tabIndex="0"
      >
        ${tab.tabName}
      </div>
    `
  ));

  document.querySelector('.index-header').innerHTML = availableTabsButtonsStrings.join('\n');

  if (sections.length !== 0) {
    sectionsButton = document.querySelector('#sections-button');
    sectionsButton.onclick = function() {
      if (window.innerWidth >= 1025){
        contentPage("Sections", sections, references, figures, false)
      }
    }
    sectionsButton.onkeypress = function() {
      contentPage("Sections", sections, references, figures, false)
    }
  }
  
  if (references.length !== 0){
    referencesButton = document.querySelector('#references-button');
    referencesButton.onclick = function() {
      contentPage("References", sections, references, figures, false)
    }
    referencesButton.onkeypress = function() {
      contentPage("References", sections, references, figures, false)
    }
  }
  
  if (figures.length !== 0) {
    figuresButton = document.querySelector('#figures-button');
    figuresButton.onclick = function() {
      contentPage("Figures", sections, references, figures, false)
    }
    figuresButton.onkeypress = function() {
      contentPage("Figures", sections, references, figures, false)
    }
  }

  switch(whichIndexActive){
    case "Sections":
      if (sections.length !== 0){
        sectionsButton.classList.add("underline");
      }
      if (references.length !== 0){
        referencesButton.classList.remove("underline");
      }
      if (figures.length !== 0){
        figuresButton.classList.remove("underline");
      }
      const sectionsStrings = sections.map((section) => `
        <div
          role="button"
          id="${section.id}_index"
          onclick="
            document.getElementById('${section.id}').scrollIntoView();
            window.scrollBy(0, -(document.querySelector('.navbar').offsetHeight + 48));
          "
          onkeypress="
            document.getElementById('${section.id}').scrollIntoView();
            window.scrollBy(0, -(document.querySelector('.navbar').offsetHeight + 48));
          "
          tabIndex="0"
        >
          ${section.name}
        </div>
      `);
      document.querySelector(".index-content").innerHTML = sectionsStrings.join('');
      break;
    case "References":
      if (sections.length !== 0){
        sectionsButton.classList.remove("underline");
      }
      if (references.length !== 0){
        referencesButton.classList.add("underline");
      }
      if (figures.length !== 0){
        figuresButton.classList.remove("underline");
      }
      const referencesStrings = references.map((reference) => `
        <div>${reference.number}</div>
        <div>${reference.text}</div>
      `)
      document.querySelector(".index-content").innerHTML = `
        <div class="references">
          ${referencesStrings.join('')}
        </div>
      `;
      break;
    case "Figures":
      if (sections.length !== 0){
        sectionsButton.classList.remove("underline");
      }
      if (references.length !== 0){
        referencesButton.classList.remove("underline");
      }
      if (figures.length !== 0){
        figuresButton.classList.add("underline");
      }
      const figuresStrings = figures.map((figure, idx) => `
        <div class="figures">
          <h3>
            ${figure.title}
          </h3>
          <img src=${figure.img} alt=${figure.title} />
          <div
            class="figures-button"
            role="button"
            onclick="
              document.getElementById('${figure.id}').scrollIntoView();
              window.scrollBy(0, -(document.querySelector('.navbar').offsetHeight + 48));
            "
            onKeyPress="
              document.getElementById('${figure.id}').scrollIntoView();
              window.scrollBy(0, -(document.querySelector('.navbar').offsetHeight + 48));
            "
            tabIndex="0"
          >
            View on page
          </div>
          ${figures.length - 1 !== idx ? '<div class="breaker"></div>' : '<div></div>'}
        </div>
      `)
      document.querySelector(".index-content").innerHTML = figuresStrings.join('');
      break;
  }

  if (isInitialLoad) {
    requestAnimationFrame(function (){draw(sections, indexWidth)});
  }
}

function draw(sections, indexWidth){
  const index = document.querySelector('.index-container');
  const content = document.querySelector('.app-content');
  const navbar = document.querySelector('.navbar');
  if (window.innerWidth >= 1025) {
    if (
      window.scrollY + navbar.offsetHeight + navbar.offsetTop + 16 + index.offsetHeight > content.offsetHeight + content.offsetTop - 96
    ) {
      index.style.position = 'absolute';
      index.style.top = null;
      index.style.bottom = '96px';
      index.style.right = '10vw';
      index.style.width = `${indexWidth}px`;
    } else if (window.scrollY - content.offsetTop >= 0) {
      index.style.position = 'fixed';
      index.style.bottom = null;
      index.style.top = `${navbar.offsetHeight + navbar.offsetTop + 16}px`;
      index.style.right = '10vw';
      index.style.width = `${indexWidth}px`;
    } else {
      index.style.position = 'relative';
      index.style.bottom = null;
      index.style.top = null;
      index.style.right = null;
      index.style.width = `${indexWidth}px`;
    }
  } else {
    index.style = null;
  }

  if (document.querySelector('#sections-button').classList.contains("underline")) {
    let activeSection = 0;

    for (let idx = 0; idx < sections.length; idx++) {
      if (idx !== (sections.length - 1)) {
        const nextSectionOffset = document.querySelector(`#${sections[idx + 1].id}`).offsetTop + content.offsetTop;
        if (nextSectionOffset > navbar.offsetHeight + window.scrollY + 48) {
          activeSection = idx;
          break;
        }
      } else {
        activeSection = idx;
      }
    }

    sections.forEach((section, idx) => {
      const sectionElement = document.querySelector(`#${section.id}_index`);
      if (idx !== activeSection) {
        sectionElement.classList.remove('active');
      } else {
        sectionElement.classList.add('active');
      }
    });
  }

  requestAnimationFrame(function (){draw(sections, indexWidth)});
}

