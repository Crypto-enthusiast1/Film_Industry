export function disableGoogleTranslateOverlay() {
   const tooltipId = 'goog-gt-tt';

   function isGoogleTranslateClass(className) {
      return (
         typeof className === 'string' &&
         className.includes('VIpgJd') &&
         className.includes('fmcmS')
      );
   }

   function cleanGoogleTranslateArtifacts() {
      const tooltip = document.getElementById(tooltipId);
      if (tooltip) tooltip.remove();

      document.querySelectorAll('*').forEach(el => {
         [...el.classList].forEach(cls => {
            if (isGoogleTranslateClass(cls)) {
               el.classList.remove(cls);
            }
         });
      });
   }

   cleanGoogleTranslateArtifacts();

   const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
         if (mutation.type === 'childList' || mutation.type === 'attributes') {
            cleanGoogleTranslateArtifacts();
         }
      }
   });

   observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id']
   });
}

window.addEventListener('DOMContentLoaded', disableGoogleTranslateOverlay);