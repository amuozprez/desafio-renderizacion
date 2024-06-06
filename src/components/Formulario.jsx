import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ agregarColaborador, setAlertMessage, setAlertType }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && correo && edad && cargo && telefono) {
      if (Number(edad) < 0) {
        setAlertMessage('La edad no puede ser un número negativo');
        setAlertType('danger');
        return;
      }
      const nuevoColaborador = {
        id: Date.now().toString(),
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };
      agregarColaborador(nuevoColaborador);
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
      setAlertMessage('Colaborador agregado exitosamente');
      setAlertType('success');
    } else {
      setAlertMessage('Todos los campos son obligatorios');
      setAlertType('danger');
    }
  };

  const handleEdadChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setEdad(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label htmlFor="nombre">Nombre del colaborador</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Email del colaborador</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad del colaborador</label>
        <input
          type="number"
          className="form-control"
          id="edad"
          value={edad}
          onChange={handleEdadChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cargo">Cargo del colaborador</label>
        <input
          type="text"
          className="form-control"
          id="cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono del colaborador</label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary mt-3">Agregar colaborador</button>
      </div>
    </form>
  );
};

export default Formulario;