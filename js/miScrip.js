
const validarEntrada = (valor, validar) => {
    return validar.test(valor);
  };
  
  const validarTexto = /^[a-zA-Z ]+$/; 
  const validarNombre = (nombre) => {
    return validarEntrada(nombre, validarTexto);
  };
  
  const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const validarCorreoElectronico = (email) => {
    return validarEntrada(email, validarEmail);
  };
  
  const validarNumero = /^[0-9]+$/; 
  const validarnumerodoc = (numero) => {
    return validarEntrada(numero, validarNumero);
  };
  
  const enviarFormulario = (event) => {
    event.preventDefault();
    const nombre = event.target.nombre.value.trim();
    const apellido = event.target.apellido.value.trim();
    const numerodoc = event.target.numerodoc.value.trim();
    const email = event.target.email.value.trim();
    
  
    if (!validarNombre(nombre)) {
      alert("El nombre solo puede contener letras y espacios.");
      return;
    }
  
    if (!validarNombre(apellido)) {
      alert("El apellido solo puede contener letras y espacios.");
      return;
    }
  
    if (!validarCorreoElectronico(email)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }
  
    if (!validarnumerodoc(numerodoc)) {
      alert("El número de documento solo puede contener números.");
      return;
    }
  
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`numerodoc: ${numerodoc}`)
    console.log(`email: ${email}`);
    
  };
  
  

