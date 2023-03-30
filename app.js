const navBarToggler = document.querySelector(".nav-toggler");
const sideBar = document.querySelector(".side-bar")
const removeBtn = document.querySelector(".header-btn")

navBarToggler.addEventListener("click" , function() {
    // console.log(sideBar.classList)
    // console.log(sideBar.classList.contains("show-side-bar"))
    // if(sideBar.classList.contains("show-side-bar")) {
    //     sideBar.classList.remove("show-side-bar")
    // } else {
    //     sideBar.classList.add("show-side-bar")
    // }
    sideBar.classList.toggle("show-side-bar")
})

removeBtn.addEventListener("click" , function() {
    sideBar.classList.remove("show-side-bar")
    console.log(sideBar.classList)
})