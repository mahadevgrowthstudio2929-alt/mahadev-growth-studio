// Mahadev Growth Studio
// Premium Landing Page Script

document.addEventListener("DOMContentLoaded", () => {

    // Card Animation
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "all .8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

    // Buttons Hover Animation
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-4px) scale(1.02)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0px) scale(1)";
        });

    });

    // Service Boxes Animation
    const services = document.querySelectorAll(".service");

    services.forEach((box, index) => {

        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";

        setTimeout(() => {

            box.style.transition = ".5s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";

        }, index * 120);

    });

});

// Smooth Scroll Support
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Console Branding 😎
console.log("%cMahadev Growth Studio",
"color:#FFD54F;font-size:20px;font-weight:bold;");

console.log("%cPremium Landing Page Loaded Successfully 🚀",
"color:#8A2BE2;font-size:14px;");