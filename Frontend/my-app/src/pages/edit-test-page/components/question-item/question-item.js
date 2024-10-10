import { useState } from 'react';
import './question-item.css';
import { QuestionForm } from '../question-form/question-form';

export const QuestionItem = ({ questionObj, setQuestions }) => {
	const [edit, setEdit] = useState(false);
	const { question, options, correct, _id } = questionObj;
	const cancel = () => setEdit((prev) => !prev);

	const handleRemove = () => {
		fetch(`http://localhost:3010/${_id}`, { method: 'DELETE' });
		setQuestions((prev) => prev.filter((item) => item._id !== _id));
	};
	return (
		<>
			{edit ? (
				<QuestionForm
					question={question}
					options={options}
					correct={correct}
					cancel={cancel}
					id={_id}
					setQuestions={setQuestions}
					type="edit"
				/>
			) : (
				<div className="question-container">
					<span>{question}</span>
					<div>
						<button onClick={() => setEdit((prev) => !prev)}>Изменить</button>
						<button onClick={handleRemove}>Удалить</button>
					</div>
				</div>
			)}
		</>
	);
};
