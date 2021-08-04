function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc,book) =>{
    let [borrowed, returned] = acc;
    if(!book.borrows[0].returned){
      acc[0].push(book)
    }else{
      acc[1].push(book)
    }
    return acc
  },[[],[]])
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.reduce((acc, borrow) => {
    accounts.forEach((account) => {
      if (account.id === borrow.id) {
        const returned = borrow.returned;
        acc.push({ ...account, returned });
      }
    });
    return acc.slice(0, 10);
  }, []);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
