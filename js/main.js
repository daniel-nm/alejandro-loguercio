(function () {
  'use strict';

  /*
    GLOBAL VARIABLES
  */
  const btnOpen = document.querySelector(".link--openBtn");
  const btnClose = document.querySelector(".link--closeBtn");
  let menuLink = document.querySelector(".link--menu");
  let menuLinks = document.querySelectorAll(".link--menu");

  /*
    FUNCTIONS
  */

    /* 
      1. Function name: changeTabIndex
      2. Description: it changes the tab index of specified elements in order to be able to tab them or not.
      3. Parameters:
        a. $element: specifies the element to change tab index.
        b. $index: tab index.
    */
    function changeTabIndex ($element, $index) {
      $element.setAttribute('tabIndex', $index);
    }

    /*
      Show/Hide mobile navigation menu 
    */
   
   function displayMobileMenu($btn) {
     $btn.addEventListener('click', function () {
      document.querySelector('.nav__menu__overlay').classList.toggle('opacity');
      document.querySelector('body').classList.toggle('no_scroll');
      if($btn === btnOpen) {
        changeTabIndex(btnClose, 0);
        changeTabIndex(menuLink, 0);
        for (let i = 0; i < menuLinks.length; i++) {
          let delay = "move__in--" + i;
          menuLinks[i].classList.toggle('move__in');
          menuLinks[i].classList.toggle(delay);
        }
      } else {
        changeTabIndex(btnClose, -1);
        changeTabIndex(menuLink, -1);
        for (let i = 0; i < menuLinks.length; i++) {
          let delay = "move__in--" + i;
          menuLinks[i].classList.toggle('move__in');
          menuLinks[i].classList.toggle(delay);
        }
      }

      // Menu link transitions
      
    });
   }

 


  /*
    IMPLEMENTATION
  */
  
  // Do not allow tab in mobile navigation buttons by default
  changeTabIndex(btnClose, -1);
  changeTabIndex(menuLink, -1);

  // Event listeners for menu btns
  displayMobileMenu(btnOpen);
  displayMobileMenu(btnClose);





// Audio player
// Define audio player variables
// const media = document.getElementById('audio');
// let btnPlay = document.querySelector('#playAudio'),
//     percentage = document.querySelector('#percentage'),
//     time = document.querySelector('#currentTime'),
//     seekObj = document.querySelector('#seekObj');

// // Toggle audio play
// function togglePlay() {
//   if (media.paused === false) {
//     media.pause();
//     btnPlay.classList.toggle('pause');
//   } else {
//     media.play();
//     btnPlay.classList.toggle('pause');
//   }
// }

// function calculatePercentPlayed() {
//   let percCalc = (media.currentTime / media.duration).toFixed(2) * 100;
//   percentage.style.width = `${percCalc}%`;
// }

// function calculateCurrentValue(currentTime) {
//   const currentMinute = parseInt(currentTime / 60) % 60;
//   const currentSecondsLong = currentTime % 60;
//   const currentSeconds = currentSecondsLong.toFixed();
//   const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
// currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
// }`;

//   return currentTimeFormatted;
// }

// function initProgressBar() {
//   const currentTime = calculateCurrentValue(media.currentTime);
//   time.innerHTML = currentTime;
//   seekObj.addEventListener('click', seek);

//   media.onended = () => {
//     btnPlay.classList.remove('pause');
//     percentage.style.width = 0;
//     time.innerHTML = '00:00';
//   };

//   function seek(e) {
//     const percent = e.offsetX / this.offsetWidth;
//     media.currentTime = percent * media.duration;
//   }

//   calculatePercentPlayed();
// }


// btnPlay.addEventListener('click', togglePlay);
// media.addEventListener('timeupdate', initProgressBar);




  

  // let year = new Date();
  // document.querySelector('#year').innerHTML = year.getFullYear();




})();


