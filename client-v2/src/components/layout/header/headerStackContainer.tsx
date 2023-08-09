import Stack, { StackProps } from "@mui/material/Stack";

const HeaderStackContainer = (props: StackProps) => {
	return <Stack flexDirection="row" flexGrow={1} gap={2} {...props} />;
};

export default HeaderStackContainer;
