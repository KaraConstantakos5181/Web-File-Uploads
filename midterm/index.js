let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let firstDay = "Monday";
// let pictures = [""]

// for loop to pull each day of week into the iteration
for(i=0; i<document.getElementsByClassName('day').length; i++){
  document.getElementsByClassName('day')[i].innerHTML = "<h2>" + days[i] + "</h2>";
  // first line is making the header of the div dofWeek = to days array
  document.getElementsByClassName('day')[i].addEventListener('click', setActive, false);
  // setting them all to false bc later in code will set them to active if they are clicked
  document.getElementsByClassName('day')[i].id = days[i];
  // setting the id of day equal to the days array
}

document.getElementById("Monday").classList.toggle("active");

function setActive(event){

  console.log('clicked');
  event.target.classList.toggle('active');
  firstDay = document.getElementById("active")[0].id;

  if(firstDay != undefined){
    document.getElementById(firstDay).classList.toggle("active");
    document.getElementById(firstDay + "Week").style.display ="none";
  firstDay = document.getElementsByClassName("active")[0].id;
  if(firstDay != undefined){
    document.getElementById(firstDay).classList.toggle("active");
    document.getElementById(firstDay).style.display = "none";
  }
  if(event.target.tagName == "H2"){
    event.target.parentNode.classList.toggle("active");
  }else{
    event.target.classList.toggle("active");
  }

  day = document.getElementsByClassName("active")[0].id;
  document.getElementById(day + "Week").style.display = "block";
  document.getElementById(day + "Week").innerHTML;
}
