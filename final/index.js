let projphotos = 4;
let photo;

for(i=0;i<projphotos;i++){
  pic = 1+i;
document.getElementById('projects').innerHTML += "<div class='pphoto'> <img src='assets/projects/" + photo + ".jpg'" + "class='projectitem' id='photo" + photo + "' /> </div>";
}

let displayinfo = false;
document.getElementById('projects').addEventListener("click", showInfo);

function showInfo(){
  document.getElementById('info').style.display ="block";
  document.getElementById('infoadded').style.display = "block";
  document.getElementById('infoadded').addEventListener('click', clickedInfo);
  displayinfo = true;
}

function clickedInfo(){
  document.getElementById('info').style.display ="none";
  document.getElementById('infoadded').style.display = "none";
  displayinfo = false;
}
