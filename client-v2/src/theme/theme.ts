import { Palette, PaletteOptions } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material/styles/createTypography";
import { pxToRem } from "./constants";

declare module "@mui/material/styles" {
	interface Theme {
		palette: Palette;
		typography: Typography;
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		palette?: PaletteOptions;
	}
}

const theme = createTheme({
	palette: {
		mode: "dark",
		common: {
			black: "#19192B",
			white: "#ffffff",
		},
		primary: {
			light: "#B3E5FC",
			main: "#0652DD",
			dark: "#03296F",
			contrastText: "#FEFEFE",
		},
		secondary: {
			light: "#03296F7A",
			main: "#6D6D6D",
			dark: "#101010",
			contrastText: "#FEFEFE",
		},
		background: {
			default: "rgb(242 242 247)",
			paper: "#FFF",
		},
		text: {
			secondary: "#6D6D6D",
			primary: "#101010",
			disabled: "#757575",
		},
		grey: {
			"100": "#DCDCDC",
			"200": "#C5C5C5",
			"300": "#8A8A8A",
			"400": "#6D6D6D",
			"500": "#434343",
			"600": "#353535",
			"700": "#282828",
			"800": "#101010",
		},
		info: {
			main: "#B0AB39",
			contrastText: "#CDDCF8",
		},
		success: {
			contrastText: "#E5FCF6",
			light: "#E5FCF6",
			main: "#26704C",
			dark: "#26704C",
		},
		warning: {
			light: "#FFFBA8",
			main: "#E9E132",
			dark: "#B0AB39",
			contrastText: "#FFFBA8",
		},
		error: {
			light: "#FFD8D6",
			main: "#FF2635",
			dark: "#A81414",
			contrastText: "#FFD8D6",
		},
		action: {
			disabled: "#C5C5C5",
			active: "#C5C5C5",
		},
		divider: "#CAD0DD",
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontSize: pxToRem(16),
					textTransform: "none",
					padding: "8px 32px",
					minHeight: "48px",
				},
				sizeSmall: {
					minHeight: "32px",
					padding: "4px 18px",
					fontSize: pxToRem(12),
				},
			},
		},
	},
	typography: {
		fontFamily: ["Manrope", "sans-serif"].join(","),
	},
});

export default theme;
