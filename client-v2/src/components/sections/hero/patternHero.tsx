import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { heroProps, subHeadingProps } from "../../../interfaces/sections";
import pattern from "./backgroundpattern.svg";

const SubHeadingContainer = (props: subHeadingProps) => {
	if (props.children.length < 200) {
		return (
			<Container maxWidth="xs">
				<Typography
					variant="subtitle1"
					color="grey.200"
					textAlign="center"
					gutterBottom
				>
					{props.children}
				</Typography>
			</Container>
		);
	}
	return (
		<Typography
			variant="subtitle1"
			color="grey.200"
			textAlign="center"
			gutterBottom
		>
			{props.children}
		</Typography>
	);
};

const PatternHero = (props: heroProps) => {
	return (
		<Box
			bgcolor="primary.dark"
			component="section"
			py={10}
			sx={{
				backgroundImage: `url(${pattern.src})`,
				backgroundPosition: "center top",
				backgroundSize: "cover",
			}}
		>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					component="h1"
					color="white"
					textAlign="center"
					fontWeight={700}
					sx={{ overflowWrap: "anywhere" }}
					gutterBottom
				>
					{props.heading}
				</Typography>
				<SubHeadingContainer>{props.subHeading}</SubHeadingContainer>
			</Container>
		</Box>
	);
};

export default PatternHero;
