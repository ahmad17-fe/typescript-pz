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
