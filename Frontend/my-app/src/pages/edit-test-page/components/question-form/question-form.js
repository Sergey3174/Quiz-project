import { useState } from 'react';
import './question-form.css';
import { OptionInput } from './components';

export const QuestionForm = ({
	question = '',
	options = [],
	correct = '',
	cancel,
	id = '',
	setQuestions,
	type,
}) => {
	const [newQuestion, setNewQuestion] = useState(question);
	const [newOptions, setNewOptions] = useState(options);
	const [newCorrect, setNewCorrect] = useState(correct);
	const [error, setError] = useState(null);

	const handleQuestion = ({ target }) => setNewQuestion(target.value);

	const handleCorrect = ({ target }) => setNewCorrect(target.value);

	const addNewOption = (e) => {
		e.preventDefault();
		setNewOptions([...newOptions, '']);
	};

	const handleSaveQuestion = (e) => {
		e.preventDefault();
		const newQuestionObj = {
			question: newQuestion,
			options: newOptions,
			correct: newCorrect,
		};

		if (!newCorrect) {
			setError('Выберите правильный ответ');
			return;
		}

		if (type === 'edit') {
			fetch(`http://localhost:3010/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ newQuestionObj }),
			});

			setQuestions((prev) =>
				prev.map((item) =>
					item._id === id ? { ...newQuestionObj, _id: id } : item,
				),
			);
		} else if (type === 'create') {
			fetch('http://localhost:3010/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newQuestionObj),
			})
				.then((res) => res.json())
				.then((_id) =>
					setQuestions((prev) => [...prev, { ...newQuestionObj, _id }]),
				);
		}
		cancel();
	};

	return (
		<>
			<div className="form-container">
				<form onSubmit={handleSaveQuestion}>
					<input
						placeholder="Введите вопрос"
						value={newQuestion}
						onChange={handleQuestion}
						required
					></input>

					<div>
						Варианты ответов
						{newOptions.map((option, id) => (
							<OptionInput
								key={id}
								option={option}
								newCorrect={newCorrect}
								id={id}
								handleCorrect={handleCorrect}
								setNewOptions={setNewOptions}
							/>
						))}
						<button onClick={addNewOption}>Добавить вариант ответа</button>
					</div>

					{error && <div>{error}</div>}
					<button onClick={cancel}>Отмена</button>
					<button type="submit">Сохранить</button>
				</form>
			</div>
		</>
	);
};
