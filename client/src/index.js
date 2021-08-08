import k from './init.js';
import main from './scenes/main.js';
import win from './scenes/win.js';

document.getElementById('zoom').addEventListener('click', function () {
  if (document.getElementById('app').style.height === '100%') {
    document.getElementById('app').style.height = '190%';
  } else {
    document.getElementById('app').style.height = '100%';
  }
});

k.scene('main', main);
k.scene('win', win);
k.start('main');
