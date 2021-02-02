'use strict'

function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}


var round = 1;
var userScore = 0;
var compScore = 0;
function roundup(){
    round ++;
    return round;
}
function userWin(){
    userScore ++;
    return userScore;
}
function compWin(){
    compScore ++;
    return compScore;
}
document.querySelectorAll('input[type="button"]').forEach(element => {
    element.addEventListener('click', () => player(element.value))
});

function computerPlay() {
    let r = 'Rock';
    let p = 'Paper';
    let s = 'Scissor'
    let num = parseInt(Math.random()*10);
    if(num%3===0){
        return r;
    }
    else if(num%2===0){
        return p;
    }
    else if(num%1===0){
        return s;
    }
}

function player(input) {
    let comp = computerPlay(),
    result = '';

    console.log('Computer said: '+comp);

    console.log('You said : ' + input);

    if(comp === 'Rock' && input == 'Rock'){
        result = 'Shit!! you Draw this Round!!!';

    }
    else if(comp === 'Rock' && input == 'Scissor'){
        result = 'You Lose';
        compWin();
    }
    else if(comp === 'Rock' && input == 'Paper'){
        result = 'Noooo!! you Won';
        userWin();
    }
    else if(comp === 'Paper' && input == 'Rock'){
        result = 'You lose! Paper always beats Rock';
        compWin();
    }
    else if(comp === 'Paper' && input == 'Scissor'){
        result = 'You are a WinNNEr';
        userWin();
    }
    else if(comp === 'Paper' && input == 'Paper'){
        result = 'Draw';
    }
    else if(comp === 'Scissor' && input == 'Rock'){
        result = 'Rocked it!! Victory';
        userWin();
    }
    else if(comp === 'Scissor' && input == 'Scissor'){
        result = 'Draw';
    }
    else if(comp === 'Scissor' && input == 'Paper'){
        result = 'You are a Losser';
        compWin();
    }
    else {
        result = 'Choose Wisely';
    }
    document.getElementById('round').innerHTML = 5- round;
    document.getElementById('computerScore').innerHTML = compScore;
    document.getElementById('userScore').innerHTML = userScore;
    console.log(compScore);
    console.log( userScore+ " Times");
    console.log(roundup());
    console.log(result);
    document.getElementById('computer').innerHTML = result;
    document.getElementById('compchoose').innerHTML = comp;
    declare();
    gameover();
}

function declare(){
    if(round === 6){
        document.getElementById('selection').innerHTML = "GAME OVER One more round??"+'<br><br><button id="btn" name="btn" onClick="refresh(this)">Retry</button>';

    }
}
function refresh(){
    window.location.reload("Refresh")
  }

function gameover(){
    if(round == 6){
    if(userScore>compScore){
        document.getElementById('computer').innerHTML = " Well This time you managed to DEFEAT me, but it won't happen again 😕";
    }
    else if(compScore>userScore){
        document.getElementById('computer').innerHTML = "Told you HUMANS can Never defeat Computer 🥳🥳🥳";
    }
    else{
        document.getElementById('computer').innerHTML = "You Draw the match or I you never know 😜";
    }
}
}

