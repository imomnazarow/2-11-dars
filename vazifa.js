let books = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    price: 50000,
    isRead: true,
  },
  {
    id: 2,
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    price: 40000,
    isRead: false,
  },
];

// 1. CREATE - Kitob qo'shish
function addBook(title, author, price) {
  let id = books.length + 1;

  let newBook = {
    id: id,
    title: title,
    author: author,
    price: price,
    isRead: false,
  };

  books.push(newBook);
}
addBook("Mehrobdan chayon", "Abdulla Qahhor", 45000);

// 2. READ - Kitoblarni ko'rsatish
function showBooks() {
  console.log(books);
}
showBooks();

// 3. UPDATE - O'qilgan/o'qilmagan holatini o'zgartirish
function toggleReadStatus(id) {
  let book = books.find((item) => item.id === id);

  if (book) {
    book.isRead = !book.isRead;
  }
}
toggleReadStatus(2);

// 4. DELETE - Kitobni o'chirish
function deleteBook(id) {
  books = books.filter((item) => item.id !== id);
}
deleteBook(2);
console.log(books);
