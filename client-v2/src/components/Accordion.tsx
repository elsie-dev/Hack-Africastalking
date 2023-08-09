import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { CustomAccordionProps } from "../interfaces/sections";
import { Box } from "@mui/material";
import { ArrowDown2 } from "iconsax-react";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: "none",
	backgroundColor: theme.palette.background.default,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowDown2 variant="Bold" size={20} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	flexDirection: "row",
	borderRadius: 8,
	border: `1px solid ${theme.palette.grey[100]}`,
	margin: "4px 0px",
	"& .MuiAccordionSummary-expandIconWrapper": {
		color: theme.palette.text.primary,
	},
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(180deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	border: `1px solid ${theme.palette.grey[100]}`,
	backgroundColor: theme.palette.background.default,
	borderRadius: 8,
	margin: "4px 0px",
}));

const CustomAccordion = (props: CustomAccordionProps) => {
	const [expanded, setExpanded] = React.useState<number | null>(null);
	const handleChange =
		(panel: number) =>
		(event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : null);
		};

	return (
		<Box>
			{props.content.map(({ heading, body }, index) => (
				<Accordion
					key={index}
					expanded={expanded === index}
					onChange={handleChange(index)}
				>
					<AccordionSummary id={`panel${index + 1}d-header`}>
						<Typography variant="body1">{heading}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body2" color="textPrimary">
							{body}
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
};

export default CustomAccordion;
