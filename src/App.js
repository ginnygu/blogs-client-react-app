import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Blogs from "./components/Blogs";

//jsx mixture html, javascript, css
//App it the top layer of components
//all returns have to be in one set of tags
function App() {
	return (
		<div className="App">
			<NavBar />
			<Blogs />
		</div>
	);
}

export default App;
