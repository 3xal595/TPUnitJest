"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
class BookManager {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        if (this.books.some(b => b.title === book.title && b.author === book.author)) {
            throw new Error("Book already exists in the collection");
        }
        this.books.push(book);
    }
    removeBookByTitle(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index === -1) {
            throw new Error("Book not found in the collection");
        }
        this.books.splice(index, 1);
    }
    findBookByTitle(title) {
        const foundBook = this.books.find(book => book.title === title);
        if (!foundBook) {
            throw new Error("Book not found in the collection");
        }
        return foundBook;
    }
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    getAllBooks() {
        return this.books;
    }
    getDistinctAuthors() {
        return [...new Set(this.books.map(book => book.author))];
    }
    removeBooksByAuthor(author) {
        this.books = this.books.filter(book => book.author !== author);
    }
    updateBookTitle(oldTitle, newTitle) {
        const index = this.books.findIndex(book => book.title === oldTitle);
        if (index === -1) {
            throw new Error("Book not found in the collection");
        }
        this.books[index].title = newTitle;
    }
}
exports.BookManager = BookManager;
//# sourceMappingURL=bookManager.js.map