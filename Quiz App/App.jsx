import { useRef, useState } from 'react'
import './App.css'

function App() {

   const [currentIndex, setCurrentIndex] = useState(0)
   const [score, setScore] = useState(0)
  const questions = [
    {
        question: "Which is the biggest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ],
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "Which ocean is the smallest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: true },
            { text: "Pacific Ocean", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Yuri Gagarin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the smallest unit of life?",
        answers: [
            { text: "Cell", correct: true },
            { text: "Atom", correct: false },
            { text: "Molecule", correct: false },
            { text: "Organ", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        answers: [
            { text: "Silver", correct: false },
            { text: "Gold", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Uranium", correct: false }
        ]
    }
]  
const option1 = useRef()
const option2 = useRef()
const option3 = useRef()
const option4 = useRef()
const references = [option1, option2, option3, option4]

const handleCorrect = (currentOption) => {
   const isCorrect = questions[currentIndex].answers[currentOption].correct;
   const selectedButton = references[currentOption].current;

   if (isCorrect) {
      setScore(score + 1);
      selectedButton.classList.add("correct");
   } else {
      selectedButton.classList.add("wrong");
      const correctButton = references.find(ref => ref.current && ref.current.innerText === questions[currentIndex].answers.find(a => a.correct).text).current;
      correctButton.classList.add("correct");
   }

   setTimeout(() => {
      references.forEach(ref => {
         if (ref.current) {
            ref.current.classList.remove("correct", "wrong");
         }
      });
   }, 1000);

   if (currentIndex === questions.length -1) {
      alert(`Game Over! You scored ${score + (isCorrect ? 1 : 0)} out of ${questions.length}.`);
   }
}

const handleNext = () => {
   if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
   }
}

return (
   <>
      <div className="app">
         <h1>Simple Quiz</h1>
         <h2>{`${currentIndex + 1}. ${questions[currentIndex].question}`}</h2>
         <div className="quiz">
            <div className="answerButtons">
               {questions[currentIndex].answers.map((answer, index) => (
                  <button
                     key={index}
                     ref={references[index]}
                     className="btn"
                     onClick={() => handleCorrect(index)}
                  >
                     {answer.text}
                  </button>
               ))}
            </div>
         </div>
         <button className="next" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
