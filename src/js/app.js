import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  window.addEventListener("load", function() {
    alert("Hey!");
  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
     
});
