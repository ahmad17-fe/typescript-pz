enum Gender {
  Male = "Male",
  Female = "Female",
}
export class User {
  public id: string;

  constructor(public name: string, public age: number, public jk: Gender) {
    const randomNum = (Math.random() * age).toString();
    this.id = randomNum;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

// Public = bisa diakses di semua class / dari luar class
// Protected = hanya bisa diakses dari Class tersebut, dan kelas turunannya
// Private = hanya bisa diakses dari Class itu sendiri

// Inheritance
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  constructor(phone:string, name: string, age: number, jk: Gender) {
    super(name, age, jk);
    this.phone = phone
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

const admin = new Admin("082187288110","Ahmad", 20, Gender.Male);

console.log(admin);
