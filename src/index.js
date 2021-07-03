import pageLoad from "./page-load.js";
import menuLoad from "./menu-load.js";
import contactLoad from "./contact-load";

const container = document.querySelector("#content");
const body = document.querySelector("body");

let navbar = document.createElement("div");
let homeLink = document.createElement("button");
let menuLink = document.createElement("button");
let contactLink = document.createElement("button");

homeLink.textContent = "HOME";
menuLink.textContent = "MENU";
contactLink.textContent = "CONTACT";

navbar.style.width = "max-content";
navbar.style.margin = "auto";
navbar.style.display = "flex";
navbar.style.alignItems = "center";
navbar.style.height = "6vh";

container.style.height = "90vh";
body.style.margin = "0";
body.style.padding = "0";

homeLink.style = "background: none; border: transparent; margin: 0 0.5rem; font-weight: bold;";
menuLink.style = "background: none; border: transparent; margin: 0 0.5rem; font-weight: bold;";
contactLink.style = "background: none; border: transparent; margin: 0 0.5rem; font-weight: bold;";

homeLink.addEventListener("click", () => {
    container.removeChild(container.childNodes[2]);
    pageLoad();
});

menuLink.addEventListener("click", () => {
    container.removeChild(container.childNodes[2]);
    menuLoad();
});

contactLink.addEventListener("click", () => {
    container.removeChild(container.childNodes[2]);
    contactLoad();
});

let hoverFunc = (event, text) => event.target.style.textDecoration = "underline";
let leaveFunc = (event, text) => event.target.style.textDecoration = "none";

homeLink.addEventListener("mouseenter", hoverFunc);
homeLink.addEventListener("mouseleave", leaveFunc);

menuLink.addEventListener("mouseenter", hoverFunc);
menuLink.addEventListener("mouseleave", leaveFunc);

contactLink.addEventListener("mouseenter", hoverFunc);
contactLink.addEventListener("mouseleave", leaveFunc);


navbar.appendChild(homeLink);
navbar.appendChild(menuLink);
navbar.appendChild(contactLink);
container.appendChild(navbar);

pageLoad();