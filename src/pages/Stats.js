import React from 'react';
import useBookStats from '../hooks/useBookStats';

const Stats = () => {
  const { total, owned, reading, wishlist } = useBookStats();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Statistik Buku</h1>
      <p>Total Buku: {total}</p>
      <p>Dimiliki: {owned}</p>
      <p>Sedang Dibaca: {reading}</p>
      <p>Ingin Dibeli: {wishlist}</p>
    </div>
  );
};

export default Stats;
