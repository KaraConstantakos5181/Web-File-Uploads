
//Monday
document.getElementById("Monday").addEventListener("click", monClicked);
function monClicked(){
  monInform = document.getElementById('moninfo');
  displayInfo = monInform.style.display;

  if (displayInfo == 'block'){
    monInform.style.display = 'none'; //hides info
  }
  else{
    monInform.style.display ='block'; //shows info
  }
  //hide all other info while showing monday info
  // document.getElementById('tuesinfo').style.display = 'none';
  // document.getElementById('wedinfo').style.display = 'none';
  // document.getElementById('thursinfo').style.display = 'none';
  // document.getElementById('friinfo').style.display = 'none';
  // document.getElementById('satinfo').style.display = 'none';
  // document.getElementById('suninfo').style.display = 'none';
}

//Tuesday
document.getElementById("Tuesday").addEventListener("click", tuesClicked);
function tuesClicked(){
  tuesInform = document.getElementById('tuesinfo');
  displayInfo = tuesInform.style.display;

  if (displayInfo == 'block'){
    tuesInform.style.display = 'none'
  }
  else{
    tuesInform.style.display ='block';
  }
  // document.getElementById('moninfo').style.display = 'none';
  // document.getElementById('wedinfo').style.display = 'none';
  // document.getElementById('thursinfo').style.display = 'none';
  // document.getElementById('friinfo').style.display = 'none';
  // document.getElementById('satinfo').style.display = 'none';
  // document.getElementById('suninfo').style.display = 'none';
}

//Wednesday
document.getElementById("Wednesday").addEventListener("click", wedClicked);
function wedClicked(){

  wedInform = document.getElementById('wedinfo');
  displayInfo = wedInform.style.display;

  if (displayInfo == 'block'){
    wedInform.style.display = 'none'
  }
  else{
    wedInform.style.display ='block';
  }
  // document.getElementById('moninfo').style.display = 'none';
  // document.getElementById('tuesinfo').style.display = 'none';
  // document.getElementById('thursinfo').style.display = 'none';
  // document.getElementById('friinfo').style.display = 'none';
  // document.getElementById('satinfo').style.display = 'none';
  // document.getElementById('suninfo').style.display = 'none';
}

//Thursday
document.getElementById("Thursday").addEventListener("click", thurClicked);
function thurClicked(){
  thurInform = document.getElementById('thursinfo');
  displayInfo = thurInform.style.display;

  if (displayInfo == 'block'){
    thurInform.style.display = 'none'
  }
  else{
    thurInform.style.display ='block';
  }
  //
  // document.getElementById('moninfo').style.display = 'none';
  // document.getElementById('tuesinfo').style.display = 'none';
  // document.getElementById('wedinfo').style.display = 'none';
  // document.getElementById('friinfo').style.display = 'none';
  // document.getElementById('satinfo').style.display = 'none';
  // document.getElementById('suninfo').style.display = 'none';
}

//Friday
document.getElementById("Friday").addEventListener("click", friClicked);
function friClicked(){
  friInform = document.getElementById('friinfo');
  displayInfo = friInform.style.display;

  if (displayInfo == 'block'){
    friInform.style.display = 'none'
  }
  else{
    friInform.style.display ='block';
  }

  // document.getElementById('moninfo').style.display = 'none';
  // document.getElementById('tuesinfo').style.display = 'none';
  // document.getElementById('wedinfo').style.display = 'none';
  // document.getElementById('thursinfo').style.display = 'none';
  // document.getElementById('satinfo').style.display = 'none';
  // document.getElementById('suninfo').style.display = 'none';
}

//Saturday
document.getElementById("Saturday").addEventListener("click", satClicked);
function satClicked(){
  satInform = document.getElementById('satinfo');
  displayInfo = satInform.style.display;

  if (displayInfo == 'block'){
    satInform.style.display = 'none'
  }
  else{
    satInform.style.display ='block';
  }

  // document.getElementById('moninfo').style.display = 'none';
  // document.getElementById('tuesinfo').style.display = 'none';
  // document.getElementById('wedinfo').style.display = 'none';
  // document.getElementById('thursinfo').style.display = 'none';
  // document.getElementById('friinfo').style.display = 'none';
  // document.getElementById('suninfo').style.display = 'none';
}

//Sunday
document.getElementById("Sunday").addEventListener("click", sunClicked);
function sunClicked(){
  sunInform = document.getElementById('suninfo');
  displayInfo = sunInform.style.display;

  if (displayInfo == 'block'){
    sunInform.style.display = 'none'
  }
  else{
    sunInform.style.display ='block';
  }
  // document.getElementById('moninfo').style.display = 'none';
  // document.getElementById('tuesinfo').style.display = 'none';
  // document.getElementById('wedinfo').style.display = 'none';
  // document.getElementById('thursinfo').style.display = 'none';
  // document.getElementById('friinfo').style.display = 'none';
  // document.getElementById('satinfo').style.display = 'none';
}
