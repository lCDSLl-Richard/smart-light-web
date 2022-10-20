document.querySelectorAll(".main-card").forEach((card) => {
  card
    .querySelectorAll(".main-button")[0]
    .addEventListener("click", function () {
      if (this.parentElement.querySelectorAll("span")[0].id == "off") {
        this.parentElement.querySelectorAll("span")[0].id = "on";
        this.innerText = "Apagar";
      } else {
        this.parentElement.querySelectorAll("span")[0].id = "off";
        this.innerText = "Encender";
      }
    });
});

document.querySelectorAll(".secondary-card").forEach((card) => {
  card
    .querySelectorAll(".main-button")[0]
    .addEventListener("click", function () {
      if (this.parentElement.querySelectorAll("span")[0].id == "off") {
        this.parentElement.querySelectorAll("span")[0].id = "on";
      } else {
        this.parentElement.querySelectorAll("span")[0].id = "off";
      }
    });
});
