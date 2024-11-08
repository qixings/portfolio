let currentCertificate = 1;
let certificates = ["cad.png", "12th.png","cad.png", "12th.png","cad.png", "12th.png"]; // Full paths to certificate images

function openLightbox() {
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showCertificate(n) {
  currentCertificate = n;
  document.getElementById("certificate-image").src = certificates[currentCertificate - 1];
}

function changeCertificate(n) {
  currentCertificate += n;
  if (currentCertificate < 1) {
    currentCertificate = certificates.length;
  } else if (currentCertificate > certificates.length) {
    currentCertificate = 1;
  }
  showCertificate(currentCertificate);
}
