export class Friend {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  language: string;

  constructor(firstname: string,
              lastname: string,
              email: string,
              phonenumber: string,
              language: string)
  {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phonenumber = phonenumber;
    this.language = language;
  }
}
