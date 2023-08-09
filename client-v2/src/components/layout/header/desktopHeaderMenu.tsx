import HeaderStackContainer from "./headerStackContainer";
import { menu } from "./constants";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopMenu = () => {
	const { asPath } = useRouter();
	return (
		<HeaderStackContainer
			justifyContent="center"
			gap={3}
			sx={{ color: "grey.400", display: { xs: "none", md: "flex" } }}
		>
			{menu.map(({ title, href }, index) => (
				<Link key={index} href={href} passHref>
					<Typography
						variant="body1"
						fontWeight={600}
						color={
							asPath.split("?")[0] === href
								? "primary"
								: "inherit"
						}
						sx={{
							cursor: "pointer",
							":hover": { color: "primary.main" },
						}}
					>
						{title}
					</Typography>
				</Link>
			))}
		</HeaderStackContainer>
	);
};

export default DesktopMenu;
