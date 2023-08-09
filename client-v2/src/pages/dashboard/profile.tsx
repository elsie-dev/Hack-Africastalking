import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import { NextPageWithLayout } from "../../interfaces/pages";
import SideBarLayout from "../../components/layout/sidebar";

const Profile: NextPageWithLayout = () => {
	return <Box />;
};

Profile.getLayout = function getLayout(page: ReactElement) {
	return <SideBarLayout>{page}</SideBarLayout>;
};

export default Profile;
