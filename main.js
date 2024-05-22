
let changeTheme = document.querySelector(".theme-toggle");
let modeMoon = document.querySelector("#moonMode");
let modeSun = document.querySelector("#sunMode");
let rocket = document.querySelector("#rocket");

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a")

let mountainbg = document.querySelector("#mountainbg");
let forestbg = document.querySelector("#forestbg");
let seabg = document.querySelector("#seabg");

// handling the rocket
changeTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme")
    if (modeMoon.style.display !== "none") {
        modeMoon.style.display = "none";
        modeSun.style.display = "inline";
        rocket.style.opacity = '1';
    } else {
        modeMoon.style.display = "inline";
        modeSun.style.display = "none";
        rocket.style.opacity = '0';
    }

    setTimeout(() => {
        rocket.style.transform = 'translateX(600px) rotate(-45deg) ';
    })
})

// Page scrolling

ScrollReveal({ 
    reset: true,
    distance: "20px",
    duration: 1500,
    delay: 300,
})

ScrollReveal().reveal(".social-icons a", { interval: 400});

ScrollReveal().reveal(".heading", {origin: "left"});

ScrollReveal().reveal(".service-box:nth-child(1)", {origin: "left"});
ScrollReveal().reveal(".service-box:nth-child(3)", {origin: "right"});
ScrollReveal().reveal(".service-box:nth-child(2)", {origin: "bottom"});

ScrollReveal().reveal(".profile-box", {origin: "bottom"});

ScrollReveal().reveal(".timeline ul li:nth-child(odd)", {origin: "left"});
ScrollReveal().reveal(".timeline ul li:nth-child(even)", {origin: "right"});

ScrollReveal().reveal(".certificate-box:nth-child(1)", {origin: "left"});
ScrollReveal().reveal(".certificate-box:nth-child(2)", {origin: "top"});
ScrollReveal().reveal(".certificate-box:nth-child(3)", {origin: "bottom"});
ScrollReveal().reveal(".certificate-box:nth-child(4)", {origin: "right"});



// Navbar

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add("active")
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active")
}

// Changing Background

mountainbg.addEventListener("click", () => {
    changeBackground("assets/img/bg.jpeg")
})

forestbg.addEventListener("click", () => {
    changeBackground("assets/img/forestbg.jpeg")
})

seabg.addEventListener("click", () => {
    changeBackground("assets/img/seaabg.jpeg")
})

function changeBackground(backgroundImageUrl) {
    document.body.style.backgroundImage = "url('" + backgroundImageUrl + "')";
}