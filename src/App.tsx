import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
