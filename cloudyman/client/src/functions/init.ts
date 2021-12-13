import kaboom from 'kaboom';

const K = kaboom({
  canvas: document.querySelector('#game'),
  clearColor: [0, 0, 0, 1],
  crisp: true,
  fullscreen: false,
  width: 205,
  height: 205,
  scale: 1,
  debug: false,
  global: false,
  plugins: [],
});

const assetLoader = async () => {
  try {
    K.loadRoot('cloudyman/client/public/');
    await K.loadSprite('ch1', 'assets/sprites/ch1.png');
    await K.loadSprite('ch2', 'assets/sprites/ch2.png');
    await K.loadSprite('cloudyman', 'assets/sprites/cloudyman.png');
    await K.loadSprite('door', 'assets/sprites/door.png');
    await K.loadSprite('guy', 'assets/sprites/guy.png');
    await K.loadSprite('key', 'assets/sprites/key.png');
    await K.loadSprite('steel', 'assets/sprites/steel.png');

    await K.loadSound('coin', 'assets/sounds/coin.mp3');
    await K.loadSound('hit', 'assets/sounds/hit.mp3');
    await K.loadSound('ayy', 'assets/sounds/ayy.mp3');
    await K.loadSound('mmm', 'assets/sounds/mmm.mp3');
    await K.loadSound('haha', 'assets/sounds/haha.mp3');
    await K.loadSound('aaa', 'assets/sounds/aaa.mp3');
    await K.loadSound('priorities', 'assets/sounds/priorities.mp3');
  } catch (error) {
    console.error(error);
  }
};

const load = assetLoader();

export default K;
