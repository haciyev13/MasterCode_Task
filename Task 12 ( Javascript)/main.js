const userName = prompt("Adinizi daxil edin");

if (userName === "admin") {
  const password = prompt("Parolunuzu daxil edin");
  if (password === "TheMaster") {
    alert("Welcome");
  } else {
    alert("Parolunuz sehvdir!");
  }
} else {
  alert("Adiniz duzgun deyil");
}
