class Book {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

abstract class Aggregate {
  abstract iterator();
}

class BookShelf extends Aggregate {
  books: Book[];
  last: number;
  constructor() {
    super();
    this.books = [];
    this.last = 0;
  }

  getBookAt(index: number) {
    return this.books[index];
  }

  appendBook(book: Book) {
    this.books[this.last] = book;
    this.last++;
  }

  getLength() {
    return this.last;
  }

  iterator() {
    return new BookShelfIterator(this);
  }
}

interface IteratorA {
  hasNext(): boolean;
  next();
}

class BookShelfIterator implements IteratorA {
  bookShelf: BookShelf;
  index: number;
  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.bookShelf.getLength();
  }

  next() {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}

function main() {
  const bookShelf = new BookShelf();
  bookShelf.appendBook(new Book("Around the World in 80 Days"));
  bookShelf.appendBook(new Book("Bible"));
  bookShelf.appendBook(new Book("Cinderella"));
  bookShelf.appendBook(new Book("Daddy-Long-Legs"));
  let it = bookShelf.iterator();
  while (it.hasNext()) {
    let book = it.next();
    console.log(book.getName());
  }
}

main();
