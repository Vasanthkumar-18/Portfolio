
let navOption = document.querySelector(".nav-option");
let menuClose = document.querySelector("#displayimage");


alert("hello ");
menuClose.addEventListener("click", () => {
    navOption.classList.toggle("show");
    if (menuClose.src.match("skillsicons/menu_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg")) {
        menuClose.src = "skillsicons/close_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
    }
    else {
        menuClose.src = "skillsicons/menu_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
    };
});