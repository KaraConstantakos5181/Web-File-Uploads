const photos = ["assets/projects/first2.jpg","assets/projects/first3.jpg","assets/projects/first4.jpg","assets/projects/first5.jpg","assets/projects/1.jpg"];

let photocount = 0;
document.getElementById("newphoto").addEventListener("click", buttonClicked1);

function buttonClicked1(){
  console.log(photos[photocount]);
  document.getElementById("imgsection").innerHTML = "<img id='landPhoto' class='image' src=" + photos[photocount] + " ' >";
  if(photocount >= 4){
    photocount = 0;
  }else{photocount ++;}
}


const photos2 = ["assets/projects/sec1.png","assets/projects/sec2.png","assets/projects/sec3.png","assets/projects/2.png"];

let photocount2 = 0;

document.getElementById("newphoto2").addEventListener("click", buttonClicked2);

function buttonClicked2(){
  console.log(photos2[photocount2]);
  document.getElementById("imgsection2").innerHTML = "<img id='landPhoto3' class='image' src=" + photos2[photocount2] + " ' >";
  if(photocount2 >= 3){
    photocount2 = 0;
  }else{photocount2 ++;}
}

const photos3 = ["assets/projects/thir1.JPG","assets/projects/thir2.JPG","assets/projects/3.jpg"];
let photocount3 = 0;

document.getElementById("newphoto3").addEventListener("click", buttonClicked3);

function buttonClicked3(){
  console.log(photos3[photocount3]);
  document.getElementById("imgsection3").innerHTML = "<img id='landPhoto3' class='image' src=" + photos3[photocount3] + " ' >";
  if(photocount3 >= 2){
    photocount3 = 0;
  }else{photocount3 ++;}
}
