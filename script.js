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

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Project Link Coming Soon!");
    });
});