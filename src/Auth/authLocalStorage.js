const tokenHeaderKey = process.env.REACT_APP_TOKEN_HEADER_KEY;

const setUserToken = (token) => {
	localStorage.setItem(tokenHeaderKey, JSON.stringify(token));
};

export { setUserToken };
