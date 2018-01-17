window.onload = function() {
  var selectionContainers = document.getElementsByClassName('selection-container');

  if (isMobile()) {
    window.addEventListener("scroll", function(ev){
      for (var i=0; i < selectionContainers.length; i++) {
        if (isInViewport(selectionContainers[i]) && !selectionContainers[i].classList.contains('flipped')) {
          selectionContainers[i].classList.toggle('flipped');
        } else if (!isInViewport(selectionContainers[i]) && selectionContainers[i].classList.contains('flipped')) {
          selectionContainers[i].classList.toggle('flipped');
        };
      };
    }, false);
  }

  for (var i=0; i < selectionContainers.length; i++) {
    if (!isMobile()) {
      selectionContainers[i].addEventListener("click", function(){this.classList.toggle('flipped')}, false);
    };
  }
}

function isMobile() {
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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