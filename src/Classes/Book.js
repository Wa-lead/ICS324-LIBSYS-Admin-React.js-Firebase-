export default class Book {
    constructor(ISBN, title, subject, pub_date, rack_num, author, file, copies) {
        this.ISBN= ISBN;
        this.title= title;
        this.subject=subject;
        this.pub_date= pub_date;
        this.rack_num= rack_num;
        this.author= author;
        this.file= file;
        this.copies = copies;
    }
  }