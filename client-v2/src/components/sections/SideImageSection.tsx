import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { sideImageSectionProps } from "../../interfaces/sections";
import Image from "next/image";
import { colors } from "../../theme/constants";

const SideImageSection = (props: sideImageSectionProps) => {
	const CUSTOM_COLOR = colors();
	return (
		<Box
			py={props.disableBound ? 0 : { xs: 5, md: 8, lg: 12 }}
			bgcolor={props.bgcolor}
		>
			<Container maxWidth="lg">
				<Stack
					direction={{
						xs: "column",
						md: props.align === "left" ? "row" : "row-reverse",
					}}
					alignItems="center"
					gap={8}
				>
					<Box
						flexGrow={1}
						p={props.imageContainer ? { xs: 2, md: 5 } : 0}
						width="100%"
						bgcolor={
							props.imageContainer
								? CUSTOM_COLOR?.primary.lightest
								: undefined
						}
						borderRadius={2}
					>
						<Box
							flexGrow={1}
							width="100%"
							height={
								props.img ? props.imageHeight || "350px" : 0
							}
							position="relative"
							sx={{
								overflow: "hidden",
								borderRadius: 2,
							}}
						>
							{props.img && (
								<Image
									src={props.img}
									alt={props.heading}
									layout="fill"
									objectFit={props.imageFit || "cover"}
								/>
							)}
						</Box>
					</Box>
					<Box flexGrow={1} width="100%">
						<Typography
							variant="h4"
							color="textPrimary"
							fontWeight={600}
							sx={{ mb: 3 }}
						>
							{props.preHeading}
						</Typography>
						<Typography
							variant="h4"
							color={props.headingColor || "textPrimary"}
							fontWeight={600}
							sx={{ mb: 3 }}
						>
							{props.heading}
						</Typography>
						<Typography
							variant="body1"
							color="textSecondary"
							gutterBottom
						>
							{props.body}
						</Typography>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default SideImageSection;
