(function () {
  'use strict'

  // Obtener todos los formularios a los que queremos aplicar estilos de validación 
  var forms = document.querySelectorAll('.needs-validation')

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  e.stopPropagation()

  if (!form.checkValidity()) {
    form.classList.add('was-validated')
  }

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  if (title === "" || description === "") {
    return
  }

  window.ioAPI.addPanel({ title, description })

  alert('Formulario enviado correctamente')

  form.reset()

  form.classList.remove('was-validated')
})
