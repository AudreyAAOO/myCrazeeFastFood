import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Home from "./components/pages/login/Home";
import OrderPage from "./components/pages/order/OrderPage";
import Page404 from "./components/pages/error/Page404";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/orderpage/:username" element={<OrderPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
