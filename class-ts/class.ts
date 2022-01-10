enum Gender {
  Male = "Male",
  Female = "Female",
}
class User {
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

export default User;

const user = new User("Ahmad", 20, Gender.Male);
console.log(user);

// Inheritance
class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

const admin = new Admin("Ahmad", 20, Gender.Male);

console.log(admin);
