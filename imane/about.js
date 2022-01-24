const myImage = document.querySelector(".about__image")

myImage.addEventListener("click", function() {
    const image = document.createElement("img")
    image.src = this.src
    image.id = "myImage";
    document.body.appendChild(image)
})

document.addEventListener("click", (e) => {
    if(document.getElementById("myImage") &&
        ( e.target != document.getElementById("myImage")
           && e.target != myImage
        )
        )

        document.body.removeChild(document.getElementById("myImage"))
})

const contact = document.querySelector(".about__contact")

contact.addEventListener("click", () => {
    location.href = "mailto:imaben1999@gmail.com"
})