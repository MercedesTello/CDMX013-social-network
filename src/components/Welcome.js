import { onNavigate } from '../main.js';

export const Welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.setAttribute('class', 'sectionOfWelcome');

  // Header of Welcome
  const header = document.createElement('header');
  header.classList.add('header');

  const titleOfHeader = document.createElement('p');
  titleOfHeader.textContent = 'Taquiero Much';
  
  const figureTaco = document.createElement('figure');
  figureTaco.classList = 'figureTaco';
  const imageTaco = document.createElement('img');
  imageTaco.setAttribute('src', './image/taquito.png');
  imageTaco.setAttribute('class', 'imageTaco');
  imageTaco.setAttribute('alt', 'Imagen de un taco');
  figureTaco.appendChild(imageTaco);

  const figureHeart = document.createElement('figure');
  figureHeart.classList = 'figureHeart';
  const imageHeart = document.createElement('img');
  imageHeart.setAttribute('src', './image/heart.png');
  imageHeart.setAttribute('class', 'imageHeart');
  imageHeart.setAttribute('alt', 'Imagen de un corazón');
  figureHeart.appendChild(imageHeart);

  header.append(titleOfHeader, figureTaco, figureHeart);

  //  Main of Welcome
  const mainWelcome = document.createElement('main');
  mainWelcome.setAttribute('class', 'mainWelcome');

  const ask = document.createElement('p');
  ask.classList.add('ask');
  ask.textContent = '¿No tienes cuenta?';
  

  // const buttonSignWithGoogle = document.createElement('button');
  // buttonSignWithGoogle.textContent = 'Iniciar sesión con Google';

  // const buttonLogin = document.createElement('button');
  //  buttonLogin.textContent = 'Iniciar Sesión';

  // buttonLogin.addEventListener('click', () => {
  //   onNavigate('/login');
  // });

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Regístrate';
  buttonRegister.classList = 'buttonRegister';

  mainWelcome.append(ask, buttonRegister);

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  // footer of Welcome
  const footerWelcome = document.createElement('footer');
  footerWelcome.classList.add('footer');
  footerWelcome.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookie';
  
  

  sectionWelcome.append(header, mainWelcome, footerWelcome);

  return sectionWelcome;
};
