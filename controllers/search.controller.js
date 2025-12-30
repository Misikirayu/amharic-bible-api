const fs = require("fs");
const path = require("path");
const getTestament = require("../utils/getTestament"); // returns 'old' or 'new'

const booksDir = path.join(__dirname, "../data/books");

exports.searchBible = (req, res) => {
  const { q, limit, book, testament } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const results = [];
  const maxResults = limit ? parseInt(limit) : Infinity;

  const files = fs.readdirSync(booksDir);

  for (const file of files) {
    if (results.length >= maxResults) break;

    const bookPath = path.join(booksDir, file);
    const bookData = JSON.parse(fs.readFileSync(bookPath, "utf8"));

    // 📌 Book filter
    if (book) {
      const bookMatch =
        bookData.title.includes(book) || bookData.abbv.includes(book);
      if (!bookMatch) continue;
    }

    // 📌 Testament filter
    if (testament) {
      const bookTestament = getTestament(bookData.title); // 'old' or 'new'
      if (bookTestament !== testament.toLowerCase()) continue;
    }

    bookData.chapters.forEach((chapter, chapterIndex) => {
      chapter.verses.forEach((verse, verseIndex) => {
        if (results.length >= maxResults) return;

        if (verse.includes(q)) {
          results.push({
            book: bookData.title,
            abbv: bookData.abbv,
            chapter: chapterIndex + 1,
            verse: verseIndex + 1,
            text: verse,
          });
        }
      });
    });
  }

  res.json({
    query: q,
    book: book || "all",
    testament: testament || "all",
    total: results.length,
    results,
  });
};