function getAllBooks() {
  const books = [
    { 
      title: 'Ulysses',
      author: 'James Joyce',
      available: true },
    {
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false
    },
    {
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Anglou',
      available: true
    },
    {
      title: 'Moby Disk', 
      author: 'Herman Melville', 
      available: true 
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

const allBooks = getAllBooks();
allBooks.push();
logFirstAvailable(allBooks);
