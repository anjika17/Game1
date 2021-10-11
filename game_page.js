player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

 document.getElementById("login_input_player1").innerHTML = player1_name + ":";
 document.getElementById("login_input_player2").innerHTML = player2_name + ":";
 document.getElementById("player_1score").innerHTML = player1_score ;
 document.getElementById("player_2score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name ;

function send(){
    word1 = document.getElementById("word").value ;
    word = word1.toLowerCase() ;
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    length/2 = Math.floor(word.length/2);
    char2 = word.charAt(length/2);
    console.log(char2);

    length-1 =word.length - 1;
    char3 = word.charAt(length-1);
    console.log(char3);

    replace_char1 = word.replace(char1 , "_");
    replace_char2 = replace_char1.replace(char2 , "_");
    replace_char3 = replace_char2.replace(char3 , "_");

    console.log(replace_char3);
    question_word = "<h4 id="word_display">Q." + replace_char3 + "</h4>";
    input = "<br>Answer :<input type="text" id="answer_input" class="form-control">";
    check_button = "<br> <button type="button" class="btn btn-info" onclick="check()">Check</button>";
    row = question_word + input + check_button;
    document.getElementById("output").innerHTML = row ;
    document.getElementById("word").value = "" ;
}
