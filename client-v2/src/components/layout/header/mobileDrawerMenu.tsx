import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import RouteLink from "next/link";
import React from "react";
import { menu } from "./constants";
import { useRouter } from "next/router";
import { mobileMenuProps } from "../../../interfaces/mobileMenu";

const MobileDrawerMenu = (props: mobileMenuProps) => {
	const { asPath } = useRouter();

	return (
		<List>
			{menu.map(({ title, href }, index) => (
				<ListItem key={index}>
					<RouteLink href={href} passHref>
						<Link
							onClick={props.toggleDrawer}
							underline="none"
							color={
								asPath.split("?")[0] === href
									? "primary"
									: "inherit"
							}
							width="100%"
						>
							{title}
						</Link>
					</RouteLink>
				</ListItem>
			))}
		</List>
	);
};

export default MobileDrawerMenu;
