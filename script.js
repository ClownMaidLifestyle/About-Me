"use strict";
let username;
let musicslide = 0;
/*Initialise*/

let musicTextArray = ["Canada: Bad Waitress - energetic bouncy Punk Rock, the kind of music that makes you want to punch and/or kiss someone",
                    "UK: Stoned Immaculate - music for people who like bucket hats and are torn between Oasis and Arctic Monkeys",
                    "Denmark: Situationsfornaermelse - The lead singer will make you want to learn Danish just to sing along - punk rock at it's finest",
                    "France: Videoclub - dreamy bedroom pop power couple, music to fall in love to",
                    "Haiti: Chouk Bwa & the Ångstromers - A traditional roots Haitian band that aren't afraid to incorporate the incredible modern innovations of fat bass",
                    "Kenya: kakai kilonzo & les kilimambogo brothers - Upbeat music that exhudes calmness and wellbeing, it is impossible to worry about something and listen to baba mkwe",
                    "Ukraine: I hate myself because - You know you're not above listening to edgy sadboy music, this is peak edgy sadboy music",
                    "Sweden: Diablo Swing Orchestra - Metal, Swing and Opera had a baby and that baby was raised by a goth. I promise you've never heard anything like it",
                    "Zambia: Amanaz - Zambia had a thriving music scene for a precious few years in the 70s and the result was pure psychedelic groove",
                    "Germany: Swiss - the perfect introduction to German political rap/rock - the whole genre is golden and the punchy language is excellently suited",
                    "NAN - ARRAY EXCEEDED"];

function load(){
    username = prompt("Hello bestie, what shall I call you?");
    alert("Welcome, Bestie " + username);
    let div = document.getElementById("musictext");
    div.innerHTML = musicTextArray[musicslide];
}

function musicplus(){
    musicslide++;
    if (musicslide == 10){
        musicslide = 0;
    }
    document.getElementById("musicimage").src="./images/musicslides/slide" + musicslide + ".png";
    let div = document.getElementById("musictext");
    div.innerHTML = musicTextArray[musicslide];
}

function musicminus(){
    musicslide--;
    if (musicslide == -1){
        musicslide = 9;
    }
    document.getElementById("musicimage").src="./images/musicslides/slide" + musicslide + ".png";
    let div = document.getElementById("musictext");
    div.innerHTML = musicTextArray[musicslide];
}


/*QUIZ*/
function quiz(){
    let score = 0;
    let answerCache = "";
    let question = 1;
    
    while (question == 1){
        answerCache = prompt("question 1 \n The newest country on my music map is Denmark").toUpperCase();
        if (answerCache == "YES" || answerCache == "Y"){
            alert("False! I'm a long time Situationsfornærmelse fan" + answerCache);
            question++;
        }
        else if (answerCache == "NO" || answerCache == "N"){
            alert("So True Bestie! Austria is the newest as their Eurovision entry popped off");
            question++;
            score++;
        }
        else{
            alert("Something went wrong!! Please try again " + answerCache);
        }
    }

    while (question == 2){
        answerCache = prompt("question 2 \n I can make a banging pizza").toUpperCase();
        if (answerCache == "YES" || answerCache == "Y"){
            alert("So True Bestie! I can make ten pizza bases at once");
            question++;
            score++;
        }
        else if (answerCache == "NO" || answerCache == "N"){
            alert("False! I was a pizza chef for a year");
            question++;
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }

    while (question == 3){
        answerCache = prompt("question 3 \n I have a flag collection").toUpperCase();
        if (answerCache == "YES" || answerCache == "Y"){
            alert("So True Bestie! I have ten");
            question++;
            score++;
        }
        else if (answerCache == "NO" || answerCache == "N"){
            alert("False! I really like flags");
            question++;
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }

    while (question == 4){
        answerCache = prompt("question 4 \n I am from bradford").toUpperCase();
        if (answerCache == "YES" || answerCache == "Y"){
            alert("False! I would never admit to being from Bradford");
            question++;
        }
        else if (answerCache == "NO" || answerCache == "N"){
            alert("True! I was technically closer to Leeds");
            question++;
            score++;
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }

    while (question == 5){
        answerCache = prompt("question 5 \n I need a nap").toUpperCase();
        if (answerCache == "YES" || answerCache == "Y"){
            alert("So True Bestie! I always need a nap");
            question++;
            score++;
        }
        else if (answerCache == "NO" || answerCache == "N"){
            alert("False! I REALLY need a nap :(");
            question++;
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }

    alert("You got " + score + " out of 5! \n thanks for playing, " + username)
}
        