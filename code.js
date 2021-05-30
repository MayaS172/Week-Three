function countdownTimer() {
console.log("countdownTimer Working");
var currTime = 50;
document.getElementById("countdownStatus").innerHTML = currTime;
currTime = currTime - 5;

    //Timer for 45
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //Timer for 40
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);

    //Timer for 35
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

//Timer for 30
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

//Timer for 25
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);

//Timer for 20
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

//Timer for 15
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

//Timer for 10
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

//Timer for 5
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);

//Timer for Blastoff
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = "Blastoff";
        currTime = currTime - 5;
    }, 50000);

}

    function playCraps() {
        console.log("Craps game intiated");
        var wins;
        //The two vars here tell the die when it is rolled
        //that it rounds up from 5. Meaning it can get to 5
        //but not land on 0.
        var die1 = Math.ceil(Math.random() *6);
        var die2 = Math.ceil(Math.random() *6);
        document.getElementById("die1Res").innerHTML = die1;
        document.getElementById("die2Res").innerHTML = die2;
        //This var adds up what die1 gets and what die2 gets
        var dieSum = die1 + die2;
        document.getElementById("dieSum").innerHTML = dieSum;
        //This if variable is here to make sure that if the
        //die sum equals 7 or 11 it tell you you lose
        if(dieSum == 7 || dieSum == 11){
            document.getElementById("crapsStatus").innerHTML = "Craps! You Lose";
        } //This else if statment is here to tell you you win if you get
        //doubles by saying that if die1 is the same as die2, or if
        //die1 equals 0
        else if (die1 == die2 && die1 % 2 == 0){
            document.getElementById("crapsStatus").innerHTML = "Doubles! You Win";
        }
        else{
            document.getElementById("crapsStatus").innerHTML = "You did not lose and you did not win. Please try again.";
        }

    }
    function btrCountdownTimer(){
        console.log("btrCountDownTimer() started");
        var currTime = 50;
        for (var i = 0; i < 10; i++){
            setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = currTime;
            currTime = currTime - 5;
            },5000 * i);

        }
        setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = "Blastoff";
        }, 50000);

    }


