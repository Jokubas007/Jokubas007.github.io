teamMembersString = teamMembers.map((member) => `
  <div class="card">
    <div class="hover-effector" tabindex="0">
      <div class="img-description">
        ${
          member.link === "" ? "<div></div>" : `
            <a href="${member.link}" class="linkedin-ref" tabindex="0">
              <img alt="LinkedIn" src="../assets/logos/T--Vilnius-Lithuania--linkedin_logo.svg" />
            </a>
          `
        }
        <div class="member-description">
          <div class="line"></div>
          <div>${member.squad}</div>
          <div>${member.description}</div>
        </div>
      </div>
    </div>
    <img alt="${member.name}" src="${member.image}" class="member-photo" />
    <div class="name">${member.name}</div>
  </div>
`).join('\n');

document.querySelector('.grid-team').innerHTML = teamMembersString;

instructorsString = instructors.map((member) => `
  <div class="card">
    <div class="hover-effector" tabindex="0">
      <div class="img-description">
        ${
          member.link === "" ? "<div></div>" : `
            <a href="${member.link}" class="linkedin-ref" tabindex="0">
              <img alt="LinkedIn" src="../assets/logos/T--Vilnius-Lithuania--linkedin_logo.svg" />
            </a>
          `
        }
        <div class="member-description">
          <div class="line"></div>
          <div>${member.squad}</div>
          <div>${member.description}</div>
        </div>
      </div>
    </div>
    <img alt="${member.name}" src="${member.image}" class="member-photo" />
    <div class="name">${member.name}</div>
  </div>
`).join('\n');

document.querySelector('.grid-instructors').innerHTML = instructorsString;

pisString = pis.map((member) => `
  <div class="card">
    <div class="hover-effector" tabindex="0">
      <div class="img-description">
        ${
          member.link === "" ? "<div></div>" : `
            <a href="${member.link}" class="linkedin-ref" tabindex="0">
              <img alt="LinkedIn" src="../assets/logos/T--Vilnius-Lithuania--linkedin_logo.svg" />
            </a>
          `
        }
        <div class="member-description">
          <div class="line"></div>
          <div>${member.squad}</div>
          <div>${member.description}</div>
        </div>
      </div>
    </div>
    <img alt="${member.name}" src="${member.image}" class="member-photo" />
    <div class="name">${member.name}</div>
  </div>
`).join('\n');

document.querySelector('.grid-PI').innerHTML = pisString;