// In-memory database of questions
const questionBank = [
    {
        number: 1,
        text: 'Name the Bible verse Jules Winnfield likes to recite in "Pulp Fiction":',
        cho1: 'Genesis 3:8',
        cho2: '1 Thessalonians 5:11',
        cho3: 'Ezekiel 25:17',
        cho4: 'Ezra 9:9'
 
    },

    {
        number: 2,
        text: 'In "Formula 51, Elmo McElroy wears this signature piece of clothing:',
        cho1: 'a kilt',
        cho2: 'an ascot',
        cho3: 'knee high socks',
        cho4: 'nothing - Elmo prefers nudity'
 
    },

    {
        number: 3,
        text: 'In "Jumper", Roland belongs to a group called:',
        cho1: 'The Knights Templar',
        cho2: 'The White Knights',
        cho3: 'The Jumpers',
        cho4: 'The Paladins'
 
    },

    {
        number: 4,
        text: 'In "Captain Marvel", where did Nick Fury say he was born?',
        cho1: 'Latveria',
        cho2: 'Huntsville, Alabama',
        cho3: 'Orange County, California',
        cho4: 'Detroit, Michigan'
 
    },

    {
        number: 5,
        text: "What does Elijah Price's mother use to get Elijah out of the house?",
        cho1: 'comic books',
        cho2: 'GI Joes',
        cho3: 'basketball cards',
        cho4: 'new sneakers'
 
    }
];

const answers = [
        'Ezekiel 25:17',
        'a kilt',
        'The Paladins',
        'Huntsville, Alabama',
        'comic books'

];

/*const view1 = `
  <div>
    <h1>View 1</h1>
    <button id='view1'>Change View</button>
  </div>
`

const view2 = `
<form>
    <label for="question1">${STORE.number.text}:
    <input type="checkbox" name="question1">
</form>
`;

console.log(STORE.number.text);
function render() {
    $('#container').html(STORE.currentView)
}

function addListeners() {
    $('#container').on('click', '#view1', function() {
    STORE.currentView = view2
    render()
})

$('#container').on('click', '#view2', function() {
    STORE.currentView = view1
    render()
  })
}

render()
addListeners()*/

//renderQuestion creates the template of each question as well as score counter
function questionTemplate(correctAnswers, question, questionsAnswered) {
    return `
      <section id="question-page" role="main">
      <h2 id="question">${question.text}</h2>
      
      <form>
        <fieldset>
          <label>
            <input class="answer" type="radio" name="option" checked></input>
            <span>${question.ans1}</span>
          </label>
    
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans2}</span>
          </label>
    
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans3}</span>
          </label>
    
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans4}</span>
          </label>
        </fieldset>  
        <button id="js-submit-button">Submit</button>
  
      </form>
  
      <div id="status-bar">
        <span id="question-count">Question: ${question.number}/10</span>
        <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
      </div>
    </section>
    `;
}



/* Create your initial store
const STORE = {
    // Current question
    // User's answer choice(s)
    // Current view
    // Score? Anything else?
    currentView: 
    
};*/

/* Template generators
function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

function render() {
    if (store.view === 'start') {
      $('.intro').show();
      $('.quiz').hide();
      $('.status').hide();
    } else if (store.view === 'quiz') {
      $('.intro').hide();
      $('.quiz').show();
      $('.status').show();
    }
  }*/

/*$(function(){
    handleAnswerSubmitted();
});*/


//when the start quiz button is clicked, the initial start page vanishes
//and the first question appears in the 
function handleStartQuizButton() {
    $('#start-quiz-button').click(function(event) {
        console.log("handleStartQuizButton method ran");
    });
}

handleStartQuizButton();

