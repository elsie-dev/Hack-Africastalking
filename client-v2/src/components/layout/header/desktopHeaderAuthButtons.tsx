import React from "react";
import { authButtons } from "./constants";
import Button from "@mui/material/Button";
import HeaderStackContainer from "./headerStackContainer";
import Link from "next/link";

const AuthButtons = () => {
	return (
		<HeaderStackContainer
			justifyContent="flex-end"
			sx={{ display: { xs: "none", sm: "flex" } }}
		>
			{authButtons.map(({ title, href, buttonType }, index) => (
				<Link key={index} href={href} passHref>
					<Button
						variant={buttonType}
						color="primary"
						sx={{ width: "140px" }}
					>
						{title}
					</Button>
				</Link>
			))}
		</HeaderStackContainer>
	);
};

export default AuthButtons;
