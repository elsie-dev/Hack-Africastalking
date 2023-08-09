import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";

const ForgotPassword: NextPageWithLayout = () => {
	return <Box />;
};

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout headerOnly>{page}</MainLayout>;
};

export default ForgotPassword;
