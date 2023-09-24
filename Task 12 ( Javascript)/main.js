const userName = prompt("Adinizi daxil edin");

if (userName === "admin") {
  let password = prompt("Parolunuzu qeyd edin");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (!password) {
    alert("Wrong Password");
  } else {
    alert("Ganceled");
  }
} else if (userName) {
  alert("I don't know you");
} else {
  userName = false;
  alert("Ganceled");
}

