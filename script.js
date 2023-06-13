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
            alert("False! I'm a long time Situationsfornærmelse fan" + answerCache);
            question++;
            answers.push(answerCache);
        }
        else if (answerCache.toUpperCase() == ("NO" || "N")){
            alert("So True Bestie! Austria is the newest as their Eurovision entry popped off");
            question++;
            answers.push(answerCache);
        }
        else{
            alert("Something went wrong!! Please try again");
        }
    }
}
        