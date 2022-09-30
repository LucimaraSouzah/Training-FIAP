const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

tooltip.addEventListener("mouseover", (event) => {
//   console.log(event);
//   console.log("Altura da página ", body.clientHeight);
//   console.log("Largura da página ", body.clientWidth);
//   console.log("Altura do tooltip ", tooltip.clientHeight);
//   console.log("Largura do tooltip ", tooltip.clientWidth);
//   console.log("Altura do mouse ", event.clientY);
//   console.log("Largura do mouse ", event.clientX);

  if (document.querySelector(".tooltip")) {
    document.querySelector(".tooltip").remove();
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add("tooltip");
  newDiv.innerHTML =
    "Meu tooltip com muitas dicas tops demais, aparece e desaparece";
  newDiv.style.position = "absolute";
  newDiv.style.top = event.clientY + "px";
  newDiv.style.left = (event.clientX + 200 > body.clientWidth? event.clientX - 200 : event.clientX + 200) + "px";
  newDiv.style.display = "flex";
  header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (event) => {
    if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove()
    }
})