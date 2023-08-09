import { Box, Typography } from "@mui/material";
import React from "react";
import { GalleryAdd } from "iconsax-react";
import { colors } from "../../../../theme/constants";

const UploadProfilePhoto = () => {
	const CUSTOM_COLOR = colors();
	const inputRef = React.useRef<null | any>();

	return (
		<Box my={5}>
			<Typography
				color="textPrimary"
				variant="body2"
				sx={{ fontSize: 12 }}
				gutterBottom
			>
				Your Profile Picture
			</Typography>
			<Box
				sx={{
					width: 115,
					height: 115,
					borderColor: "primary.main",
					borderStyle: "dashed",
					borderWidth: "1px",
					borderRadius: "16px",
					bgcolor: CUSTOM_COLOR?.primary.extraLight,
					mt: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					color: "primary.light",
					textAlign: "center",
					gap: 1,
					cursor: "pointer",
					userSelect: "none",
				}}
				onClick={() => inputRef.current?.click()}
			>
				<GalleryAdd variant="Broken" size="32" />

				<Typography
					// variant="caption"
					color="primary.main"
					sx={{ maxWidth: "80%", fontSize: "11px" }}
				>
					Click to upload your photo
				</Typography>
				<Box
					display="none"
					component="input"
					type="file"
					ref={inputRef}
				/>
			</Box>
		</Box>
	);
};

export default UploadProfilePhoto;
