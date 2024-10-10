import { ProgressBar } from '../../../../components';
import './item-history.css';
export const ItemHistoty = ({ date, score, question }) => {
	return (
		<div className="item-container">
			<div>
				{new Date(date).toLocaleDateString('ru-RU', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					timeZone: 'UTC',
				})}
			</div>
			<ProgressBar progress={(score / question) * 100} />
			<div>
				Выполнено {score} из {question}
			</div>
		</div>
	);
};
