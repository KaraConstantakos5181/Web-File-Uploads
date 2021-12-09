const quotes = ["assets/projects/first1.jpg","assets/projects/first2.jpg","assets/projects/first3.jpg","assets/projects/first4.jpg","assets/projects/first5.jpg"];

let quotecount = 0;

document.getElementById("newquote").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log(quotes[quotecount]);
  document.getElementById("qtext").innerHTML = quotes[quotecount];
  if(quotecount >= 4){
    quotecount = 0;
  }else{quotecount ++;}
}
