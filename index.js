import PAGE_NAVIGATION from './modules/pageNav.js';
import { awesomeBooks, form, error } from './modules/variables.js';
import Book from './modules/book.js';
import DISPLAY_TIME_DATE from './modules/date.js';

// displays time on the page
DISPLAY_TIME_DATE();
setInterval(DISPLAY_TIME_DATE, 1000);

// makes the nav links active
PAGE_NAVIGATION();

const library = new Book(awesomeBooks);
// form actions
form.onsubmit = (e) => {
  e.preventDefault();
  const { title, author } = e.target;
  if (title.value.length < 3 || author.value.length < 3) {
    error.innerHTML = 'input field should contain minimum of three characters!';
    setTimeout(() => {
      error.innerHTML = '';
    }, 3000);
  } else {
    error.innerHTML = '';
    PAGE_NAVIGATION();
    library.add({
      id: Date.now().toString(),
      title: title.value,
      author: author.value,
    });
    e.target.title.value = '';
    e.target.author.value = '';
  }
};

if (localStorage.getItem('bookLibrary')) {
  library.books = JSON.parse(localStorage.getItem('bookLibrary'));
} else {
  localStorage.setItem('bookLibrary', JSON.stringify([]));
}

library.books.forEach((book) => library.render(book));