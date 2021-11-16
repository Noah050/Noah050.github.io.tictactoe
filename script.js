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
    document.querySelector("#p1Color").addEventListener("change", p1Color);
    document.querySelector("#p2Color").addEventListener("change", p2Color);
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
    function p1Color() {
      var c1 = document.querySelector("#p1Color").value;
      var x, i;
      x = document.querySelectorAll(".bx-x");
      for (i = 0; i < x.length; i++) {
      x[i].style.color = c1;
        }
    }   
    function p2Color() {
        var c2 = document.querySelector("#p2Color").value;
        var x, i;
        x = document.querySelectorAll(".bx-circle");
        for (i = 0; i < x.length; i++) {
        x[i].style.color = c2;
          }
      } 
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
        var x, l;
        x = document.getElementsByTagName("i");
        for (l = 0; l < x.length; l++) {
            x[l].style.fontSize = "0px";
        }
        document.querySelector(".playerTurn").innerHTML = "It's Player 1's Turn (X)";
        document.querySelector(".player1Wins").innerHTML = player1Wins + " " + "Wins";
        document.querySelector(".player2Wins").innerHTML = player2Wins + " " + "Wins";
        
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
           document.querySelector(".x1").style.fontSize = "110px";
           i++;
           turn = i % 2;
           n1 = 1;
       } else if (turn == 1 && gameEnd != true && n1 == 0) {
           document.querySelector(".o1").style.fontSize = "85px";
           i++;
           turn = i % 2;
           n1 = 2;
       }
    }
    function square2() {
        if (turn == 0 && gameEnd != true && n2 == 0) {
            document.querySelector(".x2").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n2 = 1;
        } else if (turn == 1 && gameEnd != true && n2 == 0) {
            document.querySelector(".o2").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n2 = 2;
        }
     }
     function square3() {
        if (turn == 0 && gameEnd != true && n3 == 0) {
            document.querySelector(".x3").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n3 = 1;
        } else if (turn == 1 && gameEnd != true && n3 == 0) {
            document.querySelector(".o3").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n3 = 2;
        }
     }
     function square4() {
        if (turn == 0 && gameEnd != true && n4 == 0) {
            document.querySelector(".x4").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n4 = 1;
        } else if (turn == 1 && gameEnd != true && n4 == 0) {
            document.querySelector(".o4").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n4 = 2;
        }
     }
     function square5() {
        if (turn == 0 && gameEnd != true && n5 == 0) {
            document.querySelector(".x5").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n5 = 1;
        } else if (turn == 1 && gameEnd != true && n5 == 0) {
            document.querySelector(".o5").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n5 = 2;
        }
     }
     function square6() {
        if (turn == 0 && gameEnd != true && n6 == 0) {
            document.querySelector(".x6").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n6 = 1;
        } else if (turn == 1 && gameEnd != true && n6 == 0) {
            document.querySelector(".o6").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n6 = 2;
        }
     }
     function square7() {
        if (turn == 0 && gameEnd != true && n7 == 0) {
            document.querySelector(".x7").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n7 = 1;
        } else if (turn == 1 && gameEnd != true && n7 == 0) {
            document.querySelector(".o7").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n7 = 2;
        }
     }
     function square8() {
        if (turn == 0 && gameEnd != true && n8 == 0) {
            document.querySelector(".x8").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n8 = 1;
        } else if (turn == 1 && gameEnd != true && n8 == 0) {
            document.querySelector(".o8").style.fontSize = "85px";
            i++;
            turn = i % 2;
            n8 = 2;
        }
     }
     function square9() {
        if (turn == 0 && gameEnd != true && n9 == 0) {
            document.querySelector(".x9").style.fontSize = "110px";
            i++;
            turn = i % 2;
            n9 = 1;
        } else if (turn == 1 && gameEnd != true && n9 == 0) {
            document.querySelector(".o9").style.fontSize = "85px";
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
        player2WinLock = 1;
          }
     } 
     else if (n1 != 0 && n2 != 0 && n3 != 0 && n4 != 0 && n5 != 0 && n6 != 0 && n7 != 0 && n8 != 0 && n9 != 0) {
        document.querySelector(".playerTurn").innerHTML = "It's A Draw"
        gameEnd = true
    }
    }
















}
