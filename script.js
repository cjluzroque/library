/* Script for Library */

var myLibrary = [];

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


// Create new book cards 
const createBook = document.querySelector('.createBook');
createBook.addEventListener("click", function () {
  console.log('new button pressed');
  addBookToLibrary();
});

function addBookToLibrary() {
    // Create dialogue box with form element 
    const layout = document.querySelector('.container');
    const bookdialogue = document.createElement('div');
    bookdialogue.classList.add('bookdialogue');
    const bookform = document.createElement('form');
    bookform.classList.add('bookform');
    const titleinput = document.createElement('input');
    titleinput.classList.add('titleinput');
    bookform.appendChild(titleinput);
    titleinput.value = 'TITLE'// Test title input
    const authorinput = document.createElement('input');
    authorinput.classList.add('authorinput');
    bookform.appendChild(authorinput);
    authorinput.value = 'AUTHOR'// Test title input
    const pageinput = document.createElement('input');
    pageinput.classList.add('pageinput');
    bookform.appendChild(pageinput);
    pageinput.value = 'PAGES'// Test title input
    const readinput = document.createElement('input');
    readinput.classList.add('readinput');
    bookform.appendChild(readinput);
    readinput.value = 'READ'// Test title input
    const submitbook = document.createElement('button');
    submitbook.classList.add('submitbook');
    bookform.appendChild(submitbook);
    bookdialogue.appendChild(bookform);
    layout.appendChild(bookdialogue);

    // Create Book Object and remove dialogue
    bookform.addEventListener('submit', (event) => {
      // Prevent the default form submission behavior
      event.preventDefault(); 

      // Create Object
      console.log('Creating Object');
      const book = new Book(titleinput.value, authorinput.value, pageinput.value, readinput.value);
      myLibrary.push(book);
      console.log(book);

      // Remove dialogue box
      bookdialogue.remove();

      // Create Book from form input 
      const layoutarea = document.querySelector('.layout');
      const newbook = document.createElement("div");
      newbook.classList.add('card');

      // Add Title to the book card
      const booktitle = document.createElement("p");
      booktitle.classList.add('title');
      booktitle.textContent = book.name; 
      newbook.appendChild(booktitle);

      // Add Author to the book card
      const bookauthor = document.createElement("p");
      bookauthor.classList.add('description');
      bookauthor.textContent = book.author;
      newbook.appendChild(bookauthor);

      // Add Page Count to the book card
      const bookpages = document.createElement("p");
      bookpages.classList.add('description');
      bookpages.textContent = book.pages;
      newbook.appendChild(bookpages);

      // Add remove icon to the book card 
      const bookaction = document.createElement("div");
      bookaction.classList.add('actions');
      const removeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const removePath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      removeIcon.setAttribute('viewBox', '0 0 24 24');
      removePath.setAttribute(
        'd',
        'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
      );
      removeIcon.appendChild(removePath);
      bookaction.appendChild(removeIcon);
      newbook.appendChild(bookaction);
      layoutarea.appendChild(newbook); // Add card to the layout 

      // Remove function for card 
      bookaction.addEventListener("click", function () {
        console.log('Remove button pressed');
        myLibrary = myLibrary.filter((item) => item !== book);
        newbook.remove();
      });
    });

    

}
