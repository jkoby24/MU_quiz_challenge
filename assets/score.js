var username = $('#username')[0];
var saveScore = $('#save-score')[0]; 
var final = $('#final')[0];
var recentScore = localStorage.getItem('recentScore');

final.innerText = recentScore; 

var highScore = JSON.parse(localStorage.getItem('highscore')) || []; 


$('#username').on('keyup', function(){
    saveScore.disabled = !username.value;
}); 

$('#save-score' ).on('click', function(){
    var score = {
    score: recentScore, 
    name: username.value,
 };
 highScore.push(score); 
 console.log(highScore)
       
}); 