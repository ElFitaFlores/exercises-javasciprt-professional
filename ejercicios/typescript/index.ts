console.log("Hola typescript");

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 4);
console.log(sum);

// boolean
let muted: boolean = true;

// numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// string
let nombre: string = "Rafa";

// arreglos
let people: string[] = ["Isabel", "Nicole", "Dana"];
let peopleAndNumbers: Array<string | number> = ["Dana", 3000];

// enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;

// any
let comodin: any = "Joker";
comodin = { type: "wildcard" };

// object
let objeto: object = { objeto: "hola" };

// funciones
function add2(a: number, b: number): number {
  return a + b;
}
const sum2 = add2(4, 6);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firtName: string, lastName?: string): string {
  return `${firtName} ${lastName}`;
}

const rafa = fullName("Rafa");
