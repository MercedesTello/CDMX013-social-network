import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonStartSession = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  //const inputConfirmPassword = document.createElement('input');

  title.textContent = 'Taquiero Much';
  buttonStartSession.textContent = 'Regístrate';
  buttonBack.textContent = 'Regresar';
  title.textContent = 'Crea una cuenta';

  buttonStartSession.addEventListener('click', () => {
    onNavigate('/wall');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPassword, buttonStartSession, buttonBack);

  return div;
};
