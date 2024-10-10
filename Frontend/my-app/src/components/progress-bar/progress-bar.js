import './progress-bar.css';

export const ProgressBar = ({ progress }) => {
	return (
		<div className="container-progress">
			<div className="filler" style={{ width: `${progress}%` }} />
		</div>
	);
};
