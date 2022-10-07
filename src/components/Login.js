import { onNavigate } from '../main.js';
import { logUser } from '../lib/auth.js';

export const Login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('class', 'sectionLogin');

  // Header of register
  const header = document.createElement('header');
  header.classList.add('header');

  const imageLogo = document.createElement('img');
  imageLogo.setAttribute('src', './img/logotaco.png');
  imageLogo.setAttribute('class', 'imageLogo');
  imageLogo.setAttribute('alt', 'Imagen de un taco');

  header.append(imageLogo);

  //  Main of Welcome
  const mainLogin = document.createElement('main');
  mainLogin.setAttribute('class', 'mainRegister');

  const mail = document.createElement('input');
  mail.classList.add('inputReg');
  mail.placeholder = 'Correo electrónico';

  const password = document.createElement('input');
  password.classList.add('inputReg');
  password.placeholder = 'password';
  password.type = 'password';

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonRegister1');
  buttonLogin.textContent = 'Inicia sesión';

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('buttonBack');

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  mainLogin.append(mail, password, buttonLogin, buttonBack);

  // footer of Welcome

  const footerWelcome = document.createElement('footer');
  footerWelcome.classList.add('footer');
  footerWelcome.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies';

  sectionLogin.append(header, mainLogin, footerWelcome);

  buttonLogin.addEventListener('click', () => {
    logUser(mail.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user; /* accede al objeto local storage actual y agrega un item al mismo */

        onNavigate('/home');
      })
      .catch((error) => {
        alert('correo electrónico no valido');
        /* console.error(error.message); */
      });
  });

  return sectionLogin;
};
