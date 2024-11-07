

let click = document.querySelector("#displayimage"),
    navoption = document.querySelector(".nav-option");

let menuclose = document.getElementById("displayimage")

click.addEventListener("click", function navwork(){
    navoption.classList.toggle("show");
    if (menuclose.src.match("skillsicons/menu_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg")) {
        menuclose.src = "skillsicons/close_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
    }
    else {
        menuclose.src = "skillsicons/menu_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
    };
});