class Person {
  constructor(personName, place, mail, number, education, job, company) {
    this.personName = personName;
    this.place = place;
    this.mail = mail;
    this.number = number;
    this.education = education;
    this.job = job;
    this.company = company;
  }

  work() {
    console.log(this.personName, "is working in", this.company);
  }
}

const person1 = new Person(
  "Geetha",
  "Bangalore",
  "geetha@gmail.com",
  92000000,
  "Msc computer science",
  "software engineer",
  "Infosys"
);
console.log(person1);
person1.work();
