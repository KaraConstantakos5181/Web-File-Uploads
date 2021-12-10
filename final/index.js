const photos = ["assets/projects/first1.jpg","assets/projects/first2.jpg","assets/projects/first3.jpg","assets/projects/first4.jpg","assets/projects/first5.jpg"];

let photocount = 0;

document.getElementById("imgsection").innerHTML = "<img id='landPhoto' class='image' src=" + photos[photocount] + " ' >";

function buttonClicked(){
  console.log(photos[photocount]);
  document.getElementById("landPhoto").innerHTML = photos[photocount];
  if(photocount >= 4){
    photocount = 0;
  }else{photocount ++;}
}
