import React, { useState } from 'react'
import './App.css'

export default function App() {
	
	const [currentIndex, setCurrentIndex] = useState(0)

	const questions = [
		{
			questionText: 'What is the capital of France?',
             questionNo:'1',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
             questionNo:'2',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
            questionNo:'3',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
             questionNo:'4',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Hello there',
             questionNo:'5',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: 'hi', isCorrect: true },
			],
		},
	]

	function handleAnswerClick(isCorrect) {
        if(isCorrect){
            setScore(
                (score)=> score +1);
        }
		if (currentIndex === questions.length - 1) {
			setQuizFinished(true)
		} else {
			setCurrentIndex((value) => value + 1)
		}
	}

	const [quizFinished, setQuizFinished] = useState(false)
    const [score, setScore] = useState(0)

	return (
		<div className="container">
		<div className="content">
			{quizFinished ? (
				<h1><div className="score-section">
					You scored {score} out of {questions.length} 🥳
				</div>
				</h1>
			) : (
				<>
					<h1><div className="question-section">
						<div className="question-count">
							<span>Question {questions[currentIndex].questionNo}</span>/{questions.length}
						</div>
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					</h1>
					<div className="answer-section">
						{questions[currentIndex].answerOptions.map((answer) => {
							
							return (
					            <h2>
								<button className='butn'
									onClick={()=>handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
								</h2>
							)
						})}
					</div>
				</>
			)}
		</div>
		</div>
	)
}
