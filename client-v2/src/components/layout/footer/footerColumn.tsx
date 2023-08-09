import { column } from "../../../interfaces/link";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const FooterColumn = (props: column) => {
	return (
		<Grid xs={12} sm={6} lg={3} item>
			<Stack gap={2} sx={{ "& > a:hover": { color: "primary.main" } }}>
				<Typography variant="body1" color="textSecondary">
					{props.title}
				</Typography>
				{props.links.map(({ title, href }, index) => (
					<Typography
						key={index}
						component={Link}
						href={href}
						fontWeight={700}
						variant="h4"
						color="textPrimary"
						passHref
					>
						{title}
					</Typography>
				))}
			</Stack>
		</Grid>
	);
};

export default FooterColumn;
