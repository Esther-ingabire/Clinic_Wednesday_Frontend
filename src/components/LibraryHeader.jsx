import { Link } from 'react-router'
// import LibraryButton from './LibraryButton'

function LibraryHeader() {
  // const libraryHeader = "LIBRARY MANAGEMENT SYSTEM";

  // const books = [
  //   { code: "B001", title: "The Great Gatsby", price: 10.99 },
  //   { code: "B002", title: "To Kill a Mockingbird", price: 12.99 },
  //   { code: "B003", title: "1984", price: 9.99 },
  //   { code: "B004", title: "Pride and Prejudice", price: 11.99 },
  // ];

  // Add up all book prices
  // const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  return (
    <div>
      {/*
      <div>
        <h1>{libraryHeader}</h1>
      </div>
      <div><p>This is the library management system.</p></div>
      <div><h2>The list of available books</h2></div>
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.code}>
              {book.code} - {book.title} - ${book.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div>
          The total price for {books.length} books is ${totalPrice.toFixed(2)}
        </div>
      </div>
      <LibraryButton />
      */}

      <nav>
        <Link to="/main">Home</Link>{" | "}
        <Link to="/">Login</Link>{" | "}
        <Link to="/office">Office</Link>
      </nav>
    </div>
  )
}

export default LibraryHeader
