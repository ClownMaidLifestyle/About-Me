let username;

function load(){
    username = prompt("Hello bestie, what shall I call you?");
    alert("Welcome, Bestie " + username);
}

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
    alert("You got " + score + " out of 5!")
}
        