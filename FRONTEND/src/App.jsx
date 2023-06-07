import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Areas from './pages/Areas/Areas.jsx';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/areas' exact element={<Areas />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
