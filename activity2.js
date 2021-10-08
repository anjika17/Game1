function getScore(){
 score = localStorage.getItem("score")   ;
 document.getElementById("update").innerHTML = "<h2>Score</h2> "+ score ;
}

function back(){
    window.location = "activity_1.html";
}