import axios from "axios";
const url = "http://localhost:5001";

const registerUser = async (userData) => {
	const response = await axios.post(`${url}/users/register`, userData);
	return response.data.success;
};
const loginUser = async (userData) => {
	const response = await axios.post(`${url}/users/login`, userData);
	return response.data;
};

export { registerUser, loginUser };
