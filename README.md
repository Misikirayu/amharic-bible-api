# 📖 Amharic Bible API

A fast, simple, and well-structured **REST API for the Amharic Bible**, built with Node.js and Express.
Each book is stored as its own JSON file, making the project easy to extend, maintain, and scale.

Perfect for:

* Bible apps 📱
* Church websites ⛪
* Study tools 📚
* Language and text projects 🇪🇹

---

## ✨ Features

* ✅ Full Amharic Bible support
* ✅ One JSON file per book
* ✅ Clean REST API structure
* ✅ Easy to add new books (other Language books eg.oro/Affar/...)
* ✅ No database required
* ✅ Unicode-safe (Amharic URLs work)

---

## 🗂 Project Structure

```
amharic-bible-api/
│
├── data/
│   └── books/
│       ├── ኦሪት ዘፍጥረት.json
│       ├── ኦሪት ዘጸአት.json
│       └── ...
│
├── controllers/
│   └── bible.controller.js
│
├── routes/
│   └── bible.routes.js
│
├── utils/
│   └── bookLoader.js
│
├── app.js
└── package.json
```

---

## 📘 Data Format (Per Book)

Each book is stored as its own JSON file.

Example: `ኦሪት ዘፍጥረት.json`

```json
{
  "title": "ኦሪት ዘፍጥረት",
  "abbv": "ዘፍ",
  "chapters": [
    {
      "chapter": "1",
      "title": "",
      "verses": [
        "በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።"
      ]
    }
  ]
}
```

No transformation needed. The API adapts to this structure directly.

---

## 🚀 Getting Started

### 1️⃣ Clone the project

```bash
git clone https://github.com/misikirAyu/amharic-bible-api.git
cd amharic-bible-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the server

```bash
node app.js
```

Server will run at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### 📚 List all books

```
GET /api/am/books
```

### 📖 Get chapters of a book

```
GET /api/am/books/ኦሪት ዘፍጥረት/chapters
```

### 📄 Get a full chapter

```
GET /api/am/books/ኦሪት ዘፍጥረት/chapters/1
```

### ✝️ Get a single verse

```
GET /api/am/books/ኦሪት ዘፍጥረት/chapters/1/1
```

✔ Browsers and clients automatically handle Amharic URL encoding.

---

## 🧠 Design Philosophy

* **Data-first**: Bible files stay untouched
* **Simple logic**: no unnecessary abstractions
* **Scalable**: add books by dropping JSON files
* **Readable**: clean code, clear folders

---

## 🛠 Future Improvements

Planned or optional upgrades:

* 🔍 Full-text search
* 🌍 Multi-language support
* 🔑 Book abbreviation routing (`/ዘፍ/1/1`)
* 🗃 PostgreSQL / MongoDB backend
* ⚡ Caching for performance
* 📦 API versioning

---

## 🤝 Contributing

Contributions are welcome.

Ways to help:

* Add missing books(other languages)
* Improve documentation
* Optimize performance
* Add new API features

Fork the repo and open a pull request.

---

## 📜 License

MIT License
Free to use, modify, and distribute.

---

## ❤️ Built for the Community

Made with love for Amharic readers, developers, and learners.

If you build something with this API, that’s already a win.
## misikir ayu DEC 21 , 2025
## WENGEL YASHENFAL
