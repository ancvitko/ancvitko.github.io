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


// Smooth scroll
function initSmoothScroll() {
    new SmoothScroll(document, 120, 10);
  }
  
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target =
        document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body; // cross browser support for document scrolling
  
    var moving = false;
    var pos = target.scrollTop;
    var frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target; // safari is the new IE
  
    target.addEventListener("mousewheel", scrolled, { passive: false });
    target.addEventListener("DOMMouseScroll", scrolled, { passive: false });
  
    function scrolled(e) {
      e.preventDefault(); // disable default scrolling
  
      var delta = normalizeWheelDelta(e);
  
      pos += -delta * speed;
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling
  
      if (!moving) update();
    }
  
    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
        // Opera
        else return -e.detail / 3; // Firefox
      } else return e.wheelDelta / 120; // IE,Safari,Chrome
    }
  
    function update() {
      moving = true;
  
      var delta = (pos - target.scrollTop) / smooth;
  
      target.scrollTop += delta;
  
      if (Math.abs(delta) > 0.5) requestFrame(update);
      else moving = false;
    }
  
    var requestFrame = (function () {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    })();
  }
  
  window.addEventListener("DOMContentLoaded", initSmoothScroll, { passive: true });


// Links
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and sections
    var aboutBtn = document.getElementById("aboutBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var contactBtn = document.getElementById("contactBtn");
    var aboutSection = document.getElementById("about");
    var projectsSection = document.getElementById("projects");
    var footerSection = document.getElementById("footer");

    // Add event listeners to the buttons
    aboutBtn.addEventListener("click", function() {
        scrollToElement(aboutSection);
    });

    projectsBtn.addEventListener("click", function() {
        scrollToElement(projectsSection);
    });

    contactBtn.addEventListener("click", function() {
        scrollToElement(footerSection);
        // Temporary hackfix for the footer not scrolling all the way
        setTimeout(() => {
            scrollToElement(footerSection)
        }, 700);
        
    });

    // Function to scroll to a specific element
    function scrollToElement(element) {
        // Scroll smoothly to the element
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});


    