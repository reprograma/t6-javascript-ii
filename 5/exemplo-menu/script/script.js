const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

button.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(sidebar.classList)
    if(sidebar.classList.contains("sidebar-menu__visible")){
      sidebar.classList.remove("sidebar-menu__visible");
      sidebar.classList.add("sidebar-menu__hidden");
    }else{
      sidebar.classList.remove("sidebar-menu__hidden");
      sidebar.classList.add("sidebar-menu__visible")
    }
})