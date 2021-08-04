function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((userA, userB) =>
    userA.name.last.toLowerCase() < userB.name.last.toLowerCase() ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id.includes(account.id)) {
        acc += 1;
      }
    });
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((acc, book) => {
    if (book.borrows[0].id === account.id) {
      const author = authors.find((author) => author.id === book.authorId);
      acc.push({ ...book, author });
    }
    return acc;
  }, []);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
