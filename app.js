const body = document.body;

const navbar_burger = document.getElementById("navbar_burger");
const navbar_menu = document.getElementById("nav_menu");
const navbar_burger_cross = document.getElementsByClassName("cross");


// NAVBAR MENU
navbar_burger.onclick = () => {navbar_menu_handler()}

const navbar_menu_handler = () => {
    if (navbar_menu.style.display === "flex") {
        navbar_menu.style.display = "none"
        body.classList.remove("preventScroll")
        navbar_burger_cross.item(0).style.transform = "rotate(0deg)";
        navbar_burger_cross.item(1).style.transform = "rotate(0deg)";
    }

    else {
        navbar_menu.style.display = "flex"
        body.classList.add("preventScroll")
        navbar_burger_cross.item(0).style.transform = "rotate(45deg)";
        navbar_burger_cross.item(1).style.transform = "rotate(-45deg)";
    }
}
