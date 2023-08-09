import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { colors } from "../../../../theme/constants";

const CUSTOM_COLOR = colors();
interface PagePickerProps {
	active?: boolean;
	children?: string;
	onClick?: () => void;
}

interface SettingsTabProps {
	index: number | null;
	onChange: (index: number) => void;
	titles?: string[];
}

const PagePicker = (props: PagePickerProps) => {
	const theme = useTheme();
	const md = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Typography
			variant={md ? "h6" : "body1"}
			onClick={props.onClick}
			sx={{
				color: props.active
					? "primary.main"
					: CUSTOM_COLOR?.text.placeHolder,
				fontWeight: props.active ? 600 : 500,
				cursor: "pointer",
				transition: theme.transitions.create(["color", "font-weight"]),
				userSelect: "none",
			}}
		>
			{props.children}
		</Typography>
	);
};

const SettingsTab = (props: SettingsTabProps) => {
	return (
		<Stack direction="row" gap={3} mt={10} mb={4}>
			{props.titles?.map((title, i) => (
				<PagePicker
					key={i}
					active={props.index === i}
					onClick={() => props.onChange && props.onChange(i)}
				>
					{title}
				</PagePicker>
			))}
		</Stack>
	);
};

export default SettingsTab;
