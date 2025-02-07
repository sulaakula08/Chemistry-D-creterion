document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Theme Toggle Logic
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
        localStorage.setItem("theme", isDarkTheme ? "dark-theme" : "");
    });

    function updateIcon(isDarkTheme) {
        themeIcon.src = isDarkTheme
            ? "../assets/sun-svgrepo-com (4).svg"
            : "../assets/moon-svgrepo-com (1).svg";
    }

    gsap.registerPlugin(ScrollTrigger);

    // 🚀 Keep original animations for the intro section
    gsap.from(".intro-text h1", {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
    });

    gsap.from(".intro-text p", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
    });

    gsap.from(".intro-logo img", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        delay: 1,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
    });

    // 🌟 Fade-in animation for all paragraphs on scroll
    gsap.utils.toArray("p").forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    });

    // 🔥 Cool animation for images (fade-in + zoom effect)
    gsap.utils.toArray("img").forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });
    });

    // 🛠 Fix GSAP ScrollTrigger issues
    ScrollTrigger.refresh(); // Ensures animations run correctly after page load
});
