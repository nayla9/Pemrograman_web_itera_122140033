import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import BookFilter from '../components/BookFilter';
import { useBooks } from '../context/BookContext';

const Home = () => {
  const { addBook } = useBooks();
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manajemen Buku Pribadi</h1>
      <BookForm onSubmit={addBook} />
      <BookFilter
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <BookList filter={filter} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;