import { onNavigate } from '../main.js';

export const Welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.setAttribute('class', 'sectionOfWelcome');

  // Header of Welcome
  const header = document.createElement('header');
  header.classList.add('header');

  const imageLogo = document.createElement('img');
  imageLogo.setAttribute('src', './image/logotaco.png');
  imageLogo.setAttribute('class', 'imageLogo');
  imageLogo.setAttribute('alt', 'Imagen de un taco');

  header.append(imageLogo);

  //  Main of Welcome
  const mainWelcome = document.createElement('main');
  mainWelcome.setAttribute('class', 'mainWelcome');

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = '¿Buscas los mejores lugares de la ciudad para comer deliciosos tacos? Pues aquí encontrarás recomendaciones de lugares magníficos y podrás compartir tus tips para poder convertirte en un taquero profesional de “La calle a tu cocina”.';

  const buttonSignWithGoogle = document.createElement('button');
  buttonSignWithGoogle.classList.add('buttonSignWithGoogle');

  const orSelect = document.createElement('img');
  orSelect.setAttribute('src', './image/or.png');
  orSelect.setAttribute('class', 'orSelect');
  orSelect.setAttribute('alt', 'or');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.classList.add('buttonLogin');

  const ask = document.createElement('p');
  ask.classList.add('ask');
  ask.textContent = '¿No tienes cuenta?';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Regístrate';
  buttonRegister.classList = 'buttonRegister';

  mainWelcome.append(description, buttonSignWithGoogle, orSelect, buttonLogin, ask, buttonRegister);

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  sectionWelcome.append(header, mainWelcome);

  return sectionWelcome;
};
