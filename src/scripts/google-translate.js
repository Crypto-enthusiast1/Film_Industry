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

  container.addEventListener('click', function(e) {
    const link = e.target.closest('a[href="#"]');
    if (link) {
      e.preventDefault();
    }
  });
}

function googleTranslateElementInit() {
  initGoogleTranslate('google_translate_element');
  initGoogleTranslate('google_translate_element_mobile');
}

window.googleTranslateElementInit = googleTranslateElementInit;
window.initGoogleTranslate = initGoogleTranslate;

export { initGoogleTranslate, googleTranslateElementInit };
