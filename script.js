window.onload = load
function load() {
    document.querySelector(".square1").addEventListener("click", square1);
    document.querySelector(".square2").addEventListener("click", square2);
    document.querySelector(".square3").addEventListener("click", square3);
    document.querySelector(".square4").addEventListener("click", square4);
    document.querySelector(".square5").addEventListener("click", square5);
    document.querySelector(".square6").addEventListener("click", square6);
    document.querySelector(".square7").addEventListener("click", square7);
    document.querySelector(".square8").addEventListener("click", square8);
    document.querySelector(".square9").addEventListener("click", square9);
    document.querySelector(".square1").addEventListener("click", player);
    document.querySelector(".square2").addEventListener("click", player);
    document.querySelector(".square3").addEventListener("click", player);
    document.querySelector(".square4").addEventListener("click", player);
    document.querySelector(".square5").addEventListener("click", player);
    document.querySelector(".square6").addEventListener("click", player);
    document.querySelector(".square7").addEventListener("click", player);
    document.querySelector(".square8").addEventListener("click", player);
    document.querySelector(".square9").addEventListener("click", player);
    document.querySelector(".square1").addEventListener("click", winCondition);
    document.querySelector(".square2").addEventListener("click", winCondition);
    document.querySelector(".square3").addEventListener("click", winCondition);
    document.querySelector(".square4").addEventListener("click", winCondition);
    document.querySelector(".square5").addEventListener("click", winCondition);
    document.querySelector(".square6").addEventListener("click", winCondition);
    document.querySelector(".square7").addEventListener("click", winCondition);
    document.querySelector(".square8").addEventListener("click", winCondition);
    document.querySelector(".square9").addEventListener("click", winCondition);
    document.querySelector(".reset").addEventListener("click", reset);
    var i = 0;
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var n6 = 0;
    var n7 = 0;
    var n8 = 0;
    var n9 = 0;
    var gameEnd = false;
    var turn = i % 2;
    var player1Wins = 0;
    var player2Wins = 0;
    var player1WinLock = 0;
    var player2WinLock = 0;
    function reset() {
        i = 0;
        n1 = 0;
        n2 = 0;
        n3 = 0;
        n4 = 0;
        n5 = 0;
        n6 = 0;
        n7 = 0;
        n8 = 0;
        n9 = 0;
        gameEnd = false;
        turn = i % 2;
        player1WinLock = 0;
        player2WinLock = 0;
        document.querySelector(".square1").style.backgroundImage = "none";
        document.querySelector(".square2").style.backgroundImage = "none";
        document.querySelector(".square3").style.backgroundImage = "none";
        document.querySelector(".square4").style.backgroundImage = "none";
        document.querySelector(".square5").style.backgroundImage = "none";
        document.querySelector(".square6").style.backgroundImage = "none";
        document.querySelector(".square7").style.backgroundImage = "none";
        document.querySelector(".square8").style.backgroundImage = "none";
        document.querySelector(".square9").style.backgroundImage = "none";
        document.querySelector(".playerTurn").innerHTML = "It's Player 1's Turn (X)";
        document.querySelector(".player1Wins").innerHTML = "Player 1 (X) Has " + player1Wins + " " + "Wins";
        document.querySelector(".player2Wins").innerHTML = "Player 2 (O) Has " + player2Wins + " " + "Wins";
        
    }
    function player() {
        if (turn == 0 && gameEnd != true) {
            document.querySelector(".playerTurn").innerHTML = "It's Player 1's Turn (X)"; 
        } else if (turn == 1 && gameEnd != true) {
            document.querySelector(".playerTurn").innerHTML = "It's Player 2's Turn (O)";
        }
    }
    function square1() {
       if (turn == 0 && gameEnd != true && n1 == 0) {
           document.querySelector(".square1").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
           i++;
           turn = i % 2;
           n1 = 1;
       } else if (turn == 1 && gameEnd != true && n1 == 0) {
           document.querySelector(".square1").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
           i++;
           turn = i % 2;
           n1 = 2;
       }
    }
    function square2() {
        if (turn == 0 && gameEnd != true && n2 == 0) {
            document.querySelector(".square2").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n2 = 1;
        } else if (turn == 1 && gameEnd != true && n2 == 0) {
            document.querySelector(".square2").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n2 = 2;
        }
     }
     function square3() {
        if (turn == 0 && gameEnd != true && n3 == 0) {
            document.querySelector(".square3").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n3 = 1;
        } else if (turn == 1 && gameEnd != true && n3 == 0) {
            document.querySelector(".square3").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n3 = 2;
        }
     }
     function square4() {
        if (turn == 0 && gameEnd != true && n4 == 0) {
            document.querySelector(".square4").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n4 = 1;
        } else if (turn == 1 && gameEnd != true && n4 == 0) {
            document.querySelector(".square4").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n4 = 2;
        }
     }
     function square5() {
        if (turn == 0 && gameEnd != true && n5 == 0) {
            document.querySelector(".square5").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n5 = 1;
        } else if (turn == 1 && gameEnd != true && n5 == 0) {
            document.querySelector(".square5").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n5 = 2;
        }
     }
     function square6() {
        if (turn == 0 && gameEnd != true && n6 == 0) {
            document.querySelector(".square6").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n6 = 1;
        } else if (turn == 1 && gameEnd != true && n6 == 0) {
            document.querySelector(".square6").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n6 = 2;
        }
     }
     function square7() {
        if (turn == 0 && gameEnd != true && n7 == 0) {
            document.querySelector(".square7").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n7 = 1;
        } else if (turn == 1 && gameEnd != true && n7 == 0) {
            document.querySelector(".square7").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n7 = 2;
        }
     }
     function square8() {
        if (turn == 0 && gameEnd != true && n8 == 0) {
            document.querySelector(".square8").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n8 = 1;
        } else if (turn == 1 && gameEnd != true && n8 == 0) {
            document.querySelector(".square8").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n8 = 2;
        }
     }
     function square9() {
        if (turn == 0 && gameEnd != true && n9 == 0) {
            document.querySelector(".square9").style.backgroundImage = "url(Tic-Tac-Toe-X.png)";
            i++;
            turn = i % 2;
            n9 = 1;
        } else if (turn == 1 && gameEnd != true && n9 == 0) {
            document.querySelector(".square9").style.backgroundImage = "url(Tic-Tac-Toe-O.png)";
            i++;
            turn = i % 2;
            n9 = 2;
        }
     }
     function winCondition() {
     if (n1 == 1 && n2 == 1 && n3 == 1 || n4 == 1 && n5 == 1 && n6 == 1 || n7 == 1 && n8 == 1 && n9 == 1 || n1 == 1 && n4 == 1 && n7 == 1 || n2 == 1 && n5 == 1 && n8 == 1 || n3 == 1 && n6 == 1 && n9 == 1 || n1 == 1 && n5 == 1 && n9 == 1 || n3 == 1 && n5 == 1 && n7 == 1) {
        document.querySelector(".playerTurn").innerHTML = "Player 1 (X) Has Won";
        gameEnd = true;
         if (player1WinLock == 0) {
        player1Wins += 1;
        player1WinLock = 1;
         }
        }   
      else if (n1 == 2 && n2 == 2 && n3 == 2 || n4 == 2 && n5 == 2 && n6 == 2 || n7 == 2 && n8 == 2 && n9 == 2 || n1 == 2 && n4 == 2 && n7 == 2 || n2 == 2 && n5 == 2 && n8 == 2 || n3 == 2 && n6 == 2 && n9 == 2 || n1 == 2 && n5 == 2 && n9 == 2 || n3 == 2 && n5 == 2 && n7 == 2) {
        document.querySelector(".playerTurn").innerHTML = "Player 2 (O) Has Won"
        gameEnd = true;
          if (player2WinLock == 0) {
        player2Wins += 1;
        player1WinLock = 1;
          }
     } 
     else if (n1 != 0 && n2 != 0 && n3 != 0 && n4 != 0 && n5 != 0 && n6 != 0 && n7 != 0 && n8 != 0 && n9 != 0) {
        document.querySelector(".playerTurn").innerHTML = "It's A Draw"
        gameEnd = true
    }
    }
















}
