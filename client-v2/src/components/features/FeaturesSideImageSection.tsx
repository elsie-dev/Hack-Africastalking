import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { sideImageSectionProps } from "../../interfaces/sections";
import Image from "next/image";
import Link from "next/link";

import { colors } from "../../theme/constants";

const FeaturesSideImageSection = (props: sideImageSectionProps) => {
	const customColor = colors();

	return (
		<Box py={{ xs: 2, sm: 6 }} bgcolor={props.bgcolor}>
			<Container maxWidth="lg">
				<Stack
					direction={{
						xs: "column",
						sm: props.align === "left" ? "row" : "row-reverse",
					}}
					alignItems="center"
					gap={{ xs: 3, sm: 6, md: 8 }}
				>
					<Box
						flexGrow={1}
						width={{ xs: 288, sm: 264, md: 488 }}
						height={{ xs: 315, sm: 289, md: 533 }}
						position="relative"
						sx={{
							overflow: "hidden",
							borderRadius: 2,
						}}
					>
						<Image
							src={props.img}
							alt={props.heading}
							className="image"
							layout="fill"
							objectFit="contain"
						/>
					</Box>
					<Box flexGrow={1} width={{ xs: 300, sm: 381, md: 520 }}>
						{props.btn && (
							<Link href="#" passHref>
								<Button variant="outlined">{props.btn}</Button>
							</Link>
						)}
						<Typography
							variant="h4"
							color={props.headingColor}
							fontWeight="700"
							mt={"8px"}
							gutterBottom
						>
							{props.heading}
						</Typography>
						<Typography
							variant="body1"
							fontWeight="400"
							color={props.bodyColor}
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

export default FeaturesSideImageSection;
