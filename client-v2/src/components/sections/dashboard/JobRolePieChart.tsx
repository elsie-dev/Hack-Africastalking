import { Palette } from "@devexpress/dx-react-chart";
import {
	Chart,
	Legend,
	PieSeries,
} from "@devexpress/dx-react-chart-material-ui";
import {
	Paper,
	Skeleton,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { Animation } from "@devexpress/dx-react-chart";
import EmptyChart from "../../shared/EmptyChart";
import CustomPaper from "../../shared/CustomPaper";
import { CustomChartProps } from "../../../interfaces/sections";

function generateArray(items: number) {
	const result: string[] = [];
	const characters = "abcdefghijklmnopqrstuvwxyz";

	while (result.length < items) {
		let str: string = "";
		for (let i = 0; i < 20; i++) {
			str += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		if (!result.includes(str)) {
			result.push(str);
		}
	}

	return result;
}

const generateData = (items: number, range: number) => {
	const values = generateArray(items);
	const data = values.map((val) => {
		return {
			argument: val,
			lineValue: Math.floor(Math.random() * (range + 1)),
		};
	});
	return data;
};

const chartScheme = [
	blue.A700,
	blue.A100,
	blue[900],
	blue[700],
	blue[500],
	blue[300],
	blue[100],
];

interface CustomLegendProps extends CustomChartProps {
	boxStyle?: any;
}

const CustomLegend = (props: CustomLegendProps) => {
	const total = props.data?.reduce((prev, curr) => prev + curr.lineValue, 0);
	return (
		<Legend
			position={props.legendPosition}
			rootComponent={() => (
				<Box sx={props.boxStyle}>
					{props.data?.map(({ argument, lineValue }, index) => (
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								mb: 2,
							}}
							width="100%"
							key={index}
						>
							<Box
								display="flex"
								flexDirection="row"
								alignItems="center"
								gap={2}
							>
								<Box p={1} bgcolor={chartScheme[index]} />
								<Typography
									variant="body2"
									color="textSecondary"
									sx={{
										width: {
											xs: "100%",
											md: 60,
											lg: 100,
										},
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
										overflow: "hidden",
									}}
								>
									{argument}
								</Typography>
							</Box>
							<Typography
								variant="body2"
								fontWeight={700}
								color="textSecondary"
								sx={{ pl: 1 }}
							>
								{Math.floor((lineValue / total) * 100)}%
							</Typography>
						</Box>
					))}
				</Box>
			)}
		/>
	);
};

const CustomPieChart = (props: CustomChartProps) => {
	const theme = useTheme();
	const md = useMediaQuery(theme.breakpoints.up("md"));
	const total = props.data?.reduce((prev, curr) => prev + curr.lineValue, 0);

	if (props.loading) return <Skeleton width="100%" height={250} />;
	if (!props.data || props.data.length === 0) return <EmptyChart />;
	return (
		<Chart data={props.data} height={md ? 250 : undefined}>
			<Palette scheme={chartScheme} />
			<CustomLegend
				{...props}
				legendPosition="right"
				boxStyle={{ display: { xs: "none", md: "block" } }}
			/>
			<CustomLegend
				{...props}
				legendPosition="bottom"
				boxStyle={{ display: { xs: "block", md: "none" }, mt: 1 }}
			/>
			<PieSeries
				innerRadius={0.7}
				valueField="lineValue"
				argumentField="argument"
			/>
			<Animation />
		</Chart>
	);
};

const JobRolePieChart = () => {
	const [data, setData] = React.useState(generateData(5, 80));
	const theme = useTheme();
	const md = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<CustomPaper sx={{ width: "100%", p: 3 }}>
			<Typography
				variant="subtitle1"
				color="textPrimary"
				fontWeight={700}
			>
				Job categories summary
			</Typography>
			{md}
			<Typography variant="body2" color="textSecondary">
				All time
			</Typography>

			<CustomPieChart data={data} />
		</CustomPaper>
	);
};

export default JobRolePieChart;
