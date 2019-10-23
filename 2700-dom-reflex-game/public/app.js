let body = document.querySelector("body");
let lost = false;
let won = false;
let clicked = [false, false, false];

let btnContent = ["one", "two", "three"];
let makeButton = () => {
  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    button.innerText = btnContent[i];
    button.addEventListener("click", () => {
      if (won || lost) return;
      clicked[i] = true;
      if (clicked[0] && clicked[1] && clicked[2]) {
        won = true;
        document.getElementById("status").innerText = "you won!";
      }
    });
    document.body.appendChild(button);
  }
};

makeButton();

// let first = document.createElement("button");
// first.innerText = "one";
// first.addEventListener("click", () => {
//   if (won || lost) return;
//   clicked[0] = true;
//   if (clicked[0] && clicked[1] && clicked[2]) {
//     won = true;
//     document.getElementById("status").innerText = "you won!";
//   }
// });
// document.body.appendChild(first);

// let two = document.createElement("button");
// two.innerText = "two";
// two.addEventListener("click", () => {
//   if (won || lost) return;
//   clicked[1] = true;
//   if (clicked[0] && clicked[1] && clicked[2]) {
//     won = true;
//     document.getElementById("status").innerText = "you won!";
//   }
// });
// document.body.appendChild(two);

// let three = document.createElement("button");
// three.innerText = "three";
// three.addEventListener("click", () => {
//   if (won || lost) return;
//   clicked[2] = true;
//   if (clicked[0] && clicked[1] && clicked[2]) {
//     won = true;
//     document.getElementById("status").innerText = "you won!";
//   }
// });
// document.body.appendChild(three);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

setTimeout(() => {
  if (won || lost) return;
  lost = true;
  document.getElementById("status").innerText = "you lost!!";
}, getRandomArbitrary(5000, 13000));
