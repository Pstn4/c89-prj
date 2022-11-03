player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
questionturn="player1";
answerturn="player2";

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("Question").innerHTML="Question turn- "+player1_name;
document.getElementById("Answer").innerHTML="Answer turn- "+player2_name;
function send()
{
    get_num1=document.getElementById("num1").value;
    
    get_num2=document.getElementById("num2").value;
    C_answer=get_num1*get_num2;
    console.log(C_answer);



    questionword="<h4 >"+get_num1+" X "+get_num2+"</h4>";
    inputbox="<br>Answer : <input type='number' id='input_checkbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check!</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

