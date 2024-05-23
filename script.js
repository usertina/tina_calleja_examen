
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

      // Verificar si el checkbox está marcado
      if (!acepto) {
          alert('Debes aceptar la política de privacidad');
          return;
      }

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
 