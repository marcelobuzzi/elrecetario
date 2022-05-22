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
