import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
