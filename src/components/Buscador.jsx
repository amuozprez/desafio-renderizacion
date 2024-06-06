import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buscador = ({ buscarColaboradores }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    buscarColaboradores(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control mt-4"
      placeholder="Busca un colaborador"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Buscador;