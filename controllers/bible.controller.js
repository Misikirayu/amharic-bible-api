const { getAllBooks, getBookByName } = require("../utils/bookLoader");

exports.listBooks = (req, res) => {
  res.json(getAllBooks());
};

exports.getChapters = (req, res) => {
  const { book } = req.params;
  const data = getBookByName(book);

  if (!data) {
    return res.status(404).json({ message: "መጽሐፍ አልተገኘም" });
  }

  res.json(
    data.chapters.map((ch) => ({
      chapter: ch.chapter,
      versesCount: ch.verses.length,
    }))
  );
};

exports.getChapter = (req, res) => {
  const { book, chapter } = req.params;
  const data = getBookByName(book);

  if (!data) {
    return res.status(404).json({ message: "መጽሐፍ አልተገኘም" });
  }

  const ch = data.chapters.find((c) => c.chapter === chapter);

  if (!ch) {
    return res.status(404).json({ message: "ምዕራፍ አልተገኘም" });
  }

  res.json(ch);
};

exports.getVerse = (req, res) => {
  const { book, chapter, verse } = req.params;
  const data = getBookByName(book);

  const ch = data?.chapters.find((c) => c.chapter === chapter);
  const text = ch?.verses[verse - 1];

  if (!text) {
    return res.status(404).json({ message: "ቁጥር አልተገኘም" });
  }

  res.json({
    book: data.title,
    chapter,
    verse,
    text,
  });
};
