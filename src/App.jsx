import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Home from "./views/Home";
import Page404 from "./views/Page404";

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
