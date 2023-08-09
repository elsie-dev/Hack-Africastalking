import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const EmptyChart = () => {
	return (
		<Stack
			width="100%"
			height={250}
			alignItems="center"
			justifyContent="center"
		>
			<Image
				src="/assets/img/svg/no_data.svg"
				alt="Empty chart"
				height={120}
				width={126}
			/>
			<Typography
				variant="subtitle1"
				color="textSecondary"
				sx={{ mt: 2, fontWeight: 700 }}
			>
				No data found
			</Typography>
			<Typography
				variant="caption"
				color="textSecondary"
				textAlign="center"
				sx={{ maxWidth: 370 }}
			>
				You have not generated any cover letters within the specified
				time frame. Try a different date range.
			</Typography>
		</Stack>
	);
};

export default EmptyChart;
