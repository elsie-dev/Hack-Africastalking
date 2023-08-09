import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
	FormControl,
	FormHelperText,
	InputAdornment,
	InputBaseProps,
	MenuItem,
	OutlinedInput,
	Select,
	SelectProps,
	Theme,
	useTheme,
} from "@mui/material";
import { getColor } from "../../../theme/constants";
import { MuiColorProps } from "../../../interfaces/pages";
import { ArrowUp2 } from "iconsax-react";
import { PersonAdd } from "@mui/icons-material";

export interface CustomInputProps extends InputBaseProps {
	label?: string | React.ReactNode | null;
	helperText?: string | React.ReactNode | null;
	textArea?: boolean;
}

interface HelperTextProps {
	children?: React.ReactNode | string;
	color?: MuiColorProps | undefined;
}

interface CustomSelectItemProps {
	children?: number | string;
	value: any;
}

interface CustomSelectProps extends SelectProps {
	items?: CustomSelectItemProps[] | string[] | number[];
	label?: string | React.ReactNode | null;
	helperText?: string | React.ReactNode | null;
}

const CustomInputBase = styled(OutlinedInput)((props) => ({
	"&.MuiOutlinedInput-root": {
		"label + &": {
			marginTop: props.theme.spacing(2),
		},
		borderRadius: "8px",
		border: "1px solid rgba(0,0,0,0)",
		fontSize: 16,
		color: `${props.theme.palette.grey[500]} !important`,
		"& fieldset": {
			border: `1px solid ${props.theme.palette.divider}`,
			transition: props.theme.transitions.create([
				"border-color",
				"box-shadow",
			]),
		},
		"&.Mui-focused fieldset, &:hover fieldset": {
			border: `1px solid ${getColor(
				props.color,
				props.theme,
				props.theme.palette.grey[500]
			)} !important`,
		},
		"& .MuiInputAdornment-positionEnd": {
			color: `${props.theme.palette.text.secondary} !important`,
			alignSelf: props.multiline ? "flex-start" : undefined,
			marginTop: props.multiline ? "14px" : undefined,
		},
		"& .MuiInputAdornment-positionStart": {
			color: `${props.theme.palette.grey[500]} !important`,
			alignSelf: props.multiline ? "flex-start" : undefined,
			marginTop: props.multiline ? "14px" : undefined,
		},
	},
}));

const HelperText = (props: HelperTextProps) => {
	const theme = useTheme();
	return (
		<FormHelperText sx={{ color: getColor(props.color, theme, undefined) }}>
			{props.children}
		</FormHelperText>
	);
};

const CustomInput = (props: CustomInputProps) => {
	const { textArea, helperText, ...rest } = props;
	return (
		<FormControl fullWidth={props.fullWidth}>
			<Typography
				variant="caption"
				color="textSecondary"
				fontWeight={600}
			>
				{props.label}
			</Typography>
			<CustomInputBase
				{...{
					...rest,
					label: undefined,
				}}
				multiline={textArea}
				minRows={4}
				maxRows={4}
				inputRef={props.inputRef}
				endAdornment={
					props.endAdornment ? (
						<InputAdornment position="end">
							{props.endAdornment}
						</InputAdornment>
					) : undefined
				}
				startAdornment={
					props.startAdornment ? (
						<InputAdornment position="start">
							{props.startAdornment}
						</InputAdornment>
					) : undefined
				}
			/>
			<HelperText color={props.color}>{helperText}</HelperText>
		</FormControl>
	);
};

const CustomSelectMenuProps = (theme: Theme) => {
	return {
		PaperProps: {
			style: {
				boxShadow: "none",
				border: `1px solid ${theme.palette.grey[500]}`,
				borderRadius: "8px",
			},
		},
	};
};

export const CustomSelect = (props: CustomSelectProps) => {
	const theme = useTheme();
	return (
		<Select
			{...{ ...props, items: undefined }}
			input={
				<CustomInput
					placeholder={props.placeholder}
					label={props.label}
					helperText={props.helperText}
				/>
			}
			IconComponent={ArrowUp2}
			MenuProps={CustomSelectMenuProps(theme)}
			sx={{
				"& .MuiSelect-icon": {
					color: `${theme.palette.text.secondary} !important`,
					height: "20px",
					width: "20px",
					marginRight: "8px",
				},
			}}
		>
			{props.items?.map(
				(
					selectItemProps: CustomSelectItemProps | string | number,
					index
				) => {
					const value =
						typeof selectItemProps === "string" ||
						typeof selectItemProps === "number"
							? selectItemProps
							: selectItemProps.value;
					const children =
						typeof selectItemProps === "string" ||
						typeof selectItemProps === "number"
							? selectItemProps
							: selectItemProps.children || selectItemProps.value;
					return (
						<MenuItem
							selected={
								props.value !== undefined
									? props.value === value
									: undefined
							}
							sx={{
								"&.MuiMenuItem-root.Mui-selected": {
									bgcolor: `${theme.palette.grey[100]} !important`,
								},
								"&.MuiMenuItem-root:hover": {
									bgcolor: `${theme.palette.grey[50]}`,
								},
								"&.MuiMenuItem-root:not(:last-child)": {
									borderBottom: `1px solid ${theme.palette.divider}`,
									minHeight: "48px",
								},
								color: "text.secondary",
							}}
							value={value}
							key={index}
						>
							{children}
						</MenuItem>
					);
				}
			)}
		</Select>
	);
};

export default CustomInput;
