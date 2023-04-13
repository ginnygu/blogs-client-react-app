import { Link } from "react-router-dom";
function NavBar() {
	return (
		<nav>
			<Link to="/">Home</Link>
			{"    "}
			<Link to="/blog-form">Create New Blog</Link>
		</nav>
	);
}
//es6 syntax
export default NavBar;
//module.exports es5 syntax
