// root = document.getElementById("root");
// root.style.backgroundColor = "beige";
// root.style.height = "200px";

// function createEl() {
//   console.log("Button clicked");
//   el = document.createElement("h1");
//   el.innerText = "New created el";
//   el.style.backgroundColor = "blue";
//   el.style.color = "white";

//   root.appendChild(el);
//   //   console.log(el);
// }

root = document.getElementById("root");
root.style.backgroundColor = "beige";
root.style.height = "200px";

function addClass() {
  console.log("You clicke the button");
  //   root.style.color = "green";
  //   root.style.fontSize = "40px";
  //   root.style.weight = "600";
  if (root.classList.contains("mojaKlasa")) {
    root.classList.remove("mojaKlasa");
  } else {
    root.classList.add("mojaKlasa");
  }
  //   root.classList.toggle("mojaKlasa");
  //   el = document.getElementById("tekst");
  //   root.removeChild(el);
}
