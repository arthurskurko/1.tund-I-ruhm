window.onload = function(){

  var clock = document.getElementById("clock");
  writeDate();
  window.setInterval(function(){
    writeDate();
  }, 1000);

};

function writeDate(){

  var today = new Date();
  var hours = zero(today.getHours());
  var minutes = zero(today.getMinutes());
  var seconds = zero(today.getSeconds());

  clock.innerHTML = hours + ":" + minutes + ":" + seconds;

}

function zero(num){
  if(num < 10){
    num = "0" + num;
  }
  return num;
}
