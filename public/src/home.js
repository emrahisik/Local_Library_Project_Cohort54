function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (!book.borrows[0].returned) {
      acc++;
    }
    return acc;
  }, 0);
}

//getMostCommonGenres
//Starts Here

//Helper Function
function _sortObjectByValues(book) {
  const keys = Object.keys(book);
  return keys.sort((keyA, keyB) => {
    if (book[keyA] > book[keyB]) {
      return -1;
    } else if (book[keyB] > book[keyA]) {
      return 1;
    }
    return 0;
  });
}

//Main Function
function getMostCommonGenres(books) {
  let countBooks = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  console.log(countBooks);
  let sortedKeys = _sortObjectByValues(countBooks);
  return sortedKeys.map((key) => ({ name: key, count: countBooks[key] })).slice(0, 5);
  console.log(sorted);
}

//Ends Here


function getMostPopularBooks(books) {
  const booksPopularity = books.map(({ title, borrows }) => ({
    name: title,
    count: borrows.length,
  }));
  return booksPopularity.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors.reduce((acc, { id, name: { first, last } }) => {
    const name = `${first} ${last}`;
    let count = 0;
    const authorBooks = books.forEach((book) => {
      if (book.authorId === id) {
        count += book.borrows.length;
      }
    });
    acc.push({ name, count });
    return acc.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
  }, []);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
