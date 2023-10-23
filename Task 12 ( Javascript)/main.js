const userName = prompt("Adinizi daxil edin");

if (userName === "admin") {
  let password = prompt("Parolunuzu qeyd edin");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === null) {
    alert("Ganceled");
  } else {
    alert("Wrong Password");
  }
} else if (userName === null) {
  alert("Ganceled");
} else {
  alert("I don't know you");
}
