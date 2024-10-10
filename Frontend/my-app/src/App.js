import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main, TestPage, EditTestPage } from './pages';
import { useEffect, useState } from 'react';

export const App = () => {
	const [questions, setQuestions] = useState([]);
	console.log(questions);
	useEffect(() => {
		fetch('http://localhost:3010/')
			.then((data) => data.json())
			.then((data) => setQuestions(data));
	}, []);
	return (
		<div className="container-app">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/test" element={<TestPage questions={questions} />} />
				<Route
					path="/edit-test"
					element={
						<EditTestPage questions={questions} setQuestions={setQuestions} />
					}
				/>
			</Routes>
		</div>
	);
};
