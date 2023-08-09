import { Button, Divider, Stack } from "@mui/material";
import React from "react";
import { ActiveSectionProps } from "../../../../interfaces/sections";
import CustomInput from "../../../shared/form/CustomInput";
import UploadProfilePhoto from "./UploadProfilePhoto";

const AccountSetting = (props: ActiveSectionProps) => {
	return (
		<Stack display={props.active === false ? "none" : undefined}>
			<UploadProfilePhoto />
			<Divider />
			<Stack direction={{ xs: "column", md: "row" }} gap={3} mt={5}>
				<CustomInput
					label="Full name"
					placeholder="Please enter your full name"
					fullWidth
				/>
				<CustomInput
					label="Phone number"
					placeholder="+1  |  Please enter your phone number"
					fullWidth
				/>
			</Stack>

			<Stack direction={{ xs: "column", md: "row" }} gap={3} mt={5}>
				<Button variant="contained" color="primary">
					Update Profile
				</Button>
				<Button variant="text" color="primary" disabled>
					Reset
				</Button>
			</Stack>
		</Stack>
	);
};

export default AccountSetting;
