$(document).ready(() => {
  let navOption = $(".nav-option");
  let menuOption = $("#displayimage");

  $(menuOption).on("click", () => {
    navOption.toggleClass("show");

    if (
      menuOption.attr("src") ===
      "skillsicons/menu_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
    ) {
      menuOption.attr(
        "src",
        "skillsicons/close_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
      );
    } else {
      menuOption.attr(
        "src",
        "skillsicons/menu_38dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg"
      );
    }
  });
});
