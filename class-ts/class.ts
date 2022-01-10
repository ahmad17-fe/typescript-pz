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
}

export default User;

let user1 = new User("Ahmad", 20, Gender.Male);
let user2 = new User("Unknown", 20, Gender.Female);
console.log(user1);
console.log(user2);
