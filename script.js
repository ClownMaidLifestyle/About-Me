let username;

function load(){
    username = prompt("Hello bestie, what shall I call you?");
    alert("Welcome, Bestie " + username);
}

function quiz(){
    let answers = [];
    let answerCache = "";
    let question = 1;
    
    while (question == 1){
        answerCache = prompt("question 1 \n The newest country on my music map is Denmark");
        if (answerCache.toUpperCase == ("YES" || "Y")){
            alert("False! I'm a long time Situationsfornærmelse fan");
            question++;
        }
        else if (answerCache.toUpperCase() == ("NO" || "N")){
            alert("So True Bestie! Austria is the newest as their Eurovision entry popped off");
            question++;
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }

    while (question == 2){
        answerCache = prompt("question 2 \n I can make a banging pizza");
        if (answerCache.toUpperCase == ("YES" || "Y")){
            alert("So True Bestie! I can make ten pizza bases at once");
            question++;
        }
        else if (answerCache.toUpperCase() == ("NO" || "N")){
            alert("False! I was a pizza chef for a year");
            question++;
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }
}
        