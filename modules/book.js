import { awesomeBooks } from './variables.js';

class Book {
  constructor(awesomeBooks) {
    this.awesomeBooks = awesomeBooks;
    this.books = [];
  }

  updateLocalStorage() {
    localStorage.setItem('bookLibrary', JSON.stringify(this.books));
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.updateLocalStorage();
  }

  removeDom(element) {
    element.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        this.remove(parent.id);
        parent.remove();
      });
    });
  }

  render(book) {
    this.awesomeBooks.innerHTML += `
      <li id="${book.id}">
      <p><span>"${book.title}"</span> by <span>${book.author}</span>.</p>
      <button class="btn">Remove</button>
      </li>
        
          `;
    this.removeDom(awesomeBooks);
  }

  add(book) {
    this.render(book);
    this.books.push(book);
    this.removeDom(awesomeBooks);
    this.updateLocalStorage();
  }
}

export default Book;