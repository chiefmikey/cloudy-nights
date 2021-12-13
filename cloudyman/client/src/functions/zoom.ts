let isZoomed = false;

const zoom = () => {
  if (!isZoomed) {
    (document.querySelector('#body') as HTMLElement).style.justifyContent =
      'flex-start';
    (document.querySelector('#app') as HTMLElement).style.justifyContent =
      'flex-start';
    (document.querySelector('#app') as HTMLElement).style.height = '190%';
    (document.querySelector('#zoom') as HTMLElement).style.visibility =
      'visible';
    (document.querySelector('#title') as HTMLElement).style.transform =
      'scale(2.1)';
    (document.querySelector('#background') as HTMLElement).style.maxWidth =
      'none';
    isZoomed = true;
  } else {
    (document.querySelector('#body') as HTMLElement).style.justifyContent =
      'center';
    (document.querySelector('#app') as HTMLElement).style.justifyContent =
      'center';
    (document.querySelector('#app') as HTMLElement).style.height = '100%';
    (document.querySelector('#zoom') as HTMLElement).style.visibility = '';
    (document.querySelector('#title') as HTMLElement).style.transform =
      'scale(1)';
    (document.querySelector('#background') as HTMLElement).style.maxWidth =
      '100%';
    isZoomed = false;
  }
};

document.querySelector('#zoom').addEventListener('click', zoom);

if (document.addEventListener) {
  document.addEventListener(
    'contextmenu',
    (event_) => {
      if (
        window.getComputedStyle(document.querySelector('#zoom')).visibility ===
        'visible'
      ) {
        zoom();
      }
      event_.preventDefault();
    },
    false,
  );
} else {
  document.attachEvent('oncontextmenu', () => {
    if (
      window.getComputedStyle(document.querySelector('#zoom')).visibility ===
      'visible'
    ) {
      zoom();
    }
    window.event.preventDefault();
  });
}
