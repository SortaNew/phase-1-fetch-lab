function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(`https://anapioficeandfire.com/api/books`)
  .then((request) => request.json())
  .then((books) => bookCharacter(books))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function bookFive(books) {
  const main = document.querySelector('main');
  const listing  = document.createElement('h2');
  const name = books[4]['name'];
  listing.innerHTML = name;
  main.appendChild(listing);
}
function bookCharacter(books){
  const main = document.querySelector('main');
  
  const h2 = document.createElement('h2');
    h2.innerHTML = books[0]['characters'][0];
    main.appendChild(h2);
  }


// function bookCharacter(books){
//   const main = document.querySelector('main');
//   books.forEach(book => {  
//   const h2 = document.createElement('h2');
//     h2.innerHTML = book['characters'][0];
//     main.appendChild(h2);
//   })
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})
