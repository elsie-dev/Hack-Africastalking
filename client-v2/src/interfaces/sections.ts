import { ReactElement } from "react";

// HERO SECTIONS

export interface heroProps {
	heading: string;
	subHeading: string;
}

export interface subHeadingProps {
	children: string;
}

// SIDE IMAGE SECTIONS

export interface sideImageSectionProps {
	img?: string;
	preHeading?: string;
	heading?: string;
	body?: string | ReactElement;
	bgcolor?: string;
	bodyColor?: string;
	headingColor?: string;
	btn?: string;
	align?: "left" | "right";
	imageContainer?: boolean;
	disableBound?: boolean;
	imageHeight?: string | number;
	imageFit?: "contain" | "cover";
}

// ACCORDION COMPONENT

export interface CustomAccordionItemProps {
	heading: string;
	body: string | ReactElement;
}

export interface CustomAccordionProps {
	content: CustomAccordionItemProps[];
}

// NEED HELP SECTION

export interface NeedHelpProps {
	variant?: 1 | 2;
	sx?: object;
}

// CUSTOM CHARTS
export interface CustomChartProps {
	data?: any[];
	loading?: boolean;
	valueField?: string;
	argumentField?: string;
	legendPosition?: "top" | "bottom" | "left" | "right";
}

// SETTINGS PAGE
export interface ActiveSectionProps {
	active?: boolean;
}
