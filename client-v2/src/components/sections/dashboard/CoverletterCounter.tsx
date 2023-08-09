import { Box, Stack, Typography } from "@mui/material";
import { DocumentUpload } from "iconsax-react";
import React from "react";
import { colors } from "../../../theme/constants";
import pattern from "./pattern.svg";

const CoverletterCounter = () => {
	const CUSTOM_COLORS = colors();
	return (
		<Stack
			direction="row"
			alignItems="center"
			sx={{
				mt: 6,
				p: { xs: 2, md: 6 },
				bgcolor: "primary.dark",
				borderRadius: 2,
				backgroundImage: `url(${pattern.src})`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				fontSize: 36,
			}}
			gap={2}
		>
			<DocumentUpload
				color="white"
				fontSize={50}
				height={36}
				width={36}
			/>
			<Typography variant="h2" color="white" fontWeight={700}>
				0
			</Typography>
			<Typography
				variant="body1"
				sx={{ color: CUSTOM_COLORS?.primary.lightest, fontWeight: 700 }}
			>
				Cover letters generated
			</Typography>
		</Stack>
	);
};

export default CoverletterCounter;
