"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookCollection_1 = require("../BookCollection");
const globals_1 = require("@jest/globals");
describe('BookCollection', () => {
    let bookManager;
    const mockBook = { id: 1, title: 'The Imitation Game', author: 'Jane Rollason' };
    const mockBook2 = { id: 2, title: 'Mr. Robot: Red Wheelbarrow', author: 'Sam Esmail' };
    beforeEach(() => {
        bookManager = new BookCollection_1.BookCollection();
    });
    test('adds a new book', () => {
        bookManager.addBook(mockBook);
        expect(bookManager.getAllBooks()).toContainEqual(mockBook);
    });
    test('throws error when adding a book with an existing title and author', () => {
        bookManager.addBook(mockBook);
        expect(() => bookManager.addBook(mockBook)).toThrow("Book already exists in the collection");
    });
    test('removes a book by title', () => {
        bookManager.addBook(mockBook);
        bookManager.removeBookByTitle(mockBook.title);
        expect(() => bookManager.findBookByTitle(mockBook.title)).toThrow("Book not found in the collection");
    });
    test('finds a book by title', () => {
        bookManager.addBook(mockBook);
        expect(bookManager.findBookByTitle(mockBook.title)).toEqual(mockBook);
    });
    test('finds books by author', () => {
        bookManager.addBook(mockBook);
        bookManager.addBook(mockBook2);
        expect(bookManager.findBooksByAuthor('Jane Rollason')).toContainEqual(mockBook);
        expect(bookManager.findBooksByAuthor('Jane Rollason')).toHaveLength(1);
    });
    test('throws error when removing a non-existent book by title', () => {
        expect(() => bookManager.removeBookByTitle('Unknown Title')).toThrow("Book not found in the collection");
    });
});
describe("BookCollection Advanced Price API", () => {
    beforeEach(() => {
        globals_1.jest.mock("../BookPriceService");
    });
    it("Should use Price API", () => {
    });
});
//# sourceMappingURL=test.js.map