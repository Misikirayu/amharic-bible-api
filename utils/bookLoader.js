const fs = require("fs");
const path = require("path");

const BOOKS_DIR = path.join(__dirname, "../data/books");

function getAllBooks() {
  return fs.readdirSync(BOOKS_DIR).map((file) => {
    const data = require(path.join(BOOKS_DIR, file));
    return {
      title: data.title,
      abbv: data.abbv,
      file,
    };
  });
}

function getBookByName(bookName) {
  const filePath = path.join(BOOKS_DIR, `${bookName}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return require(filePath);
}

module.exports = {
  getAllBooks,
  getBookByName,
};
