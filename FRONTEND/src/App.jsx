import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
