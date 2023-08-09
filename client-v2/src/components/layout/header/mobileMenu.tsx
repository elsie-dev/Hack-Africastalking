import IconButton from "@mui/material/IconButton";
import { HambergerMenu } from "iconsax-react";
import { mobileMenuProps } from "../../../interfaces/mobileMenu";

const MobileMenu = (props: mobileMenuProps) => {
	return (
		<IconButton
			size="large"
			aria-label="menu-button"
			color="inherit"
			sx={{ ml: 1, display: { xs: "inline-flex", md: "none" } }}
			onClick={props.toggleDrawer}
		>
			<HambergerMenu size="32" />
		</IconButton>
	);
};

export default MobileMenu;
