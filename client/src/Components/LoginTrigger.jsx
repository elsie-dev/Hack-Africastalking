import React from "react";
import { useGlobalContext } from "../context/context";

const LoginTrigger = () => {
	const [trigger, setTrigger] = React.useState(false);
	const { user } = useGlobalContext();
	const prevUser = React.useRef();

	React.useEffect(() => {
		prevUser.current = user?.email;
	}, [user]);

	// if there is a user state change a user is now signed in, trigger the element for a second
	if (user?.email && !prevUser.current && !trigger) {
		setTrigger(true);
		setInterval(() => {
			setTrigger(false);
		}, 5000);
	}
	return trigger ? <div id="login-event" /> : "";
};

export default LoginTrigger;
