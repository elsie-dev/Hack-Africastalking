import { Paper, PaperProps } from "@mui/material";
import React from "react";

const CustomPaper = (props: PaperProps) => {
	return (
		<Paper
			{...props}
			elevation={0}
			sx={{
				...{
					boxShadow: "0px 16px 68px -8px rgba(0, 0, 0, 0.06);",
					borderRadius: 3,
				},
				...(props.sx || {}),
			}}
		/>
	);
};

export default CustomPaper;
