import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Calendar, CalendarAdd } from "iconsax-react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Stack, IconButton, InputAdornment } from "@mui/material";
import CustomInput, { CustomInputProps } from "./form/CustomInput";
import { DatePicker, DesktopDatePicker } from "@mui/x-date-pickers";

interface StyledTabProps {
	label: string;
}

interface FilterTabsProps {
	defaultIndex?: number | null;
	index?: number | null;
	onChange?: (event: React.SyntheticEvent, newValue: number | false) => void;
}

interface FilterDialogProps extends DialogProps {
	onFilterChange: (event: React.SyntheticEvent) => void;
}

interface CustomDatePickerProps extends Omit<CustomInputProps, "onChange"> {
	onChange: (date: Date | null) => void;
}

const AntTabs = styled(Tabs)({
	marginTop: "24px",
	borderBottom: "1px solid #e8e8e8",
	"& .MuiTabs-indicator": {
		backgroundColor: "#1890ff",
	},
});

const AntTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: "none",
	minWidth: 0,
	paddingBottom: "24px",
	[theme.breakpoints.up("sm")]: {
		minWidth: 0,
	},
	marginRight: theme.spacing(1),
	color: theme.palette.text.secondary,
	"&:hover": {
		color: theme.palette.primary.main,
		opacity: 1,
	},
	"&.Mui-selected": {
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
	"&.Mui-focusVisible": {
		backgroundColor: `${theme.palette.primary.light}44`,
	},
}));

const FilterTabs = (props: FilterTabsProps) => {
	const [value, setValue] = React.useState<number | false>(
		props.defaultIndex || 0
	);
	const [isCustom, setIsCustom] = React.useState<boolean>(false);
	const [openFilterDate, setOpenFilterDate] = React.useState(false);
	const handleChange = (
		event: React.SyntheticEvent,
		newValue: number | false
	) => {
		if (newValue !== false) setIsCustom(false);
		setValue(newValue);
	};
	const handleClose = () => setOpenFilterDate(false);
	return (
		<AntTabs
			value={props.index || value}
			onChange={props.onChange || handleChange}
			variant="scrollable"
			scrollButtons="auto"
			allowScrollButtonsMobile
		>
			<AntTab label="All time" />
			<AntTab label="This year" />
			<AntTab label="This month" />
			<Box
				flexGrow={1}
				display="flex"
				flexDirection="row"
				justifyContent="flex-end"
			>
				<Button
					variant={isCustom ? "contained" : "outlined"}
					color="primary"
					sx={{ mb: 2 }}
					endIcon={<Calendar size="16px" variant="Bold" />}
					onClick={() => setOpenFilterDate(true)}
				>
					Select date range
				</Button>
				<FilterDateModal
					open={openFilterDate}
					onClose={handleClose}
					onFilterChange={(e) => {
						props.onChange
							? props.onChange(e, false)
							: handleChange(e, false);
						setIsCustom(true);
						handleClose();
					}}
				/>
			</Box>
		</AntTabs>
	);
};

const CustomDatePicker = (props: CustomDatePickerProps) => {
	const ref = React.useRef();
	return (
		<DesktopDatePicker
			disableFuture
			value={props.value}
			onChange={(value: Date | null, e?: string) => {
				props.onChange(value);
			}}
			inputRef={ref.current}
			OpenPickerButtonProps={{
				children: CalendarAdd,
				color: "inherit",
			}}
			renderInput={({ inputRef, inputProps, InputProps }) => {
				return (
					// @ts-ignore
					<CustomInput
						{...{
							inputRef: inputRef,
							...inputProps,
							...InputProps,
						}}
						id={props.id}
						label={props.label}
						placeholder="MM/DD/YYYY"
						autoComplete="off"
						fullWidth={props.fullWidth}
					/>
				);
			}}
		/>
	);
};

const FilterDateModal = (props: FilterDialogProps) => {
	const [date, setDate] = React.useState<{
		from: Date | null;
		to: Date | null;
	}>({
		from: null,
		to: null,
	});
	const handleClose = (
		e: React.SyntheticEvent,
		v: "backdropClick" | "escapeKeyDown"
	) => {
		setDate({ from: null, to: null });
		props.onClose && props.onClose(e, v);
	};
	return (
		<Dialog
			open={props.open}
			onClose={handleClose}
			sx={{
				"& .MuiDialog-paper": {
					borderRadius: 3,
					maxWidth: 600,
					width: "100%",
					p: 3,
				},
			}}
		>
			<Box>
				<Typography
					variant="subtitle1"
					sx={{ fontWeight: 700 }}
					color="textPrimary"
				>
					Select date range
				</Typography>
				<Stack
					width="100%"
					direction={{ xs: "column", md: "row" }}
					my={4}
					gap={2}
					justifyContent="stretch"
				>
					<CustomDatePicker
						id="start-date"
						label="From"
						autoComplete="off"
						value={date.from}
						onChange={(value) => setDate({ ...date, from: value })}
						fullWidth
					/>
					<CustomDatePicker
						id="end-date"
						label="To"
						value={date.to}
						onChange={(value) => setDate({ ...date, to: value })}
						fullWidth
					/>
				</Stack>
				<Button
					onClick={props.onFilterChange}
					color="primary"
					variant="contained"
				>
					Save Filter
				</Button>
			</Box>
		</Dialog>
	);
};

export default FilterTabs;
