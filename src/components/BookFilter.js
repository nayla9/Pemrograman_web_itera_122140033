import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ filter, setFilter, searchTerm, setSearchTerm }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">Semua</option>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <input
        type="text"
        placeholder="Cari buku..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default BookFilter;