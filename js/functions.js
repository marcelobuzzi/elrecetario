

function validarCampos(e, form) {
  e.preventDefault();

  const regEx         = {
    alpha  : /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    numeric: /^[0-9]+$/,
    email  : /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
  }

  let valido          = true;
  let frmData         = new FormData(form);
  let elementNombre   = document.querySelector('div[data-error = "nombre"]');
  let elementEmail    = document.querySelector('div[data-error = "email"]');
  let elementConsulta = document.querySelector('div[data-error = "consulta"]');
  let contacto        = {
    nombre  : frmData.get('nombre'),
    email   : frmData.get('email'),
    consulta: frmData.get('consulta'),
  }

  if(contacto.nombre.trim() != '') {
    elementNombre.style.display = 'none';
    if(!regEx.alpha.test(contacto.nombre)) {
      elementNombre.style.display = 'flex';
      elementNombre.textContent   = 'El nombre no es válido, solo letras.';
    }
  } else {
    elementNombre.style.display = 'flex';
    elementNombre.textContent   = 'El nombre no puede estar vacío.';
  }

  if(contacto.email != '') {
    elementEmail.style.display = 'none';
    if(!regEx.email.test(contacto.email)) {
      elementEmail.style.display = 'flex';
      elementEmail.textContent   = 'La dirección ingresada no es un email válido.';
    }
  } else {
    elementEmail.style.display = 'flex';
    elementEmail.textContent   = 'El nombre no puede estar vacío.';
  }

  if(contacto.consulta.trim() == '') {
    elementConsulta.style.display = 'flex';
    elementConsulta.textContent   = 'La consulta no puede estar vacía.';
  } else {
    elementConsulta.style.display = 'none';
  }
}
