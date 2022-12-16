const descriptions = document.querySelectorAll(".descriptions-list-item");
const addressSelect = document.querySelector("#birth-address");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close");
const mapForm = document.querySelector("#birth-form");
const mapPopUp = document.querySelector(".map-popup");
const loading = document.querySelector(".loading");
const closeRegModal = document.getElementById("close-reg-btn");
const regPopupForm = document.querySelector("#reg-form");
const regPopupNameBox = document.getElementById("reg-name");
const regNameInput = document.getElementById("reg-name-input");
const regUserIcon = document.querySelector(".reg-user-icon");
const passwordIcon = document.getElementById("eye-icon-password");
const repeatPasswordIcon = document.getElementById("eye-icon-repeat-password");
const confirm = document.querySelector(".confirm-checkbox");
const avatarModal = document.querySelector("#avatar-popup");
const file = document.getElementById("file-avatar");

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

const openRegisterModal = () => {
  const registerPopup = document.getElementById("register-popup");
  registerPopup.style.display = "flex";
};

closeRegModal.addEventListener("click", () => {
  const registerPopup = document.getElementById("register-popup");
  registerPopup.style.display = "none";
});

mapForm.addEventListener("submit", (event) => {
  event.preventDefault();
  mapPopUp.style.display = "none";
  loading.style.display = "flex";
  setTimeout(() => {
    const circle = document.getElementById("popup-circle");
    const logo = document.getElementById("popup-logo");
    const dotedCircle = document.getElementById("popup-doted-circle");
    const checked = document.getElementById("popup-checked");
    const text = document.getElementById("popup-text");
    const description = document.getElementById("popup-description");

    circle.style.display = "none";
    logo.style.display = "none";
    dotedCircle.style.display = "block";
    checked.style.display = "block";

    text.textContent = "თქვენი მონაცემების დამუშავება წარმატებით დასრულდა";
    description.style.display = "none";
  }, 3000);
  setTimeout(() => {
    closeModal();
  }, 5000);
  setTimeout(() => {
    openRegisterModal();
  }, 8000);
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

regNameInput.addEventListener("input", (event) => {
  console.log(1);
  if (event.target.value.trim().length > 0) {
    console.log(2);
    regUserIcon.children[0].style.fill = "#634aae";
  } else {
    console.log(3);
    regUserIcon.children[0].style.fill = "#44487d";
  }
});

passwordIcon.addEventListener("click", () => {
  const password = document.getElementById("reg-password-input");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

repeatPasswordIcon.addEventListener("click", () => {
  const password = document.getElementById("reg-repeat-password-input");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

confirm.addEventListener("click", () => {
  confirm.classList.toggle("active");
});

regPopupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const registerPopup = document.getElementById("register-popup");
  registerPopup.style.display = "none";
  avatarModal.style.display = "flex";
});

const skipAvatar = () => {
  avatarModal.style.display = "none";
};

file.addEventListener("input", (e) => {
  const description = document.querySelector(".avatar-description");
  description.textContent = "ფოტო იტვირთბა...";
  const warning = document.querySelector(".warning");
  warning.style.display = "none";
  const animation = document.querySelector(".animation-bar");
  animation.style.display = "block";
  setTimeout(() => {
    let selectedFile = e.target.files[0];
    let reader = new FileReader();

    let imgTag = document.querySelector(".user-big-icon");
    imgTag.title = selectedFile.name;

    reader.onload = function (event) {
      imgTag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
  }, 5000);
});
