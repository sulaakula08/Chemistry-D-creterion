const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
    updateIcon(savedTheme === "dark-theme");
}

themeToggleBtn.addEventListener("click", () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");

    updateIcon(isDarkTheme);

    if (isDarkTheme) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.removeItem("theme");
    }
});

function updateIcon(isDarkTheme) {
    if (isDarkTheme) {
        themeIcon.src = "../assets/sun-svgrepo-com (4).svg";
    } else {
        themeIcon.src = "../assets/moon-svgrepo-com (1).svg";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Main content fade-in animation
    gsap.from("main", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
    });
});
