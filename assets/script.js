var question = $('#question')[0];
var choices = Array.from($('.choice-text'));
var highScore = $('#highscore')[0]
var currentQuestion = {}; 
var answers = false; 
var score = 0;
var questionCount = 0; 
var questionsLeft = [];
var correctPoints = 5
var totalQuestions= 10;
var questions = [
            {
                question: "Who is the all time leader for appearences for Manchester United?", 
                choice1: 'Paul Scholes', 
                choice2: 'Wayne Rooney', 
                choice3: 'Ryan Giggs', 
                choice4: 'Bobby Charlton',
                answer: 3

        },
        {
                question: "He left Man United in 2011 after making 393 appearances.", 
                choice1: 'John Oshea',
                choice2: 'Wes Brown',
                choice3: 'Rio Ferdinand',
                choice4: 'Paul Scholes',
                answer: 1
            
        }, 
        {
                question: "Who is the all time leading goal scorer for Manchester United?", 
                choice1: 'Wayne Rooney',
                choice2: 'Rudd Van Nisteroy',
                choice3: 'Andy Cole',
                 choice4: 'Bobby Charlton',
                answer: 1
            
        },
        {
                question: "Who is the youngest debutant for Manchester United?",
                choice1: 'Christiano Ronaldo',
                choice2: 'Angel Gomes',
                choice3: 'Duncan Edwards', 
                choice4: 'Ryan Giggs', 
                answer: 2 
            
        },
        {
                question: "George Best's country of birth?", 
                choice1: 'Ireland',
                choice2: 'Scotland',
                choice3: 'Northern Ireland', 
                choice4: 'England',
                answer: 3
            
        },
        {
                question: "Which club did Eric Cantona play for prior to joining United?", 
                choice1: 'Leeds United',
                choice2: 'Monaco',
                choice3: 'Tottenham', 
                choice4: 'Nantes', 
                answer: 1 
            
        },
        {
                question: "The last player Alex Ferguson signed for Man United?", 
                choice1: 'Sinji Kagawa',
                choice2: 'Bebe',
                choice3: 'Andy Cole',
                choice4: 'Wilfred Zaha',
                answer: 4
            
        },
        {
                question: "Which United Player missed his penalty in the 2008 Champions League Final?", 
                choice1: 'Ferdinand', 
                choice2: 'Christiano Ronaldo',
                choice3: 'Anderson', 
                choice4: 'Nani',
                answer: 2

            
        },
        {
                question: "Who is the most expensive Manchester United transfer of all time?", 
                choice1: 'Wayne Rooney',
                choice2: 'Harry Maguire',
                choice3: 'Paul Pogba',
                choice4: 'Angel Di Maria',
                answer: 3
        
        },
        {
                question: "What year did Sir Alex Ferguson retire?", 
                choice1: '2016',
                choice2: '2012',
                choice3: '2013', 
                choice4: '2014', 
                answer: 3 
        }];

$(document).ready(function() {

        
    scoreAdd = number => {
        var number = score += number; 
        $('#highscore').text(score)
    }; 
    

    function startQuiz() {
        questionCount = 0; 
        score = 0; 
        for (var i = 0; i <= questions.length; i++){
            questionsLeft = questions
        }; 
        newQuestion(); 
    };
    function newQuestion() {
        if(questionsLeft.length === 0 || questionCount >= totalQuestions) {
            localStorage.setItem('recentScore', score);
            return window.location.assign('scores.html');
        };
       
        var questionInd = Math.floor(Math.random() * questionsLeft.length); 
        currentQuestion = questionsLeft[questionInd]; 
       $('#question').text(currentQuestion.question);
      

       choices.forEach(choice => {
       const number = choice.dataset['number']; 
           choice.innerText = currentQuestion['choice' + number]; 
       }); 
       
       questionsLeft.splice(questionInd, 1)
       answers = true; 
    }; 

    choices.forEach(choice => {
        choice.addEventListener('click', event => {
            if (!answers) return; 
            answers = false; 
            var seletedChoice= event.target
            var answerSelected = seletedChoice.dataset['number']; 
           
            var appliedClass = 'wrong'; 
            if (answerSelected == currentQuestion.answer) {
                appliedClass = 'right'; 
            }; 
            seletedChoice.parentElement.classList.add(appliedClass)

            $('#next-btn').on('click', function () {
                newQuestion()
                seletedChoice.parentElement.classList.remove(appliedClass)
            }); 

            if (appliedClass === 'right') {
                scoreAdd(correctPoints); 
            }
        });
    }); 
startQuiz()
}); 