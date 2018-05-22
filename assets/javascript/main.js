window.onload = function() {
  addCardToggles();
  addMaskListener();


  document.querySelector('#main').className += "loaded";
}

function addMaskListener() {
  var mask = document.querySelector('#mask');
  var openModal = document.querySelector('#open-modal');

  if (openModal) {
    openModal.addEventListener("click", function(ev){
      document.body.classList.toggle('modal-active');
    }, false);
  };

  mask.addEventListener("click", function(ev){
    document.body.classList.toggle('modal-active');
  }, false);
}

function addCardToggles() {
  var selectionContainers = document.getElementsByClassName('card');

  // if (isMobile()) {
  //   window.addEventListener("scroll", function(ev){
  //     for (var i=0; i < selectionContainers.length; i++) {
  //       if (isInViewport(selectionContainers[i]) && !selectionContainers[i].classList.contains('flipped')) {
  //         selectionContainers[i].classList.toggle('flipped');
  //       } else if (!isInViewport(selectionContainers[i]) && selectionContainers[i].classList.contains('flipped')) {
  //         selectionContainers[i].classList.toggle('flipped');
  //       };
  //     };
  //   }, false);
  // } else {
    for (var i=0; i < selectionContainers.length; i++) {
      if (selectionContainers[i].classList.contains('modal')) {
        selectionContainers[i].addEventListener("click", function(){
          document.body.classList.toggle('modal-active');
        }, false);
      } else {
        selectionContainers[i].addEventListener("click", function(){
          console.log(this.classList);
          this.classList.toggle('flipped');
        }, false);
      }
    }
  // }
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}