type Book = {
    id: number;
    title: string;
    author: string;
}

export class BookManager {
    private books: Book[] = [];

    addBook(book: Book): void {
        if (this.books.some(b => b.title === book.title && b.author === book.author)) {
            throw new Error("Book already exists in the collection");
        }
        this.books.push(book);
    }

    removeBookByTitle(title: string): void {
        const index = this.books.findIndex(book => book.title === title);
        if (index === -1) {
            throw new Error("Book not found in the collection");
        }
        this.books.splice(index, 1);
    }

    findBookByTitle(title: string): Book | undefined {
        const foundBook = this.books.find(book => book.title === title);
        if (!foundBook) {
            throw new Error("Book not found in the collection");
        }
        return foundBook;
    }

    findBooksByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }

    getAllBooks(): Book[] {
        return this.books;
    }

    getDistinctAuthors(): string[] {
        return [...new Set(this.books.map(book => book.author))];
    }

    removeBooksByAuthor(author: string): void {
        this.books = this.books.filter(book => book.author !== author);
    }

    updateBookTitle(oldTitle: string, newTitle: string): void {
        const index = this.books.findIndex(book => book.title === oldTitle);
        if (index === -1) {
            throw new Error("Book not found in the collection");
        }
        this.books[index].title = newTitle;
    }
}