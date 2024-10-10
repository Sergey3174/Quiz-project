import { useState } from 'react';

import { QuestionForm, QuestionItem } from './components';
import './edit-test-page.css';
import { useNavigate } from 'react-router-dom';

export const EditTestPage = ({ questions, setQuestions }) => {
	const [editing, setEditing] = useState(false);
	const navigate = useNavigate();
	const cancel = () => {
		setEditing((prev) => !prev);
	};
	return (
		<div className="edit-page-container">
			{questions.map((question, id) => (
				<div key={question._id}>
					<span>Вопрос {id + 1}</span>
					<QuestionItem questionObj={question} setQuestions={setQuestions} />
				</div>
			))}
			{editing ? (
				<>
					<span>Вопрос {questions.length + 1}</span>
					<QuestionForm
						setQuestions={setQuestions}
						cancel={cancel}
						type="create"
					/>
				</>
			) : (
				<button onClick={() => setEditing((prev) => !prev)}>+</button>
			)}

			<button onClick={() => navigate(-1)}>на главную</button>
		</div>
	);
};
