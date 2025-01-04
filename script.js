/* Script for Library */

const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
      if (this.read) {
        console.log(this.name + ' by ' + this.author + ', ' + this.pages + ' pages, already read');
        return;
      }
      console.log(this.name + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet');
      return;
    };
  }

  Book.prototype.testProto = function() {
    console.log("Proto test! " + this.name);
 };

function addBookToLibrary() {
    // do stuff here
}

 
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(Object.getPrototypeOf(book1) === Book.prototype); // returns true
book1.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, already read"
book1.testProto();
const book2 = new Book('Test Book', 'Big Boi', 321, false);
console.log(Object.getPrototypeOf(book2) === Book.prototype);
book2.info();
book2.testProto();
  
console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype); // true
console.log(book1.valueOf()); // Output: Book {name: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: true, info: ƒ}
console.log(book1.hasOwnProperty('valueOf')); // false
console.log(Object.prototype.hasOwnProperty('valueOf')); // true
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
