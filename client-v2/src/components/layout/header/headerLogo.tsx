import HeaderStackContainer from "./headerStackContainer";
import Link from "next/link";
import Image from "next/image";
import { Link as MuiLink } from "@mui/material";

const HeaderLogo = () => {
	return (
		<HeaderStackContainer
			sx={{
				"& > :hover": {
					cursor: "pointer",
				},
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
		</HeaderStackContainer>
	);
};

export default HeaderLogo;
