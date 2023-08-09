import { MuiColorProps } from "../interfaces/pages";

const colors = (mode: string = "light") => {
	if (mode)
		return {
			card: {
				first: "#FF0000",
				second: "#0652DD",
				third: "#FFB800",
				fourth: "#00FF91",
			},
			text: {
				white: "#FCFCFC",
				placeHolder: "#BABABA",
				whiteBody: "#E3E3E3",
			},
			background: {
				default2: "#FEE3E3",
			},
			primary: {
				lightest: "#CDDCF8",
				extraLight: "#F1F6FF",
			},
			stroke: {
				light: "#CAD0DD",
			},
		};
};

const pxToRem = (px: number) => `${px / 16}rem`;

const remToPx = (rem: number) => `${rem * 16}px`;

const getColor = (
	color: MuiColorProps | undefined,
	theme: any,
	fallBack: string = ""
) => {
	return color ? theme.palette[color]?.main : fallBack;
};

export { colors, pxToRem, remToPx, getColor };
