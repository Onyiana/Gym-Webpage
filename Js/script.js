const menuOpen = document.querySelector(".ri-menu-line")
const menuClose = document.querySelector(".ri-close-circle-line")
const navBar = document.querySelector(".navlinks")

menuOpen.addEventListener("click", function(){
    navBar.style.right = "0px"
})

menuClose.addEventListener("click", function(){
    navBar.style.right = "-200px"
})


