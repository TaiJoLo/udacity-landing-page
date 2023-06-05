/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const NavList = document.getElementById("navbar__list");
const sections = document.getElementsByClassName("sections");
const menuNavMobile = document.getElementById("navbar__menu__mobile");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build Nav Menu

window.onload = () => {
  for (const section of sections) {
    const list = document.createElement("li");
    const link = document.createElement("a");
    let hrefLink = "#" + section.id;

    if (section.id === "hero") {
      list.classList.add("active");
    }

    link.setAttribute("href", hrefLink);
    link.classList.add("menu__link");
    list.classList.add(section.id);
    link.innerText = section.dataset.nav;
    list.appendChild(link);
    NavList.appendChild(list);
  }
  //  Menu Mobile
  const NavListClone = NavList.cloneNode(true);
  NavListClone.setAttribute("id", "navbar__list__mobile");
  menuNavMobile.appendChild(NavListClone);
};

// Set sections as active

window.addEventListener("scroll", () => {
  for (const section of sections) {
    if (section.getBoundingClientRect().top < 100) {
      activeClass(section.attributes.id.value);
    }
  }
});

const activeClass = (id) => {
  const navbarList = document.querySelectorAll("#navbar__list li");
  const navbarListMobile = document.querySelectorAll(
    "#navbar__list__mobile li"
  );
  navbarList.forEach((link) => {
    link.classList.remove("active-section");
    if (link.classList.contains(id)) {
      link.classList.add("active-section");
    }
  });
  navbarListMobile.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(id)) {
      link.classList.add("active");
    }
  });
};
