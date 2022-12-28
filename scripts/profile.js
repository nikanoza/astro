const friendsElement = document.querySelector(".friends");

const friends = [
  {
    name: "ალექს ღონღაძე",
    avatar: "./assets/images/profile/eru.png",
    zodiac: "თევზები",
    active: true,
    message: true,
  },
  {
    name: "ქეთევან დანელია",
    avatar: "./assets/images/profile/eru.png",
    zodiac: "მორიელი",
    active: true,
    message: false,
  },
  {
    name: "ვაჟა კილასონია",
    avatar: "./assets/images/profile/eru.png",
    zodiac: "მშვილდოსანი",
    active: false,
    message: false,
  },
];

for (let i = 0; i < friends.length; i++) {
  const box = document.createElement("div");
  box.classList.add("friend-box");
  if (friends[i].message) {
    box.style.backgroundColor = "var(--grayBorder)";
  }

  const avatar = document.createElement("img");
  avatar.src = friends[i].avatar;
  avatar.classList.add("friend-avatar");
  box.append(avatar);

  const circle = document.createElement("div");
  circle.classList.add("friend-status");
  circle.style.backgroundColor = friends[i].active
    ? "#24C876"
    : "var(--textGray)";
  box.append(circle);

  const info = document.createElement("div");
  info.classList.add("friend-info");
  box.append(info);

  const name = document.createElement("h3");
  name.textContent = friends[i].name;
  name.classList.add("friend-name");
  info.append(name);

  const zodiac = document.createElement("h4");
  zodiac.textContent = friends[i].zodiac;
  zodiac.classList.add("friend-zodiac");
  info.append(zodiac);

  if (friends[i].message) {
    const convert = document.createElement("img");
    convert.src = "./assets/images/social/mail.svg";
    convert.style.marginLeft = "auto";
    box.append(convert);
  }

  friendsElement.append(box);
}
