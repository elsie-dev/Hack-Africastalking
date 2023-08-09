import React, { ReactElement } from "react";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";

const Generate: NextPageWithLayout = () => {
	return <Box />;
};

Generate.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Generate;
