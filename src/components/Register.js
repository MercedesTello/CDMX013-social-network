import { onNavigate } from '../main.js';

export const Register = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.setAttribute('class', 'sectionRegister');

  // Header of Welcome
  const header = document.createElement('header');
  header.classList.add('header');

  const imageLogo = document.createElement('img');
  imageLogo.setAttribute('src', './image/logotaco.png');
  imageLogo.setAttribute('class', 'imageLogo');
  imageLogo.setAttribute('alt', 'Imagen de un taco');

  header.append(imageLogo);

  //  Main of Welcome
  const mainRegister = document.createElement('main');
  mainRegister.setAttribute('class', 'mainRegister');

  const createAnAccount = document.createElement('p');
  createAnAccount.classList.add('createAnAccount');
  createAnAccount.textContent = 'Crea una cuenta';

  const mail = document.createElement('input');
  mail.classList.add('mail');
  mail.placeholder = 'Correo electrónico';

  const password = document.createElement('input');
  password.classList.add('password');
  password.placeholder = 'password';

  const buttonRegister1 = document.createElement('button');
  buttonRegister1.classList.add('buttonRegister1');
  buttonRegister1.textContent = 'Regístrate';

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('buttonBack');
  buttonBack.textContent = 'Regresar';

  buttonRegister1.addEventListener('click', () => {
    onNavigate('/wall');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  mainRegister.append(createAnAccount, mail, password, buttonRegister1, buttonBack);

  // footer of Welcome

  const footerWelcome = document.createElement('footer');
  footerWelcome.classList.add('footer');
  footerWelcome.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies';

  sectionRegister.append(header, mainRegister, footerWelcome);

  return sectionRegister;
};
