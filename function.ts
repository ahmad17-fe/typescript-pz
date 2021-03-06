let nama: string = "ahmad";

function getName(): string {
  return nama;
}

function printName(nama: string): void {
  console.log(nama);
}

function multiply(a: number, b: number): number {
  return a * b;
}

printName("Test nama");
console.log(getName());
console.log(multiply(2, 10));

// function type
type Age = number;
let age: Age = 20;

type Tambah = (num1: number, num2: number) => number;
const Add: Tambah = (num1: number, num2: number): number => {
  return num1 + num2;
};

// Default Parameter
const fullName = (nd: string, nb: string = "doe"): string => {
  return `${nd} ${nb}`;
};

console.log(fullName("Ahmad", "Shobirin"));
console.log(fullName("Ahmad"));

// Optional parameter
const printUmur = (val1: number, val2?: string): void => {
  console.log(`${val1} ${val2}`);
};

console.log(printUmur(20));
