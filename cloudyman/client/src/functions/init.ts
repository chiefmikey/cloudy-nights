import kaboom from 'kaboom';

const canvasElement = document.querySelector('#game')!;

export const K = kaboom({
  background: [0, 0, 0, 1],
  canvas: canvasElement,
  crisp: true,
  debug: false,
  global: false,
  height: 205,
  plugins: [],
  scale: 1,
  stretch: false,
  width: 205,
});

const assetLoader = async () => {
  try {
    if (K) {
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
    }
  } catch (error) {
    console.error(error);
  }
};

export const load = assetLoader();
