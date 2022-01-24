const copyRights = document.querySelector(".footer__copy")
const year = (new Date()).getFullYear()

copyRights.innerHTML = `Copy Rights &copy; Imane Ben Aalla ${year}`

const logo = document.querySelector(".header__logo")
logo.addEventListener("click", () => {
    location.href = "./index.html"
})

const aboutMe = document.querySelector(".header__list__about")
aboutMe.addEventListener("click", () => {
    location.href = "./about.html"
})

