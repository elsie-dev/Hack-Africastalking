import {
	Box,
	Button,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import CustomInput from "../../shared/form/CustomInput";
import GoogleIcon from "../GoogleIcon";

const LoginForm = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<Box
			width={{ md: "555px" }}
			bgcolor={"common.white"}
			p={{ xs: "20px", sm: "50px", md: "64px" }}
			borderRadius={"8px"}
		>
			<Typography
				variant={sm ? "h4" : "h5"}
				fontWeight={700}
				color={"secondary.dark"}
				textAlign={"center"}
				gutterBottom
			>
				Sign In to your account
			</Typography>
			<Typography
				fontWeight={400}
				color={"secondary.main"}
				textAlign={"center"}
				paragraph
				gutterBottom
			>
				Land your dream job with Coverly cover letter
			</Typography>
			<form>
				<CustomInput
					label="Email"
					sx={{ marginBottom: "24px" }}
					type="email"
					fullWidth
				/>
				<CustomInput
					label="Password"
					sx={{ marginBottom: "24px" }}
					endAdornment={
						<IconButton
							onClick={() =>
								setPasswordVisibility(!passwordVisibility)
							}
							color="inherit"
						>
							{passwordVisibility ? <Eye /> : <EyeSlash />}
						</IconButton>
					}
					type={!passwordVisibility ? "password" : "text"}
					fullWidth
				/>
			</form>
			<Box marginBottom={"24px"}>
				<Button variant="contained" fullWidth>
					Sign in
				</Button>
				<Typography
					fontWeight={400}
					color={"secondary.main"}
					paragraph
					gutterBottom
				>
					Forgot password?{" "}
					<Typography
						component="span"
						fontWeight={700}
						color={"primary.main"}
					>
						<Link href="#" passHref>
							Click here
						</Link>
					</Typography>
				</Typography>
			</Box>
			<Button
				sx={{ marginBottom: "16px" }}
				variant="outlined"
				endIcon={<GoogleIcon />}
				fullWidth
			>
				Register with Google
			</Button>
			<Typography
				fontWeight={400}
				color={"secondary.main"}
				textAlign={"center"}
				paragraph
				gutterBottom
			>
				Already have an account?{" "}
				<Typography
					component="span"
					fontWeight={700}
					color={"primary.main"}
				>
					<Link href="/login" passHref>
						Sign In
					</Link>
				</Typography>
			</Typography>
		</Box>
	);
};

export default LoginForm;
