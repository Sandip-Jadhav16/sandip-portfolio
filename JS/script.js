//----------------------Auto Type JS function---------------------------------------
var typed = new Typed(".auto-type", {
  strings: [
    "Software Developer",
    "Full-stack Developer",
    "front-end developer",
    "back-end developer",
  ],
  typeSpeed: 70,
  backSpeed: 80,
  loop: true,
});
//--------------------About tab button JS function------------------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontaints = document.getElementsByClassName("tab-containts");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontaint of tabcontaints) {
    tabcontaint.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
//----------------------Contact form Validation--------------------------------------------
//function to handle textarea input
const textareas = document.querySelectorAll("textarea");
textareas.forEach((textarea) => {
  textarea.addEventListener("input", () => {
    if (textarea.value !== "") {
      textarea.classList.add("has-content");
    } else {
      textarea.classList.remove("has-content");
    }
  });
});

// Function to handle the email input
const handleEmailInput = () => {
  if (emailInput.value !== "") {
    emailInput.classList.add("has-content");
  } else {
    emailInput.classList.remove("has-content");
  }
};
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", handleEmailInput);
//validation start--
function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (!isValidName(nameInput.value)) {
    alert("Please enter a valid name.");
    return false;
  }

  if (!isValidEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function isValidName(name) {
  // You can add custom validation rules for the name field
  return /^[A-Za-z\s]+$/.test(name);
}

function isValidEmail(email) {
  // You can add custom validation rules for the email field
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// -----------------------------------------Scroll to top button-----------------------------------
(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
// ---------------------------------End of Scroll to top button---------------------------------

// ------------------------------------Sidemenu JS Function-------------------------------------
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//-------------------------------------Store contact form data------------------------------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbytH9y8BFjSW1gOaVZ1CTps62GotwxYuVwALq7AAQGd-vxdDRB7kZit_nTNnXDmqXM/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
