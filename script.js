
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    });
});

// WELCOME POPUP

const helloPopup = document.getElementById("helloPopup");
const closePopupButton = document.getElementById("closePopup");

function sayHello() {
    helloPopup.classList.add("active");
}

function closePopup() {
    helloPopup.classList.remove("active");
}

closePopupButton.addEventListener("click", closePopup);

// CLOSE POPUP BY CLICKING OUTSIDE

helloPopup.addEventListener("click", event => {
    if (event.target === helloPopup) {
        closePopup();
    }
});

// CLOSE POPUP USING ESCAPE KEY

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closePopup();
    }
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});
