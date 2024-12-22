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
    console.log(el);
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
