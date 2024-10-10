export const Paginator = ({
	currentQuestion,
	length,
	handleSubmit,
	setCurrentQuestion,
}) => {
	return (
		<div style={{ marginTop: '20px' }}>
			<button
				onClick={() => setCurrentQuestion((prev) => prev - 1)}
				disabled={currentQuestion === 0}
				style={{ marginRight: '10px' }}
			>
				Назад
			</button>

			{currentQuestion < length - 1 && (
				<button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
					Далее
				</button>
			)}
			{currentQuestion === length - 1 && (
				<button onClick={handleSubmit}>Завершить тест</button>
			)}
		</div>
	);
};
