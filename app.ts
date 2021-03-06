import { Category } from './enums';
import { Author, Book, Logger, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { calculateLateFee as calcFee, maxBooksAllowed, purge } from './lib/utilityFunctions';
import refBook from './encyclopedia';
import Shelf from './shelf';

function getAllBooks(): Book[] {
  const books: Book[] = [
    {
      id: 1,
      title: 'Ulysses',
      author: 'James Joyce',
      available: true,
      category: Category.Fiction
    },
    {
      id: 2,
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
      category: Category.Fiction
    },
    {
      id: 3,
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Anglou',
      available: true,
      category: Category.Poetry
    },
    {
      id: 4,
      title: 'Moby Dick', 
      author: 'Herman Melville', 
      available: true,
      category: Category.Fiction
    }
  ];

  return books;
}

function logFirstAvailable(books: Book[] = getAllBooks()): void {
  let firstAvailable: string = '';
  let numberOfBooks: number = books.length;

  for (const currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available: ${firstAvailable}`);
}

function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log(`Getting books in category: ${Category[categoryFilter]}`);
    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function logBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(` - ${title}`);
    }
}

function getBookById(id: number) {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Creating customer ${name}`);
    if (age) {
        console.log(`- Age: ${age}`);
    }
    if (city) {
        console.log(`- City: ${city}`);
    }
}

function checkoutBooks(name: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${name}`);
    const booksCheckedout: string[] = [];
    for (const id of bookIDs) {
        const book = getBookById(id);
        if (book.available) {
            booksCheckedout.push(book.title);
        } else {
            console.log(`${book.title} is unavailable`);
        }
    }
    return booksCheckedout;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    const foundTitles: string[] = [];
    const allBooks = getAllBooks();
    if (typeof bookProperty == 'string') {
        console.log(`Retrieving books by ${bookProperty}`);
        for (const book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    if (typeof bookProperty == 'boolean') {
        let flag: string = '';
        if (!bookProperty) {
            flag = ' not';
        }
        console.log(`Retrieving books that are${flag} available`);
        for (const book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

// *********************************************************************

let inventory: Array<Book> = [
  {
    id: 10,
    title: 'The C Programming Language',
    author: 'K & R',
    available: true,
    category: Category.Software
  },
  {
    id: 11,
    title: 'Code Complete',
    author: 'Steve McConnell',
    available: true,
    category: Category.Software
  },
  {
    id: 12,
    title: '8-bit Graphics with Cobol',
    author: 'A. B.',
    available: true,
    category: Category.Software
  },
  {
    id: 13,
    title: 'Cool autoexec.bat Scripts!',
    author: 'C. D.',
    available: true,
    category: Category.Software
  }
];

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();
console.log(`First book on the book shelf: ${firstBook.title}`);
let softwareBook: Book = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

let magazines: Array<Magazine> = [
    {
      title: 'Programming Language Monthly',
      publisher: 'Code Mags'
    },
    {
        title: 'Literary Fiction Quarterly',
        publisher: 'College Press'
    },
    {
        title: 'Five Points',
        publisher: 'GSU'
    },
];
let magazineRack: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineRack.add(magazine));
let firstMagazine: Magazine = magazineRack.getFirst();
console.log(`First magazine on the magazine rack: ${firstMagazine.title}`);
magazineRack.printTitles();



// let numbers: Array<number> = [3, 7, 12, 16];
// let numberShelf: Shelf<number> = new Shelf<number>();
// numbers.forEach(num => numberShelf.add(num));
// let firstNumber: number = numberShelf.getFirst();
// console.log(`First number on the number rack: ${firstNumber}`);



// let purged: Array<Book> = purge<Book>(inventory);
// purged.forEach(book => console.log(book.title));

// let reference = new refBook('Fact Book', 2016, 1);
// reference.printCitation();

// let fee = calcFee(5);
// let max = maxBooksAllowed(4);

// let Newspaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`);
//     }
// }
// let myPaper = new Newspaper('The Gazzette', 2016);
// myPaper.printCitation();

// class Novel extends class { title: string } {
//     mainCharacter: string;
// }
// let favNovel = new Novel();
// favNovel.

// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();

// refBook = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printItem();

// let ref: ReferenceItem = new ReferenceItem('Facts and Figures', 2018);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');
 
// let myBook: Book = {
//   id: 5,
//   title: 'Pride and Prejudice',
//   author: 'Jane Austen',
//   available: true,
//   category: Category.Fiction,
//   pages: 250,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };

// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log(`Damaged reported: ${damage}`)
// logDamage('coffee stains');

// printBook(myBook);
// myBook.markDamaged('torn pages');

// const booksByAuthor = getTitles('Herman Melville');
// booksByAuthor.forEach(title => console.log(`- ${title}`));

// const booksByAvailable = getTitles(true);
// booksByAvailable.forEach(title => console.log(`- ${title}`));

// const booksByNotAvailable = getTitles(false);
// booksByNotAvailable.forEach(title => console.log(`- ${title}`));

// const thorneBooks: string[] = checkoutBooks('Thorne', 1);
// thorneBooks.forEach(title => console.log(`- ${title}`));

// const brianBooks: string[] = checkoutBooks('Brian', 4, 2, 3);
// brianBooks.forEach(title => console.log(`- ${title}`));

// let poetryBooks = getBookTitlesByCategory(Category.Poetry);
// poetryBooks.forEach(title => console.log(`- ${title}`));

// let fictionBooks = getBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(`- ${title}`));

// createCustomer('Michelle');
// createCustomer('Leigh', 6);
// createCustomer('Marie', 12, 'Atlanta');

// let myID: string = createCustomerID('daniel', 10);
// console.log(myID);

// let x: number;
// x = 5;

// let idGenerator: (chars: string, nums: number) => string;
// idGenerator = createCustomerID;

// myID = idGenerator('daniel', 15);
// console.log(myID);

// idGenerator = (name: string, id: number) => { return `${id}${name}`; };
// myID = idGenerator('daniel', 20);
// console.log(myID);

// const poetryBooks = getBookTitlesByCategory(Category.Poetry);
// logBookTitles(poetryBooks);

// const fictionBooks = getBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));