import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonStartSession = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');

  buttonStartSession.textContent = 'Iniciar Sesión';
  title.textContent = 'Inicia Sesión';

  buttonStartSession.addEventListener('click', () => {
    onNavigate('/wall');
  });

  div.append(title, inputEmail, inputPassword, buttonStartSession);

  return div;
};
