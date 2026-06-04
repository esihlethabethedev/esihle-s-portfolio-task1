
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    alert("Welcome to Esihle's Portfolio!");
    console.log("welcome!!")
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const profileImage = document.querySelector(".profile-image");

if (profileImage) {
    profileImage.addEventListener("click", () => {
        alert("Hi, I'm Esihle Thabethe. Future Developer!");
    });
}

const navbar = document.getElementById("site-nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = "#1e293b";
    } else {
        navbar.style.backgroundColor = "#4d7fcf";
    }
});


profileImage.addEventListener("click", () => {
    profileImage.style.transform = "scale(1.2)";
    profileImage.style.transition = "0.5s";

    setTimeout(() => {
        profileImage.style.transform = "scale(1)";
    }, 1000);
});

const homeSection = document.getElementById("home");

homeSection.addEventListener("mouseenter", () => {
    homeSection.style.backgroundColor = "#2563eb";
});

homeSection.addEventListener("mouseleave", () => {
    homeSection.style.backgroundColor = "rgb(51, 51, 83)";
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.style.color = "white";
        });

        link.style.color = "yellow";
    });
});

window.addEventListener("load", () => {
    console.log("Welcome to Esihle's Portfolio!");
});