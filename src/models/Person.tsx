export default class Person {
  name: string;
  age: number;
  job: string;
  password: string;
  employeeNumber: number;
  email: string;
  constructor(name: string, age: number, job: string, empNO?: number, email?: string) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.password = 'password';
    this.employeeNumber = empNO;
    this.email = email;
  }
}