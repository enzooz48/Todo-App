import { ToastContainer } from 'react-toastify';
import ListTodo from './components/ListTodo';

function App() {
	return (
		<>
			<div className="App">
				<ListTodo />
			</div>

			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default App;
