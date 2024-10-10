import { useState } from 'react';

export const OptionInput = ({ option, newCorrect, id, handleCorrect, setNewOptions }) => {
	const [newOption, setNewOption] = useState(option);

	const handleOption = ({ target }) => {
		setNewOption(target.value);

		setNewOptions((prev) =>
			prev.map((option, idx) => (id === idx ? target.value : option)),
		);
	};

	const handleRemoveOption = () => {
		setNewOptions((prev) => prev.filter((_, idx) => idx !== id));
	};
	return (
		<div>
			<input required value={newOption} onChange={handleOption}></input>
			<label>
				<input
					type="radio"
					checked={newCorrect === String(id)}
					value={id}
					onChange={handleCorrect}
					required
				/>
			</label>
			<button onClick={handleRemoveOption}>Удалить</button>
		</div>
	);
};
