import {
	Animation,
	EventTracker,
	HoverState,
} from "@devexpress/dx-react-chart";
import {
	ArgumentAxis,
	Chart,
	SplineSeries,
	Tooltip,
	ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import {
	Paper,
	Typography,
	Box,
	useTheme,
	Tooltip as MuiTooltip,
	Skeleton,
	GlobalStyles,
} from "@mui/material";
import React from "react";
import { CustomChartProps } from "../../../interfaces/sections";
import CustomPaper from "../../shared/CustomPaper";
import EmptyChart from "../../shared/EmptyChart";

const generateData = (start: number, end: number, step: number) => {
	const data = [];

	for (let i = start; i < end; i += step) {
		data.push({
			splineValue: Math.floor((Math.sin(i) / i) * 10),
			lineValue: (i / 15) ** 2.718 - 0.2,
			argument: i,
		});
	}

	return data;
};

const CustomChart = (props: CustomChartProps) => {
	if (props.loading) return <Skeleton width="100%" height={250} />;
	if (!props.data || props.data.length === 0) return <EmptyChart />;
	return (
		<Chart data={props.data} height={250}>
			<ArgumentAxis />
			<ValueAxis />
			<SplineSeries
				valueField={props.valueField || "splineValue"}
				argumentField={props.argumentField || "argument"}
			/>
			<EventTracker />
			<Tooltip
				sheetComponent={(target) => {
					return (
						<Paper
							sx={{
								bgcolor: "grey.600",
								px: 1,
								py: 0.5,
							}}
							elevation={0}
						>
							<Typography variant="caption" color="textSecondary">
								<Typography
									component="span"
									variant="inherit"
									sx={{
										color: "white",
										"& > *": {
											display: "inline",
										},
									}}
								>
									{target?.children}
								</Typography>
								Letters
							</Typography>
						</Paper>
					);
				}}
			/>
			<Animation />
		</Chart>
	);
};

const CoverletterGenerateChart = () => {
	const [data, setData] = React.useState(generateData(10, 50, 5));
	const theme = useTheme();
	return (
		<CustomPaper sx={{ width: "100%", p: 3 }}>
			<Typography
				variant="subtitle1"
				color="textPrimary"
				fontWeight={700}
			>
				Cover letter generated
			</Typography>
			<Typography variant="body2" color="textSecondary">
				All time
			</Typography>
			<Box
				width={1}
				height={250}
				sx={{
					"path.Target-root": {
						stroke: theme.palette.grey[50],
					},
					text: {
						stroke: "none",
						fill: theme.palette.text.primary,
					},
				}}
			>
				<GlobalStyles
					styles={{
						".Arrow-arrow-top::after": {
							backgroundColor: "#353535 !important",
							boxShadow: "none !important",
						},
					}}
				/>
				<CustomChart data={data} />
			</Box>
		</CustomPaper>
	);
};

export default CoverletterGenerateChart;
