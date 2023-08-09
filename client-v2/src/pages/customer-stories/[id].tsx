import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import { NextPageWithLayout } from "../../interfaces/pages";
import MainLayout from "../../components/layout/MainLayout";

const Story: NextPageWithLayout = () => {
	return <Box />;
};

Story.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Story;
