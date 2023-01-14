let textarea = document.querySelector(".textarea");
let btn = document.querySelector(".btn");
let allBtns = document.querySelector(".btns");
let commentWindow = document.querySelector(".textwindow");
let btnAvatar = document.querySelector(".btn-avatar");
let avatar = document.querySelector(".avatar");
let avatarImage = document.querySelector(".avatar-image");

let comment = "";
let arr = [];

document.addEventListener("DOMContentLoaded", function(event) {
  let mess = localStorage.getItem("com");

  if (mess != null) {
    arr = mess.split(",");
    for (i = 0; i < arr.length; i++) {
      let savedMessage = document.createElement("div");
      savedMessage.classList.add("message");
      savedMessage.innerHTML = arr[i];
      commentWindow.append(savedMessage);
    }
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  let avatr = localStorage.getItem("avatar");

  if (avatr != null) {
    avatar.style.display = "block";
    btnAvatar.style.display = "none";
    textarea.style.width = "343px";
    allBtns.style.justifyContent = "center";
  }
});

const newMessage = () => {
  let message = document.createElement("div");
  message.classList.add("message");
  commentWindow.append(message);

  arr.push(textarea.value);

  if (localStorage.getItem("com") == null) {
    localStorage.setItem("com", arr);
  }
  localStorage.setItem("com", arr);

  const checkSpam = str => {
    comment = textarea.value + comment;
    str = comment.toLowerCase();

    if (str.includes("xxx") || str.includes("viagra") === true) {
      for (i = 0; i < str.length; i++) {
        str = str.replace("xxx", "***");
        str = str.replace("viagra", "***");
      }
      message.innerHTML = str;
    }
    message.innerHTML = str;
  };

  checkSpam();

  comment = "";
};

const addAvatar = () => {
  avatar.style.display = "block";
  btnAvatar.style.display = "none";
  allBtns.style.justifyContent = "center";
  textarea.style.width = "343px";
  let img = avatarImage.src;

  if (localStorage.getItem("avatar") == null) {
    localStorage.setItem("avatar", avatarImage.src);
  }
};

const resetValue = () => {
  textarea.value = "";
};

btn.addEventListener("click", newMessage);
btn.addEventListener("click", resetValue);
btnAvatar.addEventListener("click", addAvatar);
