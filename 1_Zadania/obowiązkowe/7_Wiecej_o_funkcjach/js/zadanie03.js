
czesc(); // Dziala

function czesc() {
  console.log("Cześć");
}

czesc(); // Dziala

// Funkcję można wywołać przed i po zdefiniowaniu

b(); // Nie zadziala

var b = function welcome() {
  console.log("Witaj");
}

b(); // Dziala


//Zmienna z przypisana funkcja mozna wywolac dopiero po zdefiniowaniu