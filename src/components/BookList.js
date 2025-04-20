import React, { useState } from 'react';
import { useBooks } from '../context/BookContext';
import BookForm from './BookForm';

const BookList = ({ searchTerm, filter }) => {
  const { books, deleteBook, updateBook } = useBooks();
  const [editingBook, setEditingBook] = useState(null);

  const filteredBooks = books.filter(
    (b) =>
      (!filter || filter === 'Semua' || b.status === filter) &&
      (b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          style={{
            border: '1px solid #fff',
            margin: '10px 0',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#0f1f2e',
          }}
        >
          {editingBook?.id === book.id ? (
            // TAMPILAN FORM EDIT
            <div>
              <h3 style={{ color: '#48c0f7' }}>Edit Buku</h3>
              <BookForm
                initialData={book}
                onSubmit={(updated) => {
                  updateBook(updated);
                  setEditingBook(null); // Kembali ke tampilan list setelah submit
                }}
              />
              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setEditingBook(null)}
                  style={{
                    backgroundColor: '#1d3557',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Yakin ingin menghapus buku ini?')) {
                      deleteBook(book.id);
                    }
                  }}
                  style={{
                    backgroundColor: '#e63946',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          ) : (
            // TAMPILAN LIST VIEW
            <>
              <h3 style={{ color: '#48c0f7' }}>{book.title}</h3>
              <p style={{ color: '#fff' }}>{book.author}</p>
              <p style={{ color: '#ccc' }}>Status: {book.status}</p>
              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setEditingBook(book)}
                  style={{
                    backgroundColor: '#1d3557',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Edit Buku
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Yakin ingin menghapus buku ini?')) {
                      deleteBook(book.id);
                    }
                  }}
                  style={{
                    backgroundColor: '#e63946',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Hapus
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
