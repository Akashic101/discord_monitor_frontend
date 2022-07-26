import './App.css';
import AllUsers from './pages/allUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/errorPage';
import HomePage from './pages/homepage';
import SingleUser from './pages/singleUser';
import AllChannels from './pages/allChannels';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="user" element={<AllUsers />} />
				<Route path="/user/:userid" element={<SingleUser />} />
				<Route path="channel" element={<AllChannels />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>

	)
}

export default App;
