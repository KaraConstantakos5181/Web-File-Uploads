
// two main elements, tabs and text in tabs, setting up for code
const scmMainTabs = document.getElementById('scmMainTabs');
const scmTabText = document.getElementById('scmTabText');

// set the tab names, to iterate through later and create the tabs
let tabs = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// all of the content that will go in each corresponding tab = a number of arrays inside one array
let tabContent = [
  ["Good Morning"],
  ["GoodNight"],
  ["Hi"],
  ["Bye"],
  ["See"],
  ["You"],
  ["Later"]
];

//holds the number of items in the array equal to 7
const numTabs = tabs.length;

//now need to create the loop that goes through the previous stored numTabs
//start at 0 and runs through all tabs listed

for(i=0; i<numTabs; i++){
  let currentTab = tabs[i];
  let tabList = tabContent[i]; //
  console.log('Category: ' + currentTab); // using string concatination to set each tab header = to the tabs array created above
  console.log('Content in the tab: \n' + tabList); //tring concat to enter after each element in the tab content array

  let tabInfoContent = 'tabinfo_' + i; //any info inside tab is associated to the tab
  let tabTitle = document.createElement('h1'); //making the setting title of the tab to an element so we can make it the header
  tabTitle.innerHTML = currentTab //setting text for tab to the current tab in the iteration

  let doWeekTab =document.createElement('div'); //making each tab button a div
  doWeekTab.id = identifier; //establishes the variable, what we will refer to in code
  doWeekTab.classList.add('doWeekTabDays'); //WHAT DOES THIS DO??
  doWeekTab.addEventListener('click', tabActive ,false); //creating the on click to function for a function that we will create later so right now set false

  doWeekTab.appendChild(tabTitle); //append tab title format
  doWeekTab.appendChild(tabs); //append tab names

  let tabWords = document.createElement('selfCareInfo') //setting body of tabe so make it it's own element
  tabWords.id = identifier + '_Words'; //makes tab words id what to identify by with concatination of + _Words
  tabWords.classList.add('tabWords_Words', 'hidden'); //hides body for now becuase we will set active Later

  scmTabText.appendChild(tabWords); //change the words for each tab

  //setting Monday to display first
  if(i==0){
    doWeekTab.classList.add('active');
    doWeekTab.classList.remove('hidden');
  }
}

//now we create the function that activates the tabs so it can iterate through each item in the array and turn off and on for each iteration
function tabActive(event){
  let day = event.target.parentNode.id;
  console.log('Tab Switch: '+ day);
  let tabWords = day + '_Words';

  let ctab = document.getElementsByClassName('active');
  while(ctab.length){
    let cwords = ctab[0].id + "_Words";
    console.log('Hide body and put: ' + cwords);
    ctab[0].classList.remove('active');
    document.getElementById(cwords).classList.add('hidden');
  }

  (if event.target.tagName =="H1"){
    event.target.parentNode.classList.add("active");
  }
  else{
    event.target.classList.add("active");
  }
  document.getElementById(ctab[0].id + '_Words').classList.remove('hidden');

}
