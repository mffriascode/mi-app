const boton = document.getElementById('boton-de-mensaje')
boton.addEventListener('click', function () {
  const nombre = document.getElementById('nombre')
  const correo = document.getElementById('correo')
  const mensaje = document.getElementById('mensaje')

  if (nombre.value == '' || correo.value == '' || mensaje.value == '') {
    alert('Completar campo')
    return
  }
  const texto = 'soy ' + nombre.value + ' mi correo es ' + correo.value + ' ' + mensaje.value
  alert(texto)
  nombre.value = ''
  correo.value = ''
  mensaje.value = ''
})
const boton2 = document.getElementById('Has-olvidado-la-clave')
boton2.addEventListener('click', function () {
  alert('Clave erronea')
})
