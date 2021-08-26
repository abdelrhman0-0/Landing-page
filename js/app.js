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
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const sectionsArr = Array.from(sections);
const myUl = document.getElementById("navbar__list");
const fragment = new DocumentFragment();
let linksArr = [];

/**
 * End Global Variables

 */



// build the nav
// Creating lists and links of navbar.
sectionsArr.forEach(function createNav(section) {
    let lists = document.createElement("li");
    let links = document.createElement("a");
    let linkDataNav = section.getAttribute("data-nav");
    links.setAttribute("data-nav", linkDataNav);
    links.setAttribute("class", "menu__link");
    links.innerHTML = linkDataNav;
    linksArr.push(links);
    lists.appendChild(links);
  
    fragment.appendChild(lists);
    lists.addEventListener("click", function () {
      section.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  });
  
  // Ul is appending the fragment.
  myUl.appendChild(fragment);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// Adding active class to active section and active link while scrolling.
function addActive() {
    sectionsArr.forEach((section) => {
      let top = section.getBoundingClientRect().top;
      if (section.classList.contains("your-active-class")) {
        section.classList.remove("your-active-class");
      }
  
      if (top >= 0 && top <= 250) {
        section.classList.add("your-active-class");
        let sectionDataNav = section.getAttribute("data-nav");
        for (let i = 0; i < linksArr.length; i++) {
          linksArr[i].classList.remove("your-active-class");
          if (linksArr[i].getAttribute("data-nav") == sectionDataNav) {
            linksArr[i].classList.add("your-active-class");
          }
        }
      }
    });
  }

window.addEventListener("scroll", addActive);
