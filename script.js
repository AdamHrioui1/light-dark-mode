const lightDark = document.querySelector("#lightDark");
const body = document.querySelector("body");
var counter = 0;

lightDark.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(counter === 0){    
        lightDark.setAttribute("class", "fas fa-sun");
        counter = 1;
    }else{    
        lightDark.setAttribute("class", "fas fa-moon");
        counter = 0;
    }
})