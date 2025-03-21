function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json()) //this coverts response to json
  .then(data => renderBooks(data))
  //catch error
  .catch(error => console.error("failed to fetch books", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
