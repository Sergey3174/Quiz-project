import { useNavigate } from 'react-router-dom';
import { ItemHistoty } from './components';
import './main.css';

export const Main = () => {
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="buttons">
				<button onClick={() => navigate('/test')}>Запустить тест</button>
				<button onClick={() => navigate('/edit-test')}>Редактировать тест</button>
			</div>
			<div className="history">
				<h3>История Прохождений</h3>
				{Object.keys(localStorage).map((key) => {
					const { date, score, question } = JSON.parse(localStorage[key]);
					return (
						<ItemHistoty
							key={key}
							score={score}
							question={question}
							date={date}
						/>
					);
				})}
			</div>
		</div>
	);
};
