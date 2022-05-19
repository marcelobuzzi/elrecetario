const regEx = {
  alpha  : /^[a-zA-Z áéíóúñÑâêîôû]*$/,
  numeric: /^[0-9]+$/,
  email  : /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
};

const app = Vue.createApp({
  data() {
    return {
      nombre       : '',
      email        : '',
      consulta     : '',
      nombreError  : '',
      emailError   : '',
      consultaError: '',
    }
  },
  methods: {
    validarNombre() {
      if(!regEx.alpha.test(this.nombre)) {
        this.nombreError = 'El nombre no es válido, solo letras.';
        return false;
      } else {
        this.nombreError = '';
        return true;
      };
    },
    validarEmail() {
      if(!regEx.email.test(this.email)) {
        this.emailError = 'El email no es válido.';
        return false;
      } else {
        this.emailError = '';
        return true;
      };
    },
    validarConsulta() {
      if(this.consulta.trim() == '') {
        this.consultaError = 'La consulta no puede estar vacía.';
        return false;
      } else {
        this.consultaError = '';
        return true;
      };
    },
    validar() {
      if(this.nombre.trim() != '' && this.email.trim() != '' && this.validarConsulta()) {
        if(this.validarEmail() && this.validarNombre()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
});

app.mount('#app');

function validarCampos(e, form) {
  e.preventDefault();

  const regEx = {
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
