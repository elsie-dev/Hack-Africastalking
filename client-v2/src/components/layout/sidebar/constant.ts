import { Home2, ProfileTick, Setting, Timer } from "iconsax-react";
import { link } from "../../../interfaces/link";

export const drawerWidth = 280;

export const sidebarMenu: link[] = [
	{
		title: "Overview",
		href: "/dashboard",
		icon: Home2,
	},
	// {
	// 	title: "Profile",
	// 	href: "/dashboard/profile",
	// 	icon: ProfileTick,
	// },
	{
		title: "History",
		href: "/dashboard/history",
		icon: Timer,
	},
	{
		title: "Settings",
		href: "/dashboard/settings",
		icon: Setting,
	},
];
