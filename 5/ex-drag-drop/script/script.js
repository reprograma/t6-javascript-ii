const rocket = document.getElementById("rocket");
rocket.onmousedown = function (event) { // (1) start the process

  // (2) prepare to moving: make absolute and top by z-index
  rocket.style.position = 'absolute';
  rocket.style.zIndex = 1000;
  // document.body.appendChild(rocket);

  // ...and put that absolutely positioned rocket under the cursor
  moveAt(event.pageX, event.pageY);

  // centers the rocket at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    rocket.style.left = pageX - rocket.offsetWidth / 2 + 'px';
    rocket.style.top = pageY - rocket.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the rocket on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the rocket, remove unneeded handlers
  rocket.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    rocket.onmouseup = null;
  };

};

rocket.ondragstart = function () {
  return false;
};