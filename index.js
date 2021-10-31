var p1Score = 0;
var p2Score = 0;
var ties = 0;
var turn = 1;

function checkWinX() {
    if ($(".row-1 .box.X").length === 3
    || $(".row-2 .box.X").length===3
    || $(".row-3 .box.X").length===3
    || $(".col-1.X").length===3
    || $(".col-2 .box.X").length===3
    || $(".col-3 .box.X").length===3
    || $("#1").hasClass("X") 
        && $("#5").hasClass("X")
        && $("#9").hasClass("X")
    || $("#3").hasClass("X") 
        && $("#5").hasClass("X")
        && $("#7").hasClass("X")    
        ) {
        return true
    }
}

function checkWinO() {
    if ($(".row-1 .box.O").length === 3
    || $(".row-2 .box.O").length===3
    || $(".row-3 .box.O").length===3
    || $(".col-1.O").length===3
    || $(".col-2 .box.O").length===3
    || $(".col-3 .box.O").length===3
    || $("#1").hasClass("O") 
        && $("#5").hasClass("O")
        && $("#9").hasClass("O")
    || $("#3").hasClass("O") 
        && $("#5").hasClass("O")
        && $("#7").hasClass("O")    
        ) {
        return true
    }
}

function checkTie(){
    if ($(".X").length + $(".O").length === 9){
        $(".box").empty();
        $(".X").removeClass("X")
        $(".O").removeClass("O")
        ties+=1
        $("#tie").text(ties)

    }
}


$(".box").click(function () {
    if (turn === 1) {
        $(this).text("X")
        $(this).addClass("X")
        turn = 2
        $("#turn").text("2")
        if (checkWinX()){
            p1Score++;
            $("#p-1-wins").text(p1Score)
            $(".box").empty();
            $(".X").removeClass("X")
        }
        else checkTie()
    }
    else {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1
        $("#turn").text("1")
        if (checkWinO()){
            p2Score++;
            $("#p-2-wins").text(p2Score)
            $(".box").empty();
            $(".O").removeClass("O")
        }
        else checkTie()
    }
    

})
