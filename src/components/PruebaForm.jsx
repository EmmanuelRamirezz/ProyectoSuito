import React, { useState } from 'react';

function PruebaForm (){
  //Validacion del formulario

  //Declaracion de los estados de error  
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  // Función para manejar el envío del formulario
  function handleSubmit(event){
    event.preventDefault();
    
    // Validar campos antes del envío
    if (!formulario.nombre) {
      setErrores({ ...errores, nombre: 'El nombre es requerido' });
      return;
    }

    if (!formulario.email) {
      setErrores({ ...errores, email: 'El email es requerido' });
      return;
    }

    if (!formulario.mensaje) {
      setErrores({ ...errores, mensaje: 'El mensaje es requerido' });
      return;
    }

    // Si todos los campos están completos, puedes continuar con el envío del formulario
    // Aquí puedes realizar la lógica para enviar los datos a tu backend o hacer cualquier otra acción necesaria

    // Reiniciar el formulario y los errores después del envío exitoso
    setFormulario({ nombre: '', email: '', mensaje: '' });
    setErrores({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p>{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
        {errores.email && <p>{errores.email}</p>}
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formulario.mensaje}
          onChange={handleChange}
        />
        {errores.mensaje && <p>{errores.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default PruebaForm;
