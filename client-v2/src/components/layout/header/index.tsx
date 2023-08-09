import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AuthButtons from "./desktopHeaderAuthButtons";
import DesktopMenu from "./desktopHeaderMenu";
import HeaderLogo from "./headerLogo";
import MobileMenu from "./mobileMenu";
import MobileDrawer from "./mobileDrawer";

const Header = () => {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

	return (
		<Toolbar disableGutters sx={{ bgcolor: "background.paper" }}>
			<Container maxWidth="lg">
				<Stack flexDirection="row" alignItems="center" py={2.5}>
					<HeaderLogo />
					<DesktopMenu />
					<AuthButtons />
					<MobileMenu toggleDrawer={toggleDrawer} />
					<MobileDrawer open={open} toggleDrawer={toggleDrawer} />
				</Stack>
			</Container>
		</Toolbar>
	);
};

export default Header;
