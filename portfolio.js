
// ROLE Animation 
const role = document.querySelector(".role")
const loadtext = () => {
    role.textContent = "Full Stack Developer"
    setTimeout(()=> {

        role.textContent = "Machine Learnig intern"
    },6000)
}

loadtext()
setInterval(loadtext,12000)

// Active Page In Navbar
const navbar_children =  document.querySelectorAll(".navbar div")
navbar_children.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (!el.classList.contains("active"))
        {
            navbar_children.forEach((elem) => {
                elem.classList.remove("active")
            })

            window.location.href = `${window.location.href.split('#')[0]}#${el.className}`
            el.classList.add("active")
        }
    })
});


// Active Page In Small-Screen-Navbar
const small_navbar_children =  document.querySelectorAll(".small-screen-navbar div")
small_navbar_children.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (!el.classList.contains("active"))
        {
            small_navbar_children.forEach((elem) => {
                elem.classList.remove("active")
            })

            window.location.href = `${window.location.href.split('#')[0]}#${el.className}`
            el.classList.add("active")
        }
    })
});


// Back To Top Botton
const back_to_top = document.querySelector(".scroll_to_top")
back_to_top.addEventListener("click", (e)  => {
    navbar_children.forEach((elem) => {
        elem.classList.remove("active")
    })
    window.location.href = `${window.location.href.split('#')[0]}#home_`
    const home = document.querySelector(".home_")
    home.classList.add("active")
})


// Active and Deactive Small-Screen-Navbar
const menu_icon = document.querySelector(".my_head .content .bars-active_")
menu_icon.addEventListener("click", (e)=> {
    const navbar = document.querySelector(".my_head .content .small-screen-navbar")
    if (navbar.classList.contains("disp-block")){
        menu_icon.innerHTML = '<i class="fa-solid fa-bars"></i>'
        navbar.classList.remove("disp-block")
    }
    else {
        menu_icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        navbar.classList.add("disp-block")
    }
})

// .Read More in About Me
const readMoreBotton = document.querySelector(".about_me .read_more_button")
const description = document.querySelector(".about_me .description")
readMoreBotton.addEventListener("click", read_more.bind(null, readMoreBotton, description))



// Read More in Services
// First Service
const fReadMoreBtn = document.querySelector(".services .card_container .card .read_more_button.first")
const fDescription = document.querySelector(".services .card_container .card .description.first")
fReadMoreBtn.addEventListener("click", read_more.bind(null, fReadMoreBtn, fDescription))
// Second Service
const sReadMoreBtn = document.querySelector(".services .card_container .card .read_more_button.second")
const sDescription = document.querySelector(".services .card_container .card .description.second")
sReadMoreBtn.addEventListener("click", read_more.bind(null, sReadMoreBtn, sDescription))
// Third Service
const tReadMoreBtn = document.querySelector(".services .card_container .card .read_more_button.third")
const tDescription = document.querySelector(".services .card_container .card .description.third")
tReadMoreBtn.addEventListener("click", read_more.bind(null, tReadMoreBtn, tDescription))

function read_more(readMoreBotton, textDiv){
    textDiv.classList.toggle("expanded")
    if (textDiv.classList.contains("expanded")){
        readMoreBotton.textContent = "Read Less"
    }
    else {
        readMoreBotton.textContent = "Read More"
    }
}

// scroll animation 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('#home_', {origin: top});

