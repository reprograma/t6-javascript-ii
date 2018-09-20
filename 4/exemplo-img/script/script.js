 const links = document.querySelector(".gallery__nav");
 let linkItem;
 
 for (var i = 0; i < links.children.length; i++) {
        linkItem = links.children[i];
        
        links.children[i].addEventListener("click", function(){
                const img = this.dataset.image;
                document.querySelector(".gallery__image").src=img;
        })
}


