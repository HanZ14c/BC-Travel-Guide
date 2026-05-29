"use strict";

function signUpButton() {
    document.getElementById("exploreMore").scrollIntoView({ behavior: "smooth" });
}

function ensurePhpServer(event) {
    const isXamppUrl = window.location.protocol === "http:" &&
        (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") &&
        (window.location.port === "" || window.location.port === "80") &&
        window.location.pathname.includes("/BC-Travel-Guide/");

    if (!isXamppUrl) {
        event.preventDefault();
        alert("Please open this project through XAMPP first: http://localhost/BC-Travel-Guide/");
    }
}
