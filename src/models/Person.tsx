export interface IPerson {
  name: string;
  job: string;
  password: string;
  email: string;
}

export class Person implements IPerson {
  name: string;
  age: number;
  job: string;
  password: string;
  email: string;
  constructor(name: string, job: string, email?: string) {
    this.name = name;
    this.job = job;
    this.password = 'password';
    this.email = email;
  }
}