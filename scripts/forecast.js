const panels = document.querySelectorAll(".panel-item-box");
const commonPanels = document.querySelectorAll(".common-panel-box");

const removeActives = () => {
  for (let index = 0; index < panels.length; index++) {
    panels[index].classList.remove("active");
  }
};

const removeCommonActives = () => {
  for (let index = 0; index < commonPanels.length; index++) {
    commonPanels[index].classList.remove("active");
  }
};

panels[0].addEventListener("click", () => {
  const circles = panels[0].children[0].children[0].children[0].children;
  removeActives();
  panels[0].classList.add("active");
  for (let index = 0; index < circles.length; index++) {
    circles[index].style.fill = "white";
  }
  const title = document.querySelector(".forecast-info-title");
  title.style.display = "none";

  const info = document.querySelector(".forecast-info");
  info.style.display = "none";

  const commonPanel = document.querySelector(".common-panel");
  commonPanel.style.display = "flex";
});

for (let index = 1; index < panels.length; index++) {
  panels[index].addEventListener("click", () => {
    removeActives();
    panels[index].classList.add("active");
  });
}

for (let index = 0; index < commonPanels.length; index++) {
  commonPanels[index].addEventListener("click", () => {
    removeCommonActives();
    commonPanels[index].classList.add("active");
  });
}
