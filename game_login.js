function addUser(){
    player_1_name = document.getElementById("login_input_player1").value ;
    player_2_name = document.getElementById("login_input_player2").value ;

    localStorage.setItem("player1_name" , player_1_name) ;
    localStorage.setItem("player2_name"  , player_2_name) ;

    window.location="game_window.html";
}
