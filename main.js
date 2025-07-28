//target all elements to save to constants
const page5btn=document.querySelector("#page5btn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");

const topicsItemsList=document.querySelector(".main-nav ul");
const topicsBtn=document.querySelector("#topicsIcon");
topicsBtn.addEventListener("click", toggleTopics);

//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page

}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page5btn.addEventListener("click", function () {
    show(5);
});
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
// hideall();
show(5);

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball
function ResetPos() {
ballX=ballY=0; //reset to zero
ball.style.left = ballX+"px"; //set left property to ball x variable
ball.style.top = ballY+"px"; //set top property to ball x variable
ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}
function MovePos(leftInc, topInc) {
ballX =ballX+ leftInc;
ballY =ballY+ topInc;
ball.style.left = ballX+"px"; //set left css property to ball x variable
ball.style.top = ballY+"px"; //set top css property to ball y variable
ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}

function MoveLeft(){
ballX =ballX-10; //decrement by 10
ballY =ballY+0; //no change
ball.style.left = ballX+"px"; //set left css property to ball x variable
ball.style.top = ballY+"px"; //set top css property to ball y variable
ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}



//eventlistener to activate MoveLeft (named callback function)
leftBtn.addEventListener("click", MoveLeft); //no brackets after MoveLeft
//eventListener to anonymous callback function (other way)
rightBtn.addEventListener("click", function () {
MovePos(10, 0);
});
upBtn.addEventListener("click", function () {
MovePos(0, -10);
});
downBtn.addEventListener("click", function () {
MovePos(0, 10);
});
resetBtn.addEventListener("click", ResetPos);


document.addEventListener('keydown', function (kbEvt) {
//kbEvt: an event object passed to callback function
console.log(kbEvt); //see what is returned
if (kbEvt.code === "ArrowRight"){
MovePos(10,0);
}
if (kbEvt.code === "ArrowLeft"){
MoveLeft();
}
if (kbEvt.code === "ArrowDown"){
MovePos(0, 10);
}
if (kbEvt.code === "ArrowUp"){
MovePos(0, -10);
}
//Better option: use switch case instead
});
function toggleTopics(){ /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    topicsItemsList.classList.toggle("topicsShow");
    //if menu is showing (has the class “menuShow”)
    if(topicsItemsList.classList.contains("topicsShow")){
        topicsBtn.innerHTML="Close Topics"; //change button text to chose menu
    }else{ //if menu NOT showing
        topicsBtn.innerHTML="Open Topics"; //change button text open menu
    }
}


const mapRegions = document.querySelectorAll('.map-region');
const allCountryContent = document.querySelectorAll('.country-content');

mapRegions.forEach(region => {
    region.addEventListener('click', function(e) {
        const country = e.target.getAttribute('id');
        const targetContentId = "country-" + country.toLowerCase();

        allCountryContent.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        const targetContent = document.getElementById(targetContentId);
        if (targetContent) {
            targetContent.style.display = 'block';
            targetContent.classList.add('active');
        }
    });
});

// hi

