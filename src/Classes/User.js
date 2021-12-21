export default class User {
    constructor(SSN, Fname, Minit, Lname, Birthdate, Department, Role, Password, Email) {
        this.SSN= SSN;
        this.Password = Password;
        this.Fname= Fname;
        this.Lname=Lname;
        this.Minit= Minit;
        this.Birthdate= Birthdate;
        this.Department= Department;
        this.Role = Role;
        this.Email = Email;
        }
  }