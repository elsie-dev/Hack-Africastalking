import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Eye, EyeSlash, UserAdd } from "iconsax-react";
import React from "react";
import { ActiveSectionProps } from "../../../../interfaces/sections";
import CustomInput, {
	CustomInputProps,
} from "../../../shared/form/CustomInput";

const PasswordInput = (props: CustomInputProps) => {
	const [visible, setVisible] = React.useState(false);
	return (
		<CustomInput
			{...props}
			label={props.label}
			placeholder="Please type in your password"
			type={visible ? "text" : "password"}
			sx={{ maxWidth: "500px" }}
			endAdornment={
				<IconButton
					color="inherit"
					onClick={() => setVisible((prev) => !prev)}
				>
					{visible ? (
						<Eye variant="Bold" />
					) : (
						<EyeSlash variant="Bold" />
					)}
				</IconButton>
			}
			fullWidth
		/>
	);
};

const LoginAndSecurity = (props: ActiveSectionProps) => {
	return (
		<Stack display={props.active === false ? "none" : undefined}>
			<Stack mt={5} gap={3}>
				<Typography variant="body2" color="textSecondary">
					You are currently logged in as{" "}
					<Typography
						variant="inherit"
						color="textPrimary"
						fontWeight={600}
						component="span"
					>
						coverlyweb@gmail.com
					</Typography>
				</Typography>
				<PasswordInput label="Old Password" />
				<Divider sx={{ mt: 4 }} />
				<Stack direction={{ xs: "column", md: "row" }} mt={2} gap={3}>
					<PasswordInput label="New Password" />
					<PasswordInput label="Confirm Password" />
				</Stack>
			</Stack>
			<Stack direction={{ xs: "column", md: "row" }} gap={3} mt={5}>
				<Button variant="contained" color="primary">
					Update Password
				</Button>
				<Button variant="text" color="primary" disabled>
					Reset
				</Button>
			</Stack>
		</Stack>
	);
};

export default LoginAndSecurity;
