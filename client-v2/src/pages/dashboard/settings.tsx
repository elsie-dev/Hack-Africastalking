import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import { NextPageWithLayout } from "../../interfaces/pages";
import SideBarLayout from "../../components/layout/sidebar";
import CustomPaper from "../../components/shared/CustomPaper";
import { Stack, Typography, Button, Divider, IconButton } from "@mui/material";
import SettingsHeader from "../../components/sections/dashboard/settings/SettingsHeader";
import { colors } from "../../theme/constants";
import SettingsTab from "../../components/sections/dashboard/settings/SettingsTab";
import UploadProfilePhoto from "../../components/sections/dashboard/settings/UploadProfilePhoto";
import CustomInput from "../../components/shared/form/CustomInput";
import { EyeSlash, Menu } from "iconsax-react";
import AccountSetting from "../../components/sections/dashboard/settings/AccountSetting";
import LoginAndSecurity from "../../components/sections/dashboard/settings/LoginAndSecurity";

const Settings: NextPageWithLayout = () => {
	const CUSTOM_COLOR = colors();
	const [active, setActive] = React.useState(0);
	return (
		<CustomPaper sx={{ p: 4, py: 6 }}>
			<SettingsHeader />
			<SettingsTab
				titles={["Account Settings", "Login & Security"]}
				index={active}
				onChange={(index) => setActive(index)}
			/>
			<AccountSetting active={active === 0} />
			<LoginAndSecurity active={active === 1} />
		</CustomPaper>
	);
};

Settings.getLayout = function getLayout(page: ReactElement) {
	return <SideBarLayout pageIndex={2}>{page}</SideBarLayout>;
};

export default Settings;
