import { useState } from "react";
import { loginUser } from "../Auth/authUtils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(useAuth());

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const userData = {
			email: email,
			password: password,
		};
		const loginResult = await loginUser(userData);
		if (loginResult.success) {
			console.log(loginResult);
			navigate("/");
		}
	};
	return (
		<div>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<label htmlFor="password">Password:</label>
			<input
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Login</button>
		</div>
	);
}
