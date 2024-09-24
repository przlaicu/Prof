// Functional component for Book
// Napravite komponentu (Book) koja će prikazati knjigu To Kill a Mockingbird by Harper Lee
const Book = () => {
  return (
    <div className='book'>
      <h3>To Kill a Mockingbird</h3>
      <p>by Harper Lee</p>
    </div>
  );
};

// Class component for BookList
// Napravite komponentu (BookList) koja će prikazati prethodnu komponentu 3 puta (3 knjige - nebitno što su iste)
class BookList extends React.Component {
  render() {
    return (
      <div className='book-list'>
        <Book />
        <Book />
        <Book />
      </div>
    );
  }
}

// Functional component for Library
// Napravite komponentu "My Book Library" koja će imati naslov "My Book Library" i prikazati "BookList" komponentu
const Library = () => {
  return (
    <div className='library'>
      <h1>My Book Library</h1>
      <BookList />
    </div>
  );
};

// Main App component
// Napravite komponentu (Component) koja će prikazati komponentu "Library" koja će biti unutar App komponente
export default function Component() {
  return (
    <div className='app'>
      <Library />
    </div>
  );
}
