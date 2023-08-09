import {
	Box,
	Drawer,
	List,
	useMediaQuery,
	useTheme,
	Button,
	IconButton,
	Typography,
	Container,
	Link as MuiLink,
} from "@mui/material";
import React, { ReactElement } from "react";
import { NextPageWithLayoutProps } from "../../../interfaces/pages";
import { drawerWidth, sidebarMenu } from "./constant";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./menuItem";
import { CloseCircle, LogoutCurve } from "iconsax-react";

interface SidebarChildrenProps {
	children: React.ReactElement;
	toggleMenu?: () => void;
}

const Children = (props: SidebarChildrenProps) => {
	return (
		<Box>
			{React.Children.map(props.children, (child) =>
				React.cloneElement(child, {
					toggleMenu: props.toggleMenu,
				})
			)}
		</Box>
	);
};

const SideBarLayout = (props: NextPageWithLayoutProps) => {
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.up("xs"));
	const sm = useMediaQuery(theme.breakpoints.up("sm"));

	// TODO: This open state would be lifted to an appwide sidebar state
	// So that the pages' menu buttons can access it
	const [open, setOpen] = React.useState(true);

	const handleToggle = () => setOpen((open) => !open);

	return (
		<Box sx={{ display: "flex" }}>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
			>
				<Drawer
					variant={sm ? "permanent" : "temporary"}
					open={sm ? true : open}
					onClose={handleToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					<Box
						p={2}
						pt={{ xs: 2, sm: 6 }}
						display="flex"
						flexDirection="column"
						gap={4}
						alignItems="center"
					>
						<IconButton
							onClick={handleToggle}
							sx={{
								alignSelf: "flex-end",
								display: { xs: "flex", sm: "none" },
							}}
							color="inherit"
						>
							<CloseCircle size="32" />
						</IconButton>
						<Box
							component="span"
							sx={{
								cursor: "pointer",
								display: { xs: "none", sm: "block" },
							}}
						>
							<Link href="/" passHref>
								<MuiLink>
									<Image
										src="/assets/img/svg/logo.svg"
										alt="logo"
										width={144}
										height={29}
									/>
								</MuiLink>
							</Link>
						</Box>
						<Button
							variant="contained"
							color="primary"
							sx={{ display: { xs: "none", sm: "block" } }}
							fullWidth
						>
							Generate cover letter
						</Button>
					</Box>
					<List sx={{ flexGrow: { sm: 1 } }}>
						{sidebarMenu.map((menu, index) => {
							const active = props.pageIndex === index;
							return (
								<MenuItem
									key={index}
									active={active}
									title={menu.title}
									icon={menu.icon}
									href={menu.href}
								/>
							);
						})}
					</List>
					<List disablePadding sx={{ flexGrow: { xs: 1, sm: 0 } }}>
						<MenuItem
							title="Logout"
							icon={LogoutCurve}
							iconVariant="Linear"
						/>
					</List>
					<Box
						display={{ xs: "flex", sm: "none" }}
						flexDirection="column"
						p={2}
						pb={6}
						alignItems="center"
					>
						<Typography
							variant="caption"
							color="textSecondary"
							textAlign="center"
							gutterBottom
						>
							You are on the free plan
						</Typography>
						<Button variant="contained" color="primary" fullWidth>
							Upgrade account
						</Button>
					</Box>
				</Drawer>
			</Box>
			<Box component="main" width="100%" pt={5} px={{ xs: 0.5, md: 2 }}>
				<Container maxWidth="lg">
					<Children toggleMenu={handleToggle}>
						{props.children}
					</Children>
				</Container>
			</Box>
		</Box>
	);
};

export default SideBarLayout;
