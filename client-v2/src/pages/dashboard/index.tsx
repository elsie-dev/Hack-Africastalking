import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import { NextPageWithLayout } from "../../interfaces/pages";
import SideBarLayout from "../../components/layout/sidebar";
import WelcomeBanner from "../../components/sections/dashboard/WelcomeBanner";
import SummaryToken from "../../components/sections/dashboard/SummaryToken";
import FilterTabs from "../../components/shared/FilterTabs";
import CoverletterCounter from "../../components/sections/dashboard/CoverletterCounter";
import CoverletterGenerateChart from "../../components/sections/dashboard/CoverletterGenerateChart";
import JobRolePieChart from "../../components/sections/dashboard/JobRolePieChart";

const Overview: NextPageWithLayout = () => {
	return (
		<Box>
			<WelcomeBanner />
			<SummaryToken />
			<FilterTabs />
			<CoverletterCounter />
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
				}}
				gap={3}
				my={4}
			>
				<CoverletterGenerateChart />
				<JobRolePieChart />
			</Box>
		</Box>
	);
};

Overview.getLayout = function getLayout(page: ReactElement) {
	return <SideBarLayout pageIndex={0}>{page}</SideBarLayout>;
};

export default Overview;
