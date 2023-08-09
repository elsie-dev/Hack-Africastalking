import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import SideBarLayout from "../../components/layout/sidebar";
import { NextPageWithLayout } from "../../interfaces/pages";
import HistoryHeading from "../../components/sections/dashboard/history/HistoryHeading";
import FilterTabs from "../../components/shared/FilterTabs";
import HistoryTable from "../../components/sections/dashboard/history/HistoryTable";

const History: NextPageWithLayout = () => {
	return (
		<Box>
			<HistoryHeading />
			<FilterTabs />
			<HistoryTable />
		</Box>
	);
};

History.getLayout = function getLayout(page: ReactElement) {
	return <SideBarLayout pageIndex={1}>{page}</SideBarLayout>;
};

export default History;
