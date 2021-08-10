let isZoomed = false;

const zoom = () => {
  if (!isZoomed) {
    document.getElementById('body').style.justifyContent = 'flex-start';
    document.getElementById('app').style.justifyContent = 'flex-start';
    document.getElementById('app').style.height = '190%';
    document.getElementById('zoom').style.visibility = 'visible';
    document.getElementById('title').style.transform = 'scale(2.1)';
    document.getElementById('background').style.maxWidth = 'none';
    isZoomed = true;
  } else {
    document.getElementById('body').style.justifyContent = 'center';
    document.getElementById('app').style.justifyContent = 'center';
    document.getElementById('app').style.height = '100%';
    document.getElementById('zoom').style.visibility = '';
    document.getElementById('title').style.transform = 'scale(1)';
    document.getElementById('background').style.maxWidth = '100%';
    isZoomed = false;
  }
};

document.getElementById('zoom').addEventListener('click', zoom);

if (document.addEventListener) {
  document.addEventListener(
    'contextmenu',
    function (e) {
      zoom();
      e.preventDefault();
    },
    false,
  );
} else {
  document.attachEvent('oncontextmenu', function () {
    zoom();
    window.event.returnValue = false;
  });
}
