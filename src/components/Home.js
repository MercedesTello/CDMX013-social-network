import { onNavigate } from '../main.js';
import { logOut } from '../lib/auth.js';
import { save, data } from '../lib/store.js';

export const Home = () => {
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('class', 'sectionHome');

  // Header of register
  const header = document.createElement('header');
  header.classList.add('header');

  const imageTaco = document.createElement('img');
  imageTaco.setAttribute('src', './img/logotaco.png');
  imageTaco.setAttribute('class', 'imageLogo');
  imageTaco.setAttribute('alt', 'Imagen de un taco');

  header.append(imageTaco);

  // main home
  const mainHome = document.createElement('main');
  mainHome.classList.add('mainHome');

  const post = document.createElement('textarea');
  post.classList.add('post');
  post.placeholder = '¿Tienes alguna recomendación?';

  const publications = document.createElement('div');
  publications.classList.add('post-container');

  const read = document.createElement('div');
  read.classList.add('container-post');
  read.type = 'p';

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('container-buttons');

  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('edit');

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('delete');
  buttonDelete.type = 'image';

  const tacoLike = document.createElement('button');
  tacoLike.classList.add('tacoLike');

  buttonDiv.append(tacoLike, buttonEdit, buttonDelete);

  publications.append(read, buttonDiv);

  const upLoadPost = document.createElement('button');
  upLoadPost.classList.add('upLoadPost');
  upLoadPost.type = 'submit';

  // crear una variable(data) que contenga toda la info de tu colección post de firebase con snapshot
  // crear función que recorra el array data y que muestre el post, aquí traigo el div de
  upLoadPost.addEventListener('click', async () => {
    save({ post: post.value }).then(() => {
      post.value = '';
    })
      .catch((error) => {
        console.log(error);
      });

    const querySnapshot = await data();

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      read.append(task.post);
    });
  });

  const buttonLogOut = document.createElement('button');
  buttonLogOut.classList.add('buttonLogOut');

  buttonLogOut.addEventListener('click', () => {
    logOut().then(() => {
      onNavigate('/');
      // Sign-out successful.
    })
      .catch((error) => {
      // An error happened.
      });
  });

  mainHome.append(buttonLogOut, post, upLoadPost, publications);

  sectionHome.append(header, mainHome);

  return sectionHome;
};
