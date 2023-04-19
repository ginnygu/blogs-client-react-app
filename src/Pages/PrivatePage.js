import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { verifyUser } from "../Auth/authUtils";
import { useAuth } from "../Auth/AuthContext";

export default function PrivatePage() {
	const [isVerified, setIsVerified] = useState(false);
	const { user } = useAuth();
	useEffect(() => {
		const responseFetch = async () => {
			const verifiedUser = await verifyUser(user);
			if (verifiedUser.success) setIsVerified(true);
		};
		responseFetch();
	}, [user]);
	return (
		<div>{isVerified ? <Outlet /> : <div> Please Login to see Blogs</div>}</div>
	);
}
