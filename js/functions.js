const regEx = {
  alpha  : /^[a-zA-Z áéíóúñÑâêîôû]*$/,
  numeric: /^[0-9]+$/,
  email  : /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
};

const app = Vue.createApp({
  data() {
    return {
      nombre         : '',
      email          : '',
      consulta       : '',
      nombreError    : '',
      emailError     : '',
      consultaError  : '',
      generalError   : '',
      consultaEnviada: false,
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
    validar() {
      if(this.nombre.trim() != '' && this.email.trim() != '' && this.consulta.trim() != '') {
        if(this.validarEmail() && this.validarNombre()) {
          this.generalError = '';
          return true;
        } else {
          return false;
        }
      } else {
        this.generalError = 'Todos los campos son obligatorios.';
        return false;
      }
    },
    enviar() {
      if(this.validar() && !this.consultaEnviada) {
        this.consultaEnviada = true;
      }
    }
  }
});

app.mount('#app');
