import React from "react";
import { mobileDrawerProps } from "../../../interfaces/mobileMenu";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { CloseCircle } from "iconsax-react";
import MobileDrawerMenu from "./mobileDrawerMenu";
import MobileDrawerAuthButtons from "./mobileDrawerAuthButtons";

const MobileDrawer = (props: mobileDrawerProps) => {
	return (
		<Drawer
			variant="temporary"
			anchor="left"
			open={props.open}
			onClose={props.toggleDrawer}
			sx={{
				display: { xs: "flex", md: "none" },

				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					width: { xs: "80%", sm: 350 },
				},
			}}
		>
			<Toolbar sx={{ justifyContent: "flex-end" }}>
				<IconButton
					aria-label="menu-drawer-close"
					onClick={props.toggleDrawer}
					size="small"
					color="inherit"
				>
					<CloseCircle size="32" />
				</IconButton>
			</Toolbar>
			<MobileDrawerMenu toggleDrawer={props.toggleDrawer} />
			<MobileDrawerAuthButtons toggleDrawer={props.toggleDrawer} />
		</Drawer>
	);
};

export default MobileDrawer;
