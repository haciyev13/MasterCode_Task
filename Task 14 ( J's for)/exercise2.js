//! Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22;
for (let i = 0; i <= n1; i++) {
  if (i % 2 == 0 && i != 0) {
    console.log(i);
  }
}
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
