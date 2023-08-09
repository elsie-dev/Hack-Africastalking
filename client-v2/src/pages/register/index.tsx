import React, { ReactElement } from "react";
import Image from "next/image";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";
import RegisterForm from "../../components/auth/register/RegisterForm";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import HumanImage from "../../components/auth/HumanImage";

const Register: NextPageWithLayout = () => {
	return (
		<Box py={12}>
			<Container maxWidth="lg">
				<Box position={"relative"}>
					<Box
						position={{ md: "absolute" }}
						top={{ md: "60px" }}
						zIndex="99"
					>
						<RegisterForm />
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

Register.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout headerOnly>{page}</MainLayout>;
};

export default Register;
