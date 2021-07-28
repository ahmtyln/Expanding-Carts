const images = document.querySelectorAll(".image");

images.forEach(img => {
    img.addEventListener("click", () => {
        removed();
        img.classList.add("active");
    }) 
})

function removed(){
    images.forEach(img => {
            img.classList.remove("active");
        })    
}