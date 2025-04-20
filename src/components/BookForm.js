import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('Judul dan nama penulis harus diisi!');
      return;
    }
    setError('');

    const newBook = {
      id: initialData?.id || Date.now(), // ✅ Generate ID jika belum ada
      title,
      author,
      status,
    };

    onSubmit(newBook);
    setTitle('');
    setAuthor('');
    setStatus('milik');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">{initialData ? 'Update' : 'Tambah'} Buku</button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default BookForm;
