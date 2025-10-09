function openCertificateModal(certificateId) {
   const modal = document.getElementById('certificate-modal');
   const modalImage = document.getElementById('certificate-modal-image');
   let sourceImage;

   if (certificateId === 'certificate1') {
      sourceImage = document.getElementById('certificate-image-1');
   } else if (certificateId === 'certificate2') {
      sourceImage = document.getElementById('certificate-image-2');
   } else {
      sourceImage = document.getElementsByClassName('zoomable-img')[0];
   }

   if (sourceImage) {
      modalImage.src = sourceImage.src;
   }

   modal.classList.add('active');

   document.body.style.overflow = 'hidden';

   if (typeof feather !== 'undefined') {
      feather.replace();
   }
}

function closeCertificateModal() {
   const modal = document.getElementById('certificate-modal');

   modal.classList.remove('active');

   document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
   const modal = document.getElementById('certificate-modal');

   modal.addEventListener('click', function (e) {
      if (e.target === modal) {
         closeCertificateModal();
      }
   });

   document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
         closeCertificateModal();
      }
   });
});

export { openCertificateModal, closeCertificateModal };
