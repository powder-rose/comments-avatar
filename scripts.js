let textarea = document.querySelector(".textarea");
let btn = document.querySelector(".btn");
let allBtns = document.querySelector(".btns");
let commentWindow = document.querySelector(".textwindow");
let btnAvatar = document.querySelector(".btn-avatar");
let avatar = document.querySelector(".avatar");
let avatarImage = document.querySelector(".avatar-image");
let nickname = document.querySelector('.nickname')

let comment = "";
let arr = [];


document.addEventListener("DOMContentLoaded", function(event) {
let mess = localStorage.getItem("comment");
let nick = localStorage.getItem('nickname')


if (nick != null) {
  nickname.value = nick
  nickname.classList.add("nickname-login");
  }

  if (mess != null) {
    arr = mess.split(",");
    for (i = 0; i < arr.length; i++) {
      let nicknameStyle = document.createElement("div")
       nicknameStyle.classList.add('sended-message-nickname')
       nicknameStyle.innerHTML = `${nick} :`
       commentWindow.append(nicknameStyle)

      let savedMessage = document.createElement("div");
       savedMessage.classList.add("message");
       savedMessage.innerHTML = arr[i];
       commentWindow.append(savedMessage);
    }
  }
})

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

    let nick = document.createElement("div")
    nickname.classList.add("nickname-login");
  nick.classList.add('sended-message-nickname')
  nick.innerHTML = `${nickname.value} :`

  if (textarea.value != '') {
    commentWindow.append(nick)
    commentWindow.append(message)
  }
  
  if (localStorage.getItem("comment") == null && textarea.value != '' || localStorage.getItem("comment") != null && textarea.value != '') {
    arr.push(textarea.value);
    localStorage.setItem("comment", arr);
  }
  
  
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

const addNickname = () => {
  if (localStorage.getItem("nickname") == null && nickname.value != '') {
    localStorage.setItem("nickname", nickname.value);
  }
}

const resetValue = () => {
  textarea.value = "";
};

btn.addEventListener("click", newMessage);
btn.addEventListener("click", resetValue);
btnAvatar.addEventListener("click", addAvatar);
btn.addEventListener('click', addNickname)


