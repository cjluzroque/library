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
const container = document.querySelector('.container');
const createBook = document.querySelector('.createBook');
createBook.addEventListener("click", function () {
  if (!container.classList.contains('blur')) {
    console.log("Creating new book");
    addBookToLibrary();
  }
});

function addBookToLibrary() {
    // Create dialogue box with form element 
    const layout = document.querySelector('body');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const bookdialogue = document.createElement('div');
    bookdialogue.classList.add('bookdialogue');
    const bookform = document.createElement('form');
    bookform.classList.add('bookform');

    // Title form input
    const titleform = document.createElement('div');
    const titleformlabel = document.createElement('label');
    titleformlabel.classList.add('titleformlabel');
    titleformlabel.textContent = 'Title:';
    titleformlabel.for = 'title';
    titleform.appendChild(titleformlabel);

    const titleinput = document.createElement('input');
    titleinput.classList.add('titleinput');

    titleinput.required = true;
    titleinput.type = 'text';
    titleinput.name = 'title';
    titleinput.title = 'Please enter book title';
    titleinput.placeholder='Title';

    titleform.appendChild(titleinput);
    bookform.appendChild(titleform);

    // Blur background
    container.classList.add('blur');

    // Author form input
    const authorform = document.createElement('div');
    const authorformlabel = document.createElement('label');
    authorformlabel.classList.add('authorformlabel');
    authorformlabel.textContent = 'Author:';
    authorformlabel.for = 'author';
    authorform.appendChild(authorformlabel);

    const authorinput = document.createElement('input');
    authorinput.classList.add('authorinput');

    authorinput.required = true;
    authorinput.type = 'text';
    authorinput.name = 'author';
    authorinput.title = 'Please enter author';
    authorinput.placeholder='Author';

    authorform.appendChild(authorinput);
    bookform.appendChild(authorform);

    // Page form input
    const pageform = document.createElement('div');
    const pageformlabel = document.createElement('label');
    pageformlabel.classList.add('pageformlabel');
    pageformlabel.textContent = 'Page Count:';
    pageformlabel.for = 'pages';
    pageform.appendChild(pageformlabel);

    const pageinput = document.createElement('input');
    pageinput.classList.add('pageinput');

    pageinput.required = true;
    pageinput.type = 'number';
    pageinput.name = 'pages';
    pageinput.title = 'Please enter number of pages';
    pageinput.placeholder='Page Count';

    pageform.appendChild(pageinput);
    bookform.appendChild(pageform);

    // Read form input
    const readform = document.createElement('div');
    const readformlabel = document.createElement('label');
    readformlabel.classList.add('readformlabel');
    readformlabel.textContent = 'Read?';
    readformlabel.for = 'read';
    readform.appendChild(readformlabel);

    const readinput = document.createElement('input');
    readinput.classList.add('readinput');
    readinput.classList.add('checkbox');

    readinput.type = 'checkbox';
    readinput.name = 'read';
    readinput.title = 'Read?';

    readform.appendChild(readinput);
    bookform.appendChild(readform);

    // Create Form and add to layout 
    const submitbook = document.createElement('button');
    submitbook.classList.add('submitbook');
    submitbook.textContent = "Create Book";
    bookform.appendChild(submitbook);
    bookdialogue.appendChild(bookform);

    // Cancel button
    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.textContent = "Cancel";
    bookdialogue.appendChild(cancel);
  
    const popupTitle = document.createElement('h2');
    popupTitle.classList.add('popupTitle');
    popupTitle.textContent = "Add Book:";
    popup.appendChild(popupTitle);
    popup.appendChild(bookdialogue);
    layout.appendChild(popup);

    cancel.addEventListener("click", function () {
      container.classList.remove('blur');
      console.log("Cancelling new book");
      popup.remove();
    });

    // Create Book Object and remove dialogue
    bookform.addEventListener('submit', (event) => {
      // Remove blur
      container.classList.remove('blur');

      // Prevent the default form submission behavior
      event.preventDefault(); 

      // Create Object
      var readstate = false;
      if (readinput.checked) readstate = true;
      const book = new Book(titleinput.value, authorinput.value, pageinput.value, readstate);
      console.log("Created book");
      book.info();
      myLibrary.push(book);
      console.log(book);

      // Remove popup
      popup.remove();

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
      bookauthor.textContent = "Author: " + book.author;
      newbook.appendChild(bookauthor);

      // Add Page Count to the book card
      const bookpages = document.createElement("p");
      bookpages.classList.add('description');
      bookpages.textContent = book.pages + " Pages";
      newbook.appendChild(bookpages);

      // Add Read state to the book card book.read
      const bookread = document.createElement("div");
      bookread.classList.add('bookread');
      const readstatebox = document.createElement('button');
      readstatebox.name = 'read';
      if (book.read) {
        readstatebox.checked = true;
        readstatebox.textContent = 'Read'
        readstatebox.classList.add('readstatebox-read');
      } else {
        readstatebox.checked = false;
        readstatebox.textContent = 'Not Read';
        readstatebox.classList.add('readstatebox-notread');
      }
      bookread.appendChild(readstatebox);
      newbook.appendChild(bookread);

      readstatebox.addEventListener('click', function() {
        if (book.read) {
          book.read = false;
          readstatebox.textContent = 'Not Read';
          readstatebox.classList.remove('readstatebox-read');
          readstatebox.classList.add('readstatebox-notread');
        } else {
          book.read = true;
          readstatebox.textContent = 'Read';
          readstatebox.classList.add('readstatebox-read');
          readstatebox.classList.remove('readstatebox-notread');
        }
        console.log("Changed read state to " + book.read);
      });

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
        console.log('Removed book');
        myLibrary = myLibrary.filter((item) => item !== book);
        newbook.remove();
      });
    });
}