import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";

const Admin: NextPageWithLayout = () => {
	return <Box />;
};

Admin.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Admin;
