function initGoogleTranslate(containerId) {
   new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,uk,ru,fr,nl,de',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
   }, containerId);

   blockHashLinksInTranslate(containerId);
}

function blockHashLinksInTranslate(containerId) {
   const container = document.getElementById(containerId);
   if (!container) return;

   container.addEventListener('click', function (e) {
      const link = e.target.closest('a[href="#"]');
      if (link) {
         e.preventDefault();
      }
   });
}

function initResponsiveGoogleTranslate() {
   const isMobile = window.matchMedia('(max-width: 1023px)').matches;

   const desktopContainer = document.getElementById('google_translate_element');
   const mobileContainer = document.getElementById('google_translate_element_mobile');

   if (desktopContainer) desktopContainer.innerHTML = '';
   if (mobileContainer) mobileContainer.innerHTML = '';

   if (isMobile) {
      initGoogleTranslate('google_translate_element_mobile');
   } else {
      initGoogleTranslate('google_translate_element');
   }
}

function googleTranslateElementInit() {
   initResponsiveGoogleTranslate();
}

window.addEventListener('resize', () => {
   clearTimeout(window._gt_resize_timer);
   window._gt_resize_timer = setTimeout(initResponsiveGoogleTranslate, 300);
});

window.googleTranslateElementInit = googleTranslateElementInit;
window.initGoogleTranslate = initGoogleTranslate;

export { initGoogleTranslate, googleTranslateElementInit };
