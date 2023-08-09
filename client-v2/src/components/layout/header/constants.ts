import { link } from "../../../interfaces/link";

const menu: link[] = [
	{
		title: "Features",
		href: "/features",
	},
	{
		title: "Pricing",
		href: "/pricing",
	},
	{
		title: "About Us",
		href: "/about",
	},
	{
		title: "Contact Us",
		href: "/contact",
	},
];

const authButtons: link[] = [
	{
		title: "Sign In",
		href: "/login",
		buttonType: "outlined",
	},
	{
		title: "Register",
		href: "/register",
		buttonType: "contained",
	},
];

export { menu, authButtons };
