import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { Icon } from "iconsax-react";
import React from "react";
import Link from "next/link";
import { menuItemProps } from "../../../interfaces/link";

const MenuItem = (props: menuItemProps) => {
	const theme = useTheme();
	const IconComponent = props.icon;
	const listItemContent = (
		<ListItem disableGutters>
			<ListItemButton onClick={props.onClick}>
				<ListItemIcon sx={{ minWidth: 40 }}>
					{IconComponent && (
						<IconComponent
							{...{
								variant: props.active
									? "Bold"
									: props.iconVariant || "Outline",
								color: props.active
									? theme.palette.primary.main
									: theme.palette.text.primary,
							}}
						/>
					)}
				</ListItemIcon>
				<ListItemText
					primary={props.title}
					primaryTypographyProps={{
						color: props.active
							? theme.palette.primary.main
							: undefined,
						fontWeight: props.active ? 700 : undefined,
					}}
				/>
			</ListItemButton>
		</ListItem>
	);
	if (props.href) {
		return (
			<Link href={props.href} passHref>
				{listItemContent}
			</Link>
		);
	} else {
		return <React.Fragment>{listItemContent}</React.Fragment>;
	}
};
export default MenuItem;
