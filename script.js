// ================= Smooth Scroll for anchor links =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // prevent default jump

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================= Optional: Active Section Highlight (for future navbar) =================
// Get all sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('a[href^="#"]'); // if you have nav links

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${section.id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});





// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });
