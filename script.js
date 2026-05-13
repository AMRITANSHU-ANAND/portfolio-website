// Contact Button

document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Services Button

document.getElementById("servicesBtn").addEventListener("click", function () {
    alert("Services Section Coming Soon!");
});

// Project Buttons

const allProjectButtons = document.querySelectorAll(".project-btn, .live-btn");

allProjectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const projectLink = button.getAttribute("data-link");

        window.open(projectLink, "_blank");

    });

});