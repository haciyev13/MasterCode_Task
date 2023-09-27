let str3 = "racecar";
let str4 = "Java";
let check = false;

for (let i = 0, k = str3.length - 1; i < str3.length, k >= 0; i++, k--) {
  if (str3[i] == str3[k]) {
    check = true;
  } else {
    check = false;
    break;
  }
}

if (check) {
  console.log("polidrome");
} else {
  console.log("Deyil");
}

// Example output:
// string1 palindrome?:
// Yes
// string2 palindrome?:
// No
