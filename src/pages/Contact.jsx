import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Reserved from '../Reserved';

export default function Contact() {
	return (
		<main style={{ background: 'grey' }}>
			<h1
				style={{
					color: 'black',
					textAlign: 'center',
					transform: 'translateY(150px)',
				}}
			>
				Contact Page
			</h1>

			<div className="container">
				<Reserved />
			</div>
		</main>
	);
}
