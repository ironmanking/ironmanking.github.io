//target all elements to save to constants
const page5btn=document.querySelector("#page5btn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page6btn=document.querySelector("#page6btn");
const page7btn=document.querySelector("#page7btn");
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
if (pgno == 6) { 
        initializeGame(); 
    }
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
page6btn.addEventListener("click", function () {
    show(6);
});
page7btn.addEventListener("click", function () {
    show(7);
});
show(5);

const page5LinkItems = document.querySelectorAll('#page5 .links-section a.link-item');
page5LinkItems.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const pageNumber = parseInt(href.substring(5)); 
        if (pageNumber) {
            show(pageNumber); 
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
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


const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}
function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}


const mapRegions = document.querySelectorAll('.map-region');
const allCountryContent = document.querySelectorAll('.country-content');

mapRegions.forEach(function(region) {
    region.addEventListener('click', function(e) {
        e.preventDefault();
        const country = e.target.getAttribute('id');
        const targetContentId = "country-" + country.toLowerCase();

        allCountryContent.forEach(function(content) {
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



const openFunfact1Btn = document.getElementById("openFunfact1"); 
const closeFunfactPopup1Btn = document.getElementById("closeFunfactPopup1");
const funfactPopup1 = document.getElementById("funfactPopup1");

const openFunfact2Btn = document.getElementById("openFunfact2"); 
const closeFunfactPopup2Btn = document.getElementById("closeFunfactPopup2"); 
const funfactPopup2 = document.getElementById("funfactPopup2");

const openFunfact3Btn = document.getElementById("openFunfact3"); 
const closeFunfactPopup3Btn = document.getElementById("closeFunfactPopup3");
const funfactPopup3 = document.getElementById("funfactPopup3");



const gridNavElement = document.querySelector(".gridnav");

function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(function(currentPopup) {
        currentPopup.classList.remove('popup-open'); 
    });
}

if (openFunfact1Btn && funfactPopup1) {
    openFunfact1Btn.addEventListener("click", function() {
        closeAllPopups(); 
        funfactPopup1.classList.add("popup-open");
        if (gridNavElement && gridNavElement.classList.contains("topicsShow")) {
            gridNavElement.classList.remove("topicsShow");
        }
    });
}

if (closeFunfactPopup1Btn && funfactPopup1) {
    closeFunfactPopup1Btn.addEventListener("click", function() {
        funfactPopup1.classList.remove("popup-open");
    });
}

if (openFunfact2Btn && funfactPopup2) {
    openFunfact2Btn.addEventListener("click", function() {
        closeAllPopups(); 
        funfactPopup2.classList.add("popup-open");
        if (gridNavElement && gridNavElement.classList.contains("topicsShow")) {
            gridNavElement.classList.remove("topicsShow");
        }
    });
}

if (closeFunfactPopup2Btn && funfactPopup2) {
    closeFunfactPopup2Btn.addEventListener("click", function() {
        funfactPopup2.classList.remove("popup-open");
    });
}


if (openFunfact3Btn && funfactPopup3) {
    openFunfact3Btn.addEventListener("click", function() {
        closeAllPopups(); 
        funfactPopup3.classList.add("popup-open");
        if (gridNavElement && gridNavElement.classList.contains("topicsShow")) {
            gridNavElement.classList.remove("topicsShow");
        }
    });
}

if (closeFunfactPopup3Btn && funfactPopup3) {
    closeFunfactPopup3Btn.addEventListener("click", function() {
        funfactPopup3.classList.remove("popup-open");
    });
}



    const gameArea = document.getElementById('gameArea');
    const basketElement = document.getElementById('basket');
    const gameOverMessage = document.getElementById('gameOverMessage');
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const startGameBtn = document.getElementById('startGameBtn');
    const restartGameBtn = document.getElementById('restartGameBtn');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const livesDisplay = document.getElementById('livesDisplay');
    //for 800
    const moveLeftBtn = document.getElementById('moveLeftBtn');
    const moveRightBtn = document.getElementById('moveRightBtn');

    // to allow me to change the values
    let gameRunning = false;
    let score = 0;
    let lives = 3;
    let basketX;
    let basketSpeed = 7;
    let basketDx = 0; 

    let mangosteens = [];
    let mangosteenInterval;
    let gameLoopId;

    const BASKET_WIDTH = 100;
    const BASKET_HEIGHT = 20;
    const MANGOSTEEN_SIZE = 80; 
    const MANGOSTEEN_SPEED_MIN = 2;
    const MANGOSTEEN_SPEED_MAX = 4;
    //1.5sec
    const MANGOSTEEN_SPAWN_INTERVAL = 1500; 
    const GAME_AREA_BORDER_WIDTH = 2; 
    let BASKET_Y_POS_IN_GAME_AREA;


    function initializeGame() {
        score = 0;
        lives = 3;
        gameRunning = false;

        //prevent the game from going outside the game boundaries in responsive
        const gameAreaTotalWidth = gameArea.offsetWidth; 
        //center the basket
        basketX = (gameAreaTotalWidth / 2) - (BASKET_WIDTH / 2); 

        //-20 for basket border
        BASKET_Y_POS_IN_GAME_AREA = gameArea.offsetHeight - BASKET_HEIGHT - 20;
        //remmoves old mangosteens from previous gmae
        gameArea.querySelectorAll('.mangosteen-fruit').forEach(function(m) {
            m.remove();
        });
        //new array
        mangosteens = [];

        updateScoreAndLives();
        //hide gameover text when changing back page
        if (gameOverMessage) {
            gameOverMessage.classList.add('hidden');
        }

        //resets the game loop and mangosteen spawning(prevent multiple spawning of mangosteen and basket speed going faster when changing pages after dieing)
        cancelAnimationFrame(gameLoopId);
        clearInterval(mangosteenInterval);

        if (startGameBtn) {
            startGameBtn.disabled = false;
        }
        if (restartGameBtn) {
            restartGameBtn.disabled = true;
        }
    }

    // Start Game
    function startGame() {
        if (gameRunning) return;
        gameRunning = true;
        mangosteens = [];
        score = 0; 
        lives = 3; 


        updateScoreAndLives();
        //get the position of basket and calculate from the left side of the game area
        if (basketElement) {
            basketElement.style.left = basketX + 'px';
        }
        if (gameOverMessage) {
            gameOverMessage.classList.add('hidden');
        }

        if (startGameBtn) {
                startGameBtn.disabled = true;
            }
        if (restartGameBtn) {
                restartGameBtn.disabled = false;
            } 

        //spawn mangosteen every 1sec
        mangosteenInterval = setInterval(spawnMangosteen, MANGOSTEEN_SPAWN_INTERVAL);
        gameLoop();
    }

    // Restart Game
    function restartGame() {
        //resets the game loop and mangosteen spawning(prevent multiple spawning of mangosteen and basket speed going faster when changing pages after dieing)
        cancelAnimationFrame(gameLoopId);
        clearInterval(mangosteenInterval);

        initializeGame(); 
        startGame(); 
    }

    // Spawn a new mangosteen (as a div containing an img)
    function spawnMangosteen() {
        //create mangosteens visual size and hitbox(size in css for mangosteen-fruit)
        const mangosteenContainerDiv = document.createElement('div');
        mangosteenContainerDiv.classList.add('mangosteen-fruit');

        const mangosteenImg = document.createElement('img');
        mangosteenImg.src = './images/mangosteengame.png'; 
        mangosteenImg.alt = 'Mangosteen Fruit'; 

        //add in mangosteen image
        mangosteenContainerDiv.appendChild(mangosteenImg);

        //spawn mangosteen randomly in game area and random speed
        const gameAreaTotalWidth = gameArea.offsetWidth; 
        const x = Math.random() * (gameAreaTotalWidth - MANGOSTEEN_SIZE); 
        //spawn mangosteen just ontop game area
        const y = -MANGOSTEEN_SIZE;
        const speed = Math.random() * (MANGOSTEEN_SPEED_MAX - MANGOSTEEN_SPEED_MIN) + MANGOSTEEN_SPEED_MIN;

        //place the mangosteens correctly at starting pos
        mangosteenContainerDiv.style.left = x + 'px';
        mangosteenContainerDiv.style.top = y + 'px';

        //add in the full mangosteen into the game area
        gameArea.appendChild(mangosteenContainerDiv);
        //add mangosteen with stats and push into array
        const newMangosteen = {
            element: mangosteenContainerDiv,
            y: y,
            x: x,
            speed: speed
        };
        mangosteens.push(newMangosteen);
    }
    function update() {
        if (!gameRunning) return;
        if (!basketElement || !gameArea) return;
        const gameAreaTotalWidth = gameArea.offsetWidth; 
        
        //width of game area(minus border)
        const gameAreaContentWidth = gameAreaTotalWidth - (2 * GAME_AREA_BORDER_WIDTH); 
        basketX += basketDx * basketSpeed;

        //prevent basket from going past the left game barrier
        if (basketX < 0) { 
            basketX = 0;
        }

        //prevent basket from going past the right game barrier
        const maxBasketX = gameAreaContentWidth - BASKET_WIDTH; 
        if (basketX > maxBasketX) {
            basketX = maxBasketX;
        }

        //update basket pos
        basketElement.style.left = basketX + 'px';
        for (let i = mangosteens.length - 1; i >= 0; i--) {
            const mangosteen = mangosteens[i];
            mangosteen.y += mangosteen.speed;
            mangosteen.element.style.top = mangosteen.y + 'px';
            //collision for mangosteen and basktet
            
            if (
                //bottom mangosteen and top basket
                mangosteen.y + MANGOSTEEN_SIZE > BASKET_Y_POS_IN_GAME_AREA &&
                //top mangosteen and bottom basket
                mangosteen.y < BASKET_Y_POS_IN_GAME_AREA + BASKET_HEIGHT &&
                //right side mangosteen and left side basket
                mangosteen.x + MANGOSTEEN_SIZE > basketX && 
                //left side mangosteen and right side basket
                mangosteen.x < basketX + BASKET_WIDTH 
            ) {
                const catchAudio = new Audio("audio/popsound.mp3");
                catchAudio.play();
                score++;
                //remove visually
                mangosteen.element.remove();
                //remove from array
                mangosteens.splice(i, 1);   

            } else if (mangosteen.y > gameArea.offsetHeight) { 
                const missAudio = new Audio("audio/miss.mp3");
                missAudio.play();
                lives--;
                mangosteen.element.remove(); 
                mangosteens.splice(i, 1);
            }
        }
        updateScoreAndLives();
        if (lives <= 0) {
            gameOver();
            const loseAudio = new Audio("audio/lose.mp3");
            loseAudio.play();
        }
    }
    //keeps the game animation runnign
    //start game is called and the gameloop function is called and in the function it updates and aft that it request the animation frame from the gameloop function again which calls update function again
    function gameLoop() {
        update();
        gameLoopId = requestAnimationFrame(gameLoop);
    }
    function gameOver() {
        gameRunning = false;
        cancelAnimationFrame(gameLoopId);
        clearInterval(mangosteenInterval);

        if (gameOverMessage) {
            gameOverMessage.classList.remove('hidden');
        }
        if (finalScoreDisplay) {
            finalScoreDisplay.textContent = score;
        }

        if (restartGameBtn) restartGameBtn.disabled = false;
        if (startGameBtn) startGameBtn.disabled = true;
    }
    function updateScoreAndLives() {
        if (scoreDisplay) {
            scoreDisplay.textContent = score;
        }
        if (livesDisplay) {
            livesDisplay.textContent = lives;
        }
    }
    if (startGameBtn) {
        startGameBtn.addEventListener('click', startGame);
    }
    if (restartGameBtn) {
        restartGameBtn.addEventListener('click', restartGame);
    }
    document.addEventListener('keydown', function(e) {
        if (gameRunning && gameArea && gameArea.offsetParent !== null) {
            if (e.key == 'ArrowLeft') {
                basketDx = -1;
            } else if (e.key == 'ArrowRight') {
                basketDx = 1;
            }
        }
    });
    document.addEventListener('keyup', function(e) {
        if (gameRunning && gameArea && gameArea.offsetParent !== null) {
            if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
                basketDx = 0;
            }
        }
    });
    function startMoving(direction) {
        if (gameRunning) { 
            basketDx = direction; 
        }
    }
    function stopMoving() { 
        basketDx = 0; 
    }
    if (moveLeftBtn) {
        //for touchscreen
        moveLeftBtn.addEventListener('touchstart', function() {
            startMoving(-1);
        });
        moveLeftBtn.addEventListener('touchend', stopMoving);
        
        //for mouse
        moveLeftBtn.addEventListener('mousedown', function() {
            startMoving(-1);
        });
        //for letting go of mouse hold
        moveLeftBtn.addEventListener('mouseup', stopMoving);
        //for dragging mouse away from button while holding down
        moveLeftBtn.addEventListener('mouseleave', stopMoving);
    }

    if (moveRightBtn) {
        moveRightBtn.addEventListener('touchstart', function() {
            startMoving(1);
        });
        moveRightBtn.addEventListener('touchend', stopMoving);


        moveRightBtn.addEventListener('mousedown', function() {
            startMoving(1);
        });
        moveRightBtn.addEventListener('mouseup', stopMoving);
        moveRightBtn.addEventListener('mouseleave', stopMoving);
    }


    //for quiz
    document.querySelectorAll('.option-box').forEach(function(box) {
    box.addEventListener('click', function() {
        const radio = box.querySelector('input[type="radio"]');
        const questionName = radio.name;
        document.querySelectorAll('input[name="' + questionName + '"]').forEach(function(otherRadio) {
            otherRadio.closest('.option-box').classList.remove('selected');
        });
        radio.checked = true;
        box.classList.add('selected');
        });
    });

    const btnSubmit = document.querySelector("#btnSubmit");
    const quizscorebox = document.querySelector("#scorebox");
    var q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, quizscore = 0;
    function CheckAns() {
        quizscore = 0;
            q1 = document.querySelector("input[name='q1']:checked").value;
            if (q1 === "Southeast Asia") quizscore++;
            q2 = document.querySelector("input[name='q2']:checked").value;
            if (q2 === "The Queen of Fruits") quizscore++;
            q3 = document.querySelector("input[name='q3']:checked").value;
            if (q3 === "18th century") quizscore++;
            q4 = document.querySelector("input[name='q4']:checked").value;
            if (q4 === "Queen Victoria") quizscore++;
            q5 = document.querySelector("input[name='q5']:checked").value;
            if (q5 === "25°C to 35°C") quizscore++;
            q6 = document.querySelector("input[name='q6']:checked").value;
            if (q6 === "At least 50 inches") quizscore++;
            q7 = document.querySelector("input[name='q7']:checked").value;
            if (q7 === "Slightly acidic to neutral (5.5-7.0)") quizscore++;
            q8 = document.querySelector("input[name='q8']:checked").value;
            if (q8 === "8-15 years") quizscore++;
            q9 = document.querySelector("input[name='q9']:checked").value;
            if (q9 === "Skin turns dark purple") quizscore++;
            q10 = document.querySelector("input[name='q10']:checked").value;
            if (q10 === "Xanthones") quizscore++;
            q11 = document.querySelector("input[name='q11']:checked").value;
            if (q11 === "1.8-3.5 g") quizscore++;
            q12 = document.querySelector("input[name='q12']:checked").value;
            if (q12 === "Vitamin C") quizscore++;
            q13 = document.querySelector("input[name='q13']:checked").value;
            if (q13 === "Thailand") quizscore++;
            q14 = document.querySelector("input[name='q14']:checked").value;
            if (q14 === "Limited land space and costs") quizscore++;
            q15 = document.querySelector("input[name='q15']:checked").value;
            console.log(q15);
            if (q15 === "320,000 Tons") quizscore++;
        quizscorebox.innerHTML = "Score: " + quizscore + " / 15";
    }
    btnSubmit.addEventListener("click", CheckAns);
