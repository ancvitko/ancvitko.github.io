// Popup effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add("show");
      } else {
          entry.target.classList.remove("show");
      }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});


// global tag handles parcel deletion DO NOT REMOVE IT
function goToConverter() {
  window.location.href = 'https://ancvitko.github.io/file-converter';
}





    