let isZoomed = false;

const zoom = () => {
  if (isZoomed) {
    document.querySelector('#body')!.style.justifyContent = 'center';
    document.querySelector('#app')!.style.justifyContent = 'center';
    document.querySelector('#app')!.style.height = '100%';
    document.querySelector('#zoom')!.style.visibility = '';
    document.querySelector('#title')!.style.transform = 'scale(1)';
    document.querySelector('#background')!.style.maxWidth = '100%';
    isZoomed = false;
  } else {
    document.querySelector('#body')!.style.justifyContent = 'flex-start';
    document.querySelector('#app')!.style.justifyContent = 'flex-start';
    document.querySelector('#app')!.style.height = '190%';
    document.querySelector('#zoom')!.style.visibility = 'visible';
    document.querySelector('#title')!.style.transform = 'scale(2.1)';
    document.querySelector('#background')!.style.maxWidth = 'none';
    isZoomed = true;
  }
};

document.querySelector('#zoom')?.addEventListener('click', zoom);

if (document.addEventListener) {
  document.addEventListener(
    'contextmenu',
    (event_) => {
      const zoomElement = document.querySelector('#zoom');
      if (zoomElement) {
        if (globalThis.getComputedStyle(zoomElement).visibility === 'visible') {
          zoom();
        }
        event_.preventDefault();
      }
    },
    false,
  );
} else {
  (document as EventAttachType).attachEvent('oncontextmenu', () => {
    const zoomElement = document.querySelector('#zoom');
    if (
      zoomElement &&
      globalThis.getComputedStyle(zoomElement).visibility === 'visible'
    ) {
      zoom();
    }
  });
}
