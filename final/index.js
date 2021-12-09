let projs = 4;
let proj;

for(i=0;i<projs;i++){
  proj = 1+i;
document.getElementById('projects').innerHTML += "<div class='port'> <img src='assets/projects/" + proj + ".jpg'" + "class='projectspic' id='proj" + proj+ "' /> </div>";
}

let showInfo = false;
document.getElementById('projects').addEventListener("click", displayInfo);

function displayInfo(){
  document.getElementById('pInfo').style.display ="block";
  document.getElementById('displayInfo').style.display = "block";
  document.getElementById('displayInfo').addEventListener('click', clickOverImage);
  showInfo = true;
}

function clickOverImage(){
  document.getElementById('pInfo').style.display ="none";
  document.getElementById('displayInfo').style.display = "none";
  showInfo = false;
}
