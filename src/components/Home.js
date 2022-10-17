import { onNavigate } from '../main.js';
import { logOut, auth } from '../lib/auth.js';
import {
  save, onGetPost, data, deletePost, getPost, updatePost,
} from '../lib/store.js';

let editStatus = false;

export const Home = () => {
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('class', 'sectionHome');

  // Header of home
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

  const upLoadPost = document.createElement('button');
  upLoadPost.classList.add('upLoadPost');
  upLoadPost.type = 'submit';

  upLoadPost.addEventListener('click', () => {
    if (!editStatus) {
      save({
        post: post.value,
        date: new Date(),
        author: auth.currentUser.uid,

      }).then(() => {
        post.value = '';
      })
        .catch((error) => {
          console.log(error);
        });
    } else {
      updatePost(post.id, { post: post.value }).then((result) => {
      }).catch((error) => {
        console.log(error);
      });
      post.value = '';
    }
  }); // aquí cierra el enviar
  // div de publicaciones

  const newPost = (cont, item) => {
    const publications = document.createElement('div');
    publications.classList.add('post-container');

    const read = document.createElement('div');
    read.classList.add('container-post');
    read.type = 'p';

    const userComment = document.createElement('h3');
    userComment.classList.add('user');

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('container-buttons');

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.dataset.id = item;

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.dataset.id = item;

    const tacoLike = document.createElement('button');
    tacoLike.classList.add('tacoLike');

    buttonDelete.addEventListener('click', (e) => {
      deletePost(e.target.dataset.id);
    });

    buttonEdit.addEventListener('click', async (e) => {
      const doc = await getPost(e.target.dataset.id);
      const task = doc.data();
      post.value = task.post;
      post.id = doc.id;
      editStatus = true; // para saber si está guardando o editando
    });

    buttonDiv.append(tacoLike, buttonEdit, buttonDelete);

    publications.append(read, buttonDiv);
    read.append(userComment, cont.post);
    mainHome.append(publications);
  };

  onGetPost((querySnapshot) => {
    // tenemos que vaciar el contenedor de los posts
    document.querySelectorAll('.post-container').forEach((postContainer) => {
      postContainer.remove();
    });

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      const postContent = task.post;

      const docId = doc.id;

      newPost(task, docId);
    });
  });

  const buttonLogOut = document.createElement('button');
  buttonLogOut.classList.add('buttonLogOut');

  buttonLogOut.addEventListener('click', () => {
    logOut().then(() => {
      onNavigate('/');
      // Sign-out successful.
    })
      .catch(() => {
        // An error happened.
      });
  });

  mainHome.append(buttonLogOut, post, upLoadPost);

  sectionHome.append(header, mainHome);

  return sectionHome;
};
