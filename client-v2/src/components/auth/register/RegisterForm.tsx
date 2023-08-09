import {
	Box,
	Button,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import CustomInput from "../../shared/form/CustomInput";
import GoogleIcon from "../GoogleIcon";
import Link from "next/link";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";

const RegisterForm = () => {
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
				Create your account
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
					label="Full Name"
					type="text"
					sx={{ marginBottom: "24px" }}
					fullWidth
				/>
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
				<CustomInput
					label="Confirm Password"
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
				<Button
					sx={{ marginBottom: "24px" }}
					variant="contained"
					fullWidth
				>
					Register
				</Button>
				<Button
					sx={{ marginBottom: "16px" }}
					variant="outlined"
					endIcon={<GoogleIcon />}
					fullWidth
				>
					Register with Google
				</Button>
			</form>
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

export default RegisterForm;
