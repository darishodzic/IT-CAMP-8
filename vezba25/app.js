//Primitive data types:

//string:
// "a234821390sadjlsakd"
//number:
// 25
//boolean:
// true , false

// +
// -
// *
// /
// **
// %
// https://www.w3schools.com/js/js_arithmetic.asp

// console.log(true && true)
// console.log(true && false)
// console.log(false&&true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

//https://www.w3schools.com/js/js_operators.asp

//https://www.youtube.com/watch?v=FSs_JYwnAdI&list=PL0vfts4VzfNixzfaQWwDUg3W5TRbE7CyI&index=2
//https://www.youtube.com/watch?v=DHjqpvDnNGE

// unos1 = prompt("Enter your num1: ");
// unos2 = prompt("Enter your num2: ");

// if (unos1 > unos2) {
//   console.log("Welcome!");
// }

// unos = prompt("Enter your num1: ");

// if (unos % 2 === 0) {
//   console.log("broj je paran!");
// } else {
//   console.log("broj je neparan!");
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(false));
// console.log(Boolean(""));
// console.log(Boolean(null));

// unos = prompt("Enter your num1: ");

// if (unos >= 0) {
//   console.log("broj je pozitivan!");
// } else {
//   console.log("broj je negativan!");
// }

// unos = prompt("Enter your num1: ");

// if (
//   (unos % 100 === 0 && unos % 400 === 0) ||
//   (unos % 100 !== 0 && unos % 4 === 0)
// ) {
//   console.log("broj prestupan!");
// } else {
//   console.log("broj nije prestupan!");
// }

//DOmaci uneeti broj bodova ucenika i ispisati ocenu ucenika.
//0-20 bodova - 1
//21-40 bodova - 2
//41-60 bodova - 3
//61-80 bodova - 4
//81-100 bodova - 5

// unos = Number(prompt("Enter your num1: "));

// if (unos <= 20) {
//   console.log("Ocena: 1");
// }
// if (unos > 20 && unos <= 40) {
//   console.log("Ocena: 2");
// }

// if (unos > 40 && unos <= 60) {
//   console.log("Ocena: 3");
// }
// if (unos > 60 && unos <= 80) {
//   console.log("Ocena: 4");
// }

// if (unos > 80 && unos <= 100) {
//   console.log("Ocena: 5");
// }

// unos = Number(prompt("Enter your num1: "));

// if (unos > 9) {
//   console.log("unos je veci od 9");
// } else if (unos > 5) {
//   console.log("unos je veci od 5");
// } else if (unos > 1) {
//   console.log("unos je veci od 1");
// } else {
//   console.log("unos je manji od 1");
// }

// pocetna = Number(prompt("Enter your pocetna: "));
// krajnja = Number(prompt("Enter your krajnja: "));

// for (i = pocetna; i <= krajnja; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// pocetna = Number(prompt("Enter your pocetna: "));
// krajnja = Number(prompt("Enter your krajnja: "));

// for (i = pocetna; i <= krajnja; i++) {
//   console.log(i ** 2);
// }

// kolicina = Number(prompt("Enter your krajnja: "));
// sum = 0;
// for (i = 0; i < kolicina; i++) {
//   unos = Number(prompt("Enter your number: "));
//   sum += unos;
// }

// console.log(sum);

// kolicina = Number(prompt("Enter your krajnja: "));

// str = "";
// for (i = 0; i < kolicina; i++) {
//   str += "*";
//   console.log(str);
// }

// kolicina = Number(prompt("Enter your krajnja: "));

// for (i = 1; i <= kolicina; i++) {
//   str = "";
//   for (j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

// a = "daris";

// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// "Hello World"
//  012345678910

// a = "Hello World";

// console.log(a[0]);

// console.log(a.slice(0, 5));

// text = "Please Microsoft visit Microsoft!";

// newText = text.replace("Microsoft", "W3Schools");

// console.log(text);
// console.log(newText);

// text = "Hello" + " " + "World!";

// a = "nesto";
// e = "World!";
// text = "Hello".concat(" ", e, a);
// console.log(text);

// text1 = "      Hello World!      ";
// text2 = text1.trim();

// console.log(text1);

// console.log(text2);

// kolicina = Number(prompt("Enter your krajnja: "));

// str = "";

// space = "";

// for (i = 1; i < kolicina; i++) {
//   space += " ";
// }

// for (i = 1; i <= kolicina; i++) {
//   str += "* ";
//   console.log(space + str + space);
//   space = space.slice(1);
// }

// kolicina = Number(prompt("Enter your krajnja: "));

// for (i = 1; i <= kolicina; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// kolicina = Number(prompt("Enter your krajnja: "));

// broj = "";
// sum = 0;

// for (i = 1; i <= kolicina; i++) {
//   broj += 1;
//   sum += parseInt(broj);
// }

// console.log(sum);

// sifra = "daris123";

// unos = prompt("Enter your password: ");

// while (sifra !== unos) {
//   console.log("Wrong password!");
//   unos = prompt("Wrong password,Enter your password: ");
// }

// console.log("++++++++++++++++");
// console.log("You are logged in!");

// random = Math.round(Math.random() * 100);

// unos = parseInt(prompt("Unesite broj"));

// while (unos !== random) {
//   console.log("Wrong number");

//   if (unos > random) {
//     unos = parseInt(prompt("Pokusajte opet, broj is too high"));
//   } else {
//     unos = parseInt(prompt("Pokusajte opet, broj is too low"));
//   }
// }

// console.log("Bravo");

// unos = parseInt(prompt("Unesite broj"));
// sum = 0;

// while (unos >= 0) {
//   sum += unos;
//   unos = parseInt(prompt("Unesite opet broj"));
// }

// console.log(sum);

// kod = "END";
// unos = prompt("Enter your name: ");

// while (kod !== unos) {
//   console.log(unos);
//   unos = prompt("Enter your name: ");
// }

// while (true) {
//   unos = prompt("Enter your name: ");
//   if (unos === "END") {
//     break;
//   }
//   console.log(unos);
// }

// brojac = 0;

// while (brojac < 100) {
//   console.log(brojac);
//   brojac++;
// }

// kolicina = Number(prompt("Koliko vam treba neparnih: "));
// pronadjeno = 0;
// broj = 1;

// while (pronadjeno !== kolicina) {
//   if (broj % 2 === 1) {
//     pronadjeno++;
//     console.log(broj);
//   }
//   broj++;
// }

// numbers = [3, 5, 10, 21, 42, 22, 1];
// sum = 0;

// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Suma je: " + sum);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// unos = parseInt(prompt("Unesite broj: "));
// founded = false;

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === unos) {
//     founded = true;
//     break;
//   }
// }

// if (founded) {
//   console.log("Broj je pronadjen");
// } else {
//   console.log("Broj nije pronadjen");
// }

// numbers = [3, 5, 10, 21, 42, 22, 1];
// maxNum = numbers[0];
// minNum = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
//   if (numbers[i] < minNum) {
//     minNum = numbers[i];
//   }
// }

// console.log("Najveci broj je: " + maxNum);
// console.log("Najmanji broj je: " + minNum);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// first = numbers[0];
// second = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > first) {
//     first = numbers[i];
//   }
//   if (numbers[i] > second && numbers[i] < first) {
//     second = numbers[i];
//   }
// }

// console.log("Drugi najveci je", second);

// numbers = [3, 5, 10, 21, 42, 22, 1];
// maxNum = numbers[0];
// minNum = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
//   if (numbers[i] < minNum) {
//     minNum = numbers[i];
//   }
// }

// console.log("Ralika je", maxNum - minNum);

// numbers = [1, 2, 3, 4, 5, 65, 7, 8, 9, 77, 10];

// for (num of numbers) {
//   if (num === 65 || num === 77) {
//     console.log(num);
//     break;
//   }
// }

// numbers = [1, 2, 3];

// console.log(numbers[5]);
// console.log(numbers.length);
// console.log(numbers);

// numbers.push(Number(prompt("Unesite broj")));

// console.log(numbers);

// numbers = [1, 2, 3];

// console.log(numbers);

// numbers.pop();

// console.log(numbers);

// numbers = [1, 2, 3];
// console.log(numbers);

// a = numbers.shift();
// console.log(a);
// console.log(numbers);

// numbers = [1, 2, 3];
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

// arr1 = [1, 20, 3, 50];
// arr2 = [];

// for (el of arr1) {
//   arr2.unshift(el);
// }
// console.log(arr1);
// console.log(arr2);
// kolicina = Number(prompt("Koliko vam treba el: "));
// arr = [];

// for (i = 0; i < kolicina; i++) {
//   arr.push(Number(prompt("Unesite el: ")));
// }

// console.log(arr);

// myColor = ["Red", "Green", "White", "Black"];
// str = myColor[0];
// for (i = 1; i < myColor.length; i++) {
//   str += "+" + myColor[i];
// }

// console.log(str)

// str = "The Quick Brown Fox";
// res = "";

// for (i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i].toLowerCase();
//   }
// }

// console.log(res);

// arr = [42, 25, 56, 47, 32];

// parni = [];
// neparni = [];
// for (el of arr) {
//   if (el % 2 === 0) {
//     parni.push(el);
//   } else {
//     neparni.push(el);
//   }
// }

// console.log("Parni su: ", parni);
// console.log("Neparni su: ", neparni);

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a = arr.slice(1, 6);
// console.log(arr);
// console.log(a);

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.splice(1, 3, "Izbrisan je ovde", "asd", false);
// console.log(arr);

// function sum(a, b) {
//   console.log("Zbir je: ", a + b);
// }

// sum(3, 7);

// sum(10, 2);

// sum(Number(prompt("Unesite broj")), 1);

// function findLargest(arr) {
//   max = arr[0];
//   for (el of arr) {
//     if (el > max) {
//       max = el;
//     }
//   }

//   console.log("Najveci broj je: ", max);
// }

// findLargest([1, 2, 7, 3]);

// console.log("1000lines of code");

// findLargest([1, 2, 3, 4, 5, 6, 7, 8]);

// console.log("asd".includes("b"));

// function checkIsAnagram(a, b) {
//   isAnagram = true;
//   if (a.length !== b.length) {
//     isAnagram = false;
//   }
//   for (char of a) {
//     if (!b.includes(char)) {
//       isAnagram = false;
//     }
//   }
//   if (isAnagram) {
//     console.log("Anagram");
//   } else {
//     console.log("Not anagram");
//   }
// }

// checkIsAnagram("spare", "peers");

// function calculateAverage(a, b, c) {
//   console.log("Average is : ", (a + b + c) / 3);
// }

// calculateAverage(1, 2, 3);

// function matrix(n) {
//   for (i = 0; i < n; i++) {
//     str = "";
//     for (j = 0; j < n; j++) {
//       str += i;
//     }
//     console.log(str);
//   }
// }

// matrix(10);

function sum(a, b) {
  return a + b;
}

zbir = sum(2, 3);
console.log(zbir);

function sameCase(a, b) {
  if (!/^[a-zA-Z]+$/.test(a) || !/^[a-zA-Z]+$/.test(b)) {
    return -1;
  }
  if (
    (a.toLowerCase() === a && b.toLowerCase() === b) ||
    (a.toUpperCase() === a && b.toUpperCase() === b)
  ) {
    return 1;
  }
  return 0;
}
