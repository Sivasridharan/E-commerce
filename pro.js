var sidenav = document.querySelector(".side-navbar")

function showbar() {
    sidenav.style.left = "0%"
}
function closebar() {
    sidenav.style.left = "-80%"
}


// K I D S -- C O L L E C T I O N
var sideshirts = document.querySelector(".kids_shirts")
var cantactbar = document.querySelector(".footer")
function showshirts() {
    sideshirts.style.display= "block"
    cantactbar.style.top = "1900px"

    if(screenwidth<1260)
    {
        cantactbar.style.top = "200px"
    }
}


function closeshirts() {

    sideshirts.style.display = "none"

    cantactbar.style.top = "610px"
}

var drop =document.getElementById("#two")
var sidepants=document.querySelector(".kids_pants")
var cantactbar = document.querySelector(".footer")

function showpants() {


    sidepants.style.display="block"
    cantactbar.style.top = "2000px"
}



function closepants() {
    sidepants.style.display= "none"

    cantactbar.style.top = "610px"
}


var sidetshirts = document.querySelector(".kids_t_shirts")
var cantactbar = document.querySelector(".footer")

function showtshirts() {


    sidetshirts.style.display="block"
    cantactbar.style.top = "2100px"
}


function closetshirts() {
    sidetshirts.style.display = "none"
    cantactbar.style.top = "610px"
}


var sideshose = document.querySelector(".kids_shose")
var cantactbar = document.querySelector(".footer")

function showshoses() {


    sideshose.style.display = "block"
    cantactbar.style.top = "2200px"
}


function closeshoses() {
    sideshose.style.display = "none"
    cantactbar.style.top = "610px"
}


// P O P- U P M E S S A G E


var popupoverley1 = document.querySelector(".popup-overley")
var popupbox1 = document.querySelector(".popup-box")
var popupbutton1 = document.getElementById("popupbutton1")
var imageheading = document.getElementById("image-heading")
var imageprice = document.getElementById("image-price")
var img = document.getElementById("image1")
var popupoverley2 = document.querySelector(".buying_overley")
var popupbox2 = document.querySelector(".buying_popup-box")
var popupbutton2 = document.getElementById("popupbutton2")

popupbutton2.addEventListener("click", function () {
    popupoverley2.style.display = "block"
    popupbox2.style.display = "block"
})


// BUYING BUTTON
var lastoverley = document.querySelector(".last_overley")
var lastpopupbox = document.querySelector(".last_popup-box")
var buybutton = document.getElementById("last_button")


buybutton.addEventListener("click", function () {
    lastoverley.style.display = "block"
    lastpopupbox.style.display = "block"

})

// BACK BUTTON

var backbutton = document.getElementById("back_button")

backbutton.addEventListener("click", function () {
    lastoverley.style.display = "none"
    lastpopupbox.style.display = "none"
})

// CANCEL BUTTON
var cancelbutton = document.getElementById("cancel_button")

cancelbutton.addEventListener("click", function () {
    popupoverley2.style.display = "none"
    popupbox2.style.display = "none"
})

var cancel_button1 = document.getElementById("cancel_button1")

cancel_button1.addEventListener("click", function () {
    popupoverley1.style.display = "none"
    popupbox1.style.display = "none"
})


//FORGET PASSWORD
function forgetback(){
    location.href="signin.html";
}



