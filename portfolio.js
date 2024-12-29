const role = document.querySelector(".role")
const loadtext = () => {
    role.textContent = "Full Stack Developer"
    setTimeout(()=> {

        role.textContent = "Machine Learnig intern"
    },6000)
}

loadtext()
setInterval(loadtext,12000)

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

const back_to_top = document.querySelector(".scroll_to_top")
back_to_top.addEventListener("click", (e)  => {
    navbar_children.forEach((elem) => {
        elem.classList.remove("active")
    })
    window.location.href = `${window.location.href.split('#')[0]}#home_`
    const home = document.querySelector(".home_")
    home.classList.add("active")
})

const menu_icon = document.querySelector(".my_head .content .bars-active_")
menu_icon.addEventListener("click", (e)=> {
    console.log("**************")
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



