function getAllBooks() {
  const books = [
    { 
      title: 'Ulysses',
      author: 'James Joyce',
      available: true,
      category: Category.Fiction
    },
    {
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
      category: Category.Fiction
    },
    {
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Anglou',
      available: true,
      category: Category.Poetry
    },
    {
      title: 'Moby Disk', 
      author: 'Herman Melville', 
      available: true,
      category: Category.Fiction
    }
  ];

  return books;
}

function logFirstAvailable(books: any): void {
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

enum Category { Biography, Poetry, Fiction, History, Children };

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
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

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);


const fictionBooks = getBookTitlesByCategory(Category.Fiction);
logBookTitles(fictionBooks);