import Stack from "@mui/material/Stack";
import React from "react";
import { authButtons } from "./constants";
import Button from "@mui/material/Button";
import { mobileMenuProps } from "../../../interfaces/mobileMenu";
import Link from "next/link";

const MobileDrawerAuthButtons = (props: mobileMenuProps) => {
	return (
		<Stack
			gap={1}
			alignItems="flex-start"
			px={2}
			display={{ xs: "flex", sm: "none" }}
		>
			{authButtons.map(({ title, href, buttonType }, index) => (
				<Link key={index} href={href} passHref>
					<Button
						key={index}
						variant={buttonType}
						color="primary"
						onClick={props.toggleDrawer}
						fullWidth
					>
						{title}
					</Button>
				</Link>
			))}
		</Stack>
	);
};

export default MobileDrawerAuthButtons;
