import { Link } from "react-router-dom";
function NavBar() {
	return (
		<nav>
			<Link to="/home">Home</Link>
			{"    "}
			<Link to="/home/blog-form">Create New Blog</Link>
			{"    "}
			<Link to="/register">Register</Link>
			{"    "}
			<Link to="/login">Login</Link>
		</nav>
	);
}
//es6 syntax
export default NavBar;
//module.exports es5 syntax
