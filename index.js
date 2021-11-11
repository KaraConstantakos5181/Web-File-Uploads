const quotes = ["I'm 5'1.","I have 2 dogs.","I have 2 horses.","I love hiking, siking, and outdoor activites.","I have 1 sister.","I am from Florida.","I am 21."];
let quotecount = 0;

document.getElementById("newquote").addEventListener("click", buttonClicked);
function buttonClicked(){
  console.log(quotes[quotecount]);
  document.getElementById("meFacts").innerHTML = quotes[quotecount];
  if(quotecount >= 6){
    quotecount = 0;
  } else{quotecount ++;}
}
