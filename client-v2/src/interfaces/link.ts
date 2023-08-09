import type { Icon } from "iconsax-react";

export interface link {
	title: string;
	href: string;
	buttonType?: "contained" | "outlined" | "text";
	icon?: Icon;
}

export interface column {
	title: string;
	links: link[];
}

export interface menuItemProps {
	active?: boolean | any;
	title: string;
	icon?: Icon;
	iconVariant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
	href?: string;
	onClick?: () => void;
}
