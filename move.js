var red = document.getElementById('red');
var blue = document.getElementById('blue');
var run = document.getElementById('buttonRun');
var stop = document.getElementById('buttonStop');
var bloup = new Audio("bloup.mp3");

var moveHeight ;

i = 0;


(function() {
  run.addEventListener("click", go);

  function moveRed() {
    i++;
    moveWidth = (-200 + i*1.5);
    moveHeight = i;
    console.log(i);
    var blueLeft = blue.style.left = moveWidth + "px";
    var redHeight = red.style.left = moveHeight + "px";
  }
  function bloupSound(){
    bloup.play();
  }


  function go(){
    stop.addEventListener("click", stopIt);
    var move = window.setInterval(moveRed, 10);
    var bloup = window.setInterval(bloupSound, 950);
      stop.innerHTML = "Stop";
      run.innerHTML = "Running";
      run.style.backgroundColor = "red";
      stop.style.backgroundColor = "";

    function stopIt(){
      window.clearInterval(move);
      window.clearInterval(bloup);
      stop.innerHTML = "Stopped";
      run.innerHTML = "Run";
      run.style.backgroundColor = "";
      stop.style.backgroundColor = "red";

    }
}
}());
