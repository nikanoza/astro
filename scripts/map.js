const descriptions = document.querySelectorAll(".descriptions-list-item");
const addressSelect = document.querySelector("#birth-address");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close");
const mapForm = document.querySelector("#birth-form");

addressSelect.value = "";
addressSelect.addEventListener("change", () => {
  addressSelect.style.color = "#000000";
});

const closeModal = () => {
  modal.style.display = "none";
};

closeIcon.addEventListener("click", () => {
  closeModal();
});

mapForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeModal();
});

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
