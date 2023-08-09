import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import MuiLink from "@mui/material/Link";

const FooterLogo = () => {
	return (
		<Grid item xs={12} lg={3} sx={{ "& > :hover": { cursor: "pointer" } }}>
			<Link href="/" passHref>
				<MuiLink>
					<Image
						src="/assets/img/svg/logo.svg"
						alt="Coverly logo"
						width={132}
						height={46}
					/>
				</MuiLink>
			</Link>
		</Grid>
	);
};

export default FooterLogo;
