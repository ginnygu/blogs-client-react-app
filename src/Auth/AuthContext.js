import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { loginUser } from "./authUtils";
import { setUserToken, getUserToken } from "./authLocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [shouldRefresh, setshouldRefresh] = useState(false);
	useEffect(() => {
		const userToken = getUserToken();
		if (userToken) {
			setUser(userToken);
		}
	}, [shouldRefresh]);

	const login = async (data) => {
		setshouldRefresh(true);
		const loginResult = await loginUser(data);
		if (loginResult.success) {
			setUserToken(loginResult.token);
			setshouldRefresh(false);
			return loginResult.success;
		} else {
			setshouldRefresh(false);
			return loginResult.success;
		}
	};
	const value = useMemo(
		() => ({
			user,
			login,
		}),
		[user]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
	return useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuth };
