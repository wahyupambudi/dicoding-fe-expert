import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import App from "./views/app";
const showButton = document.querySelector(".navbar-toggler");
const sidebar = document.querySelector(".collapsible");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const content = document.querySelector("main");

const app = new App({ showButton, closeButton, sidebar, overlay, content });

window.addEventListener("hashchange", () => {
    app.renderPage();
});
window.addEventListener("load", function () {
    app.renderPage();
});

document.addEventListener("DOMContentLoaded", () => {
    const skipLinkElem = document.querySelector(".skip-to-content");
    skipLinkElem.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#main").focus();
        document.querySelector("#main").scrollIntoView();
    });
});
