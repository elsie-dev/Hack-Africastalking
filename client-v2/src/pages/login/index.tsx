import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";
import { Container } from "@mui/material";
import LoginForm from "../../components/auth/signin/LoginForm";
import HumanImage from "../../components/auth/HumanImage";

const Login: NextPageWithLayout = () => {
	return (
		<Box py={12}>
			<Container maxWidth="lg">
				<Box position={"relative"}>
					<Box
						position={{ md: "absolute" }}
						top={{ md: "60px" }}
						zIndex="99"
					>
						<LoginForm />
					</Box>
					<Box
						display={{ xs: "none", md: "flex" }}
						justifyContent="right"
					>
						<HumanImage />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

Login.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout headerOnly>{page}</MainLayout>;
};

export default Login;
