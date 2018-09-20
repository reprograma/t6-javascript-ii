const figcaption = document.querySelector("figcaption");
const links = document.querySelector(".gallery__nav");
const image = document.querySelector(".gallery__image");

for (let i = 0; i < links.children.length; i++){
    const fio = links.children[i];
    fio.addEventListener("click", function(event){
        event.preventDefault();

        const img = this.dataset.image;
        image.src = img;
        
        const text = this.dataset.title;
        figcaption.innerHTML = text;
    })
}


