//yellow-button-
const bgYellow = document.getElementById('yellow-button');
bgYellow.onclick = function bgYellowOn(){
  document.body.style.backgroundColor= 'yellow'
}


//red-button-
const bgRed = document.getElementById('red-button');
bgRed.onclick = bgRedOn;
function bgRedOn(){
  document.body.style.backgroundColor= 'red';
}

//purple-button-
const bgPurple = document.getElementById('purple-button');
bgPurple.onclick = bgPurpleOn;
function bgPurpleOn(){
  document.body.style.backgroundColor= 'purple';
}

//white-button-
function bgBlueOn(){
document.body.style.backgroundColor = 'blue';
}

//goldenRod-button-
document.getElementById('golden-rod').addEventListener('click', function(){
  document.body.style.backgroundColor= 'pink'
})