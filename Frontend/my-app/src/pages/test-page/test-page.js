import { useState } from 'react';
import './test-page.css';
import { Paginator, Result } from './components';

export const TestPage = ({ questions }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState(
		Array(questions.length).fill(''),
	);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	const handleOptionChange = (e) => {
		const updatedOptions = [...selectedOptions];
		updatedOptions[currentQuestion] = e.target.value;
		setSelectedOptions(updatedOptions);
	};

	const handleSubmit = () => {
		let calculatedScore = 0;
		selectedOptions.forEach((option, index) => {
			if (option === questions[index].correct) {
				calculatedScore += 1;
			}
		});
		setScore(calculatedScore);
		setShowResult(true);

		localStorage.setItem(
			`${Date.now()}`,
			JSON.stringify({
				score: calculatedScore,
				question: questions.length,
				date: new Date(),
			}),
		);
	};

	const reset = () => {
		setCurrentQuestion(0);
		setShowResult(false);
		setScore(0);
		setSelectedOptions(Array(questions.length).fill(''));
	};

	if (showResult) {
		return <Result score={score} question={questions.length} reset={reset} />;
	}

	return (
		<div className="test-container">
			<h2>Тест</h2>
			<div>
				<p>
					Вопрос {currentQuestion + 1} из {questions.length}
				</p>
				<h3>{questions[currentQuestion]?.question}</h3>
				<form>
					{questions[currentQuestion]?.options.map((option, idx) => (
						<label
							key={idx}
							style={{ display: 'block', marginBottom: '8px' }}
						>
							<input
								type="radio"
								name={`question-${currentQuestion}`}
								value={idx}
								checked={selectedOptions[currentQuestion] === String(idx)}
								onChange={handleOptionChange}
							/>
							{option}
						</label>
					))}
				</form>
			</div>

			<Paginator
				currentQuestion={currentQuestion}
				length={questions.length}
				handleSubmit={handleSubmit}
				setCurrentQuestion={setCurrentQuestion}
			/>
		</div>
	);
};
