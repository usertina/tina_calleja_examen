
document.addEventListener("DOMContentLoaded", function() {
  // Manejo del menú de navegación
  document.getElementById('menu-toggle').addEventListener('click', function() {
      document.getElementById('menu').classList.toggle('active');
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          document.getElementById('menu').classList.remove('active');
      }
  });

  // Manejo del formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario y la recarga de la página

      // Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
      const pasword = document.getElementById('pasword').value;
      const acepto = document.getElementById('acepto').checked;

      

      // Crear el objeto con los datos del formulario
      const formData = {
          nombre: nombre,
          email: email,
          mensaje: mensaje,
          acepto: acepto,
          pasword: pasword
      };

      // Enviar los datos a JSON Server usando fetch
      fetch('http://localhost:3000/contactos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Datos guardados:', data);
          alert('Formulario enviado con éxito');
      })
      .catch(error => {
          console.error('Error al guardar los datos:', error);
          alert('Hubo un error al enviar el formulario');
      });
  });
});
 
document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener la fecha actual en el formato deseado (por ejemplo, "20 de mayo de 2024")
    function obtenerFechaActual() {
        const fechaActual = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fechaActual.toLocaleDateString('es-ES', opciones);
    }

    // Función para actualizar dinámicamente el contenido del elemento de fecha
    function actualizarFechaActual() {
        const fechaElemento = document.getElementById('fecha-actual');
        if (fechaElemento) {
            fechaElemento.textContent = obtenerFechaActual();
        }
    }

    // Llamar a la función inicialmente para mostrar la fecha actual
    actualizarFechaActual();

    // Llamar a la función cada segundo para actualizar la fecha en tiempo real
    setInterval(actualizarFechaActual, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    // Comprueba si estamos en la página de "Sillas" mediante la URL o el título de la página
    if (window.location.href.includes("index_silla.html") || document.title.includes("Sillas")) {
      document.body.style.backgroundColor = "lightblue"; // Cambia este color según tu preferencia
    }
    else if (window.location.href.includes("index_mesa.html") || document.title.includes("Mesas")) {
        document.body.style.backgroundColor = "burlywood"; // Cambia este color según tu preferencia
      }
      else if (window.location.href.includes("index_armario.html") || document.title.includes("Armarios")) {
        document.body.style.backgroundColor = "chocolate"; // Cambia este color según tu preferencia
      }
      else if (window.location.href.includes("index_contacto.html") || document.title.includes("Contacto")) {
        document.body.style.backgroundColor = "darkcyan"; // Cambia este color según tu preferencia
      }
    else {
        document.body.style.backgroundColor = "chartreuse";
    }




    
});