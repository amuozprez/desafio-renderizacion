import React, { useState } from 'react';
import { BaseColaboradores } from './utils/BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filteredColaboradores, setFilteredColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    const nuevosColaboradores = [...colaboradores, nuevoColaborador];
    setColaboradores(nuevosColaboradores);
    setFilteredColaboradores(nuevosColaboradores);
    setAlertMessage('Colaborador agregado exitosamente');
    setAlertType('success');
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setFilteredColaboradores(nuevosColaboradores);
    setAlertMessage('Colaborador eliminado exitosamente');
    setAlertType('success');
  };

  const buscarColaboradores = (searchTerm) => {
    if (!searchTerm) {
      setFilteredColaboradores(colaboradores);
    } else {
      const resultados = colaboradores.filter(colaborador =>
        Object.values(colaborador).some(value =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredColaboradores(resultados);
    }
  };

  return (
    <div className="project container mt-5">
      <div className="row">
        <div className="list col-md-8 text-center">
          <h1 className="mb-4">Lista de Colaboradores</h1>
          <Buscador buscarColaboradores={buscarColaboradores} />
          <Alert message={alertMessage} type={alertType} />
          <Listado colaboradores={filteredColaboradores} eliminarColaborador={eliminarColaborador} />
        </div>
        <div className="form col-md-4">
          <h2 className="text-center mt-4">Agregar Colaborador</h2>
          <Formulario agregarColaborador={agregarColaborador} setAlertMessage={setAlertMessage} setAlertType={setAlertType} />
        </div>
      </div>
    </div>
  );
};

export default App;
