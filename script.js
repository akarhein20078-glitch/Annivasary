/* =====================================================
   ANNIVERSARY DATE
===================================================== */

/*
   CHANGE THIS!

   Example:
   const anniversaryDate = "2026-09-07";
*/

const anniversaryDate = "742026";


/* =====================================================
   ELEMENTS
===================================================== */

const loginScreen =
  document.getElementById("loginScreen");

const surprise =
  document.getElementById("surprise");

const password =
  document.getElementById("password");

const unlockBtn =
  document.getElementById("unlockBtn");

const error =
  document.getElementById("error");

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

const photoViewer =
  document.getElementById("photoViewer");

const viewerImage =
  document.getElementById("viewerImage");


/* =====================================================
   UNLOCK
===================================================== */

function unlock() {

  const enteredPassword =
    password.value.trim();


  if (enteredPassword === anniversaryDate) {

    error.style.display = "none";

    loginScreen.classList.add("unlocking");


    setTimeout(() => {

      loginScreen.style.display = "none";

      surprise.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }, 700);


  } else {

    error.style.display = "block";

    password.value = "";

    password.focus();


    // Shake animation

    const card =
      document.querySelector(".login-card");


    card.animate(

      [
        {
          transform: "translateX(0)"
        },

        {
          transform: "translateX(-10px)"
        },

        {
          transform: "translateX(10px)"
        },

        {
          transform: "translateX(-6px)"
        },

        {
          transform: "translateX(0)"
        }
      ],

      {
        duration: 400
      }

    );

  }

}


/* =====================================================
   BUTTON
===================================================== */

unlockBtn.addEventListener(
  "click",
  unlock
);


/* =====================================================
   ENTER KEY
===================================================== */

password.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      unlock();

    }

  }
);


/* =====================================================
   MUSIC
===================================================== */

musicBtn.addEventListener(
  "click",
  function() {

    if (music.paused) {

      music.play();

      musicBtn.textContent = "Ⅱ";

    } else {

      music.pause();

      musicBtn.textContent = "▶";

    }

  }
);


/* =====================================================
   MUSIC ENDED
===================================================== */

music.addEventListener(
  "ended",
  function() {

    musicBtn.textContent = "▶";

  }
);


/* =====================================================
   FULLSCREEN PHOTO
===================================================== */

function openPhoto(image) {

  viewerImage.src = image;

  photoViewer.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE PHOTO
===================================================== */

function closePhoto() {

  photoViewer.classList.remove("active");

  document.body.style.overflow = "";

}


/* =====================================================
   CLICK OUTSIDE IMAGE TO CLOSE
===================================================== */

photoViewer.addEventListener(
  "click",
  function(event) {

    if (event.target === photoViewer) {

      closePhoto();

    }

  }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closePhoto();

    }

  }
);