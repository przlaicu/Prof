import React, { useState } from 'react';

export default function BookLibrary({ initialBooks }) {
  const [books, setBooks] = useState(initialBooks);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    if (newBookTitle.trim() !== '' && newBookAuthor.trim() !== '') {
      const newBook = {
        id: Date.now(),
        title: newBookTitle,
        author: newBookAuthor,
      };
      setBooks([...books, newBook]);
      setNewBookTitle('');
      setNewBookAuthor('');
    }
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>My Book Library</h1>

      <form onSubmit={addBook} style={{ marginBottom: '20px' }}>
        <input
          type='text'
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
          placeholder='Enter book title'
        />
        <input
          type='text'
          value={newBookAuthor}
          onChange={(e) => setNewBookAuthor(e.target.value)}
          placeholder='Enter book author'
        />
        <button type='submit'>Add Book</button>
      </form>

      <div className='library'>
        {books.map((book) => (
          <div key={book.id} className='book'>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
