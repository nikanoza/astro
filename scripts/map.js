const descriptions = document.querySelectorAll(".descriptions-list-item");
let activeDescription;

Array.from(descriptions).map((description) => {
  description.addEventListener("click", () => {
    if (activeDescription !== description) {
      description.classList.add("active");
      if (activeDescription) {
        activeDescription.classList.remove("active");
      }
      activeDescription = description;
    } else if (activeDescription) {
      activeDescription.classList.toggle("active");
    }
  });
});
