document.addEventListener('DOMContentLoaded', function() {
  var videoModal = document.getElementById('videoModal');
  var video = document.getElementById('myVideo');

  
  videoModal.classList.remove('hidden');

 
  video.play();


  setTimeout(function() {
    
    video.pause();

  
    videoModal.classList.add('hidden');
  }, video.duration * 1000); 
});

// function hideVideo() {
//   document.getElementById('video').style.opacity = 0;
//   document.getElementById('video').style.visibility = 'hidden';
// }

// window.addEventListener('load', hideVideo);

// function changeActive(event) {
//   const navLinks = document.querySelectorAll('.nav-link');


//   navLinks.forEach(link => {
//     link.classList.remove('active');
//   });


//   event.target.classList.add('active');
// }


document.addEventListener("DOMContentLoaded", function() {
  const currentURL = location.pathname;

  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentURL) {
      link.classList.add('active');
    }
  });
});