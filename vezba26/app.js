// const a = document.getElementById("daris");
// const a = document.getElementsByClassName("daris");
// const a = document.getElementsByTagName("p");
// const a = document.querySelector("#daris");
// const a = document.querySelector(".daris");
// const a = document.querySelector("h1");
// const a = document.querySelector(".daris #da");
// const a = document.querySelectorAll("h3");

// a.innerText = "Centar NIT";
// a.innerHTML = "<h1>DARIS</h1>";

// a.style.backgroundColor = "red";
// a.style.fontSize = "50px";
// a.style.color = "white";

// const div = document.getElementById("daris");
// const str = prompt("unesi tekst");
// const kolicina = Number(prompt("unesi kol"));
// let text = "";

// for (i = 0; i < kolicina; i++) {
//   text += str;
// }

// div.innerText = text;

el = document.getElementById("daris");
isNewColor = false;
brojac = 0;
function mojaF() {
  brojac++;
  console.log(brojac);
  console.log("SET COLOR RED");
  if (isNewColor) {
    el.style.backgroundColor = "green";
    isNewColor = false;
  } else {
    el.style.backgroundColor = "yellow";
    isNewColor = true;
  }
}
