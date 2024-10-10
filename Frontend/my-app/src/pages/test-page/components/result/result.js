import { useNavigate } from 'react-router-dom';
import './result.css';

export const Result = ({ score, question, reset }) => {
	const navigate = useNavigate();
	return (
		<div className="container-result">
			<h2>Результаты теста</h2>
			<p>
				Вы ответили правильно на {score} из {question} вопросов.
			</p>
			<button onClick={() => navigate('/')}>На Главную</button>
			<button onClick={reset}>Пройти заново</button>
		</div>
	);
};
