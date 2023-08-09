import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../interfaces/pages";
import MainLayout from "../components/layout/MainLayout";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Error404 from "../../public/assets/img/svg/404.svg";

const Page404: NextPageWithLayout = () => {
	return (
		<Container maxWidth="md">
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				my={12}
			>
				<Box
					width={{ xs: 200, md: 280 }}
					height={{ xs: 200, md: 280 }}
					position="relative"
				>
					<Image
						src={Error404}
						alt="Error 404"
						layout="fill"
						objectFit="cover"
					/>
				</Box>
				<Typography
					variant="h4"
					color="textPrimary"
					fontWeight={700}
					textAlign="center"
					gutterBottom
				>
					Oops... Page not found
				</Typography>
				<Typography
					variant="subtitle1"
					color="textSecondary"
					sx={{ maxWidth: "650px", mb: 3 }}
					textAlign="center"
					gutterBottom
				>
					The page you are looking for might have been removed, had
					its name changed, or is temporarily unavailable.
				</Typography>
				<Link href="/" passHref>
					<Button variant="contained" color="primary">
						Go home
					</Button>
				</Link>
			</Box>
		</Container>
	);
};

Page404.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Page404;
