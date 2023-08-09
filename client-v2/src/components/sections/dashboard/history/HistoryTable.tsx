import React from "react";
import {
	useTheme,
	IconButton,
	Box,
	Popper,
	PopperProps,
	Stack,
	Button,
	ClickAwayListener,
	Grow,
} from "@mui/material";
import CustomPaper from "../../../shared/CustomPaper";
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridRenderCellParams,
} from "@mui/x-data-grid";
import { More } from "iconsax-react";

const pickRandomItem = (list: any[]) =>
	list[Math.floor(Math.random() * list.length)];

const generateRows = (length: number) =>
	new Array(length).fill({}).map((val, index) => {
		return {
			_id: index,
			filename: pickRandomItem(["CV1", "Micheal's Resume", "Jewel's CV"]),
			jobRole: pickRandomItem([
				"Front end engineer",
				"Dev-Ops",
				"Back end engineer",
			]),
			date: new Date(new Date().getTime() - 100000000 * Math.random()),
		};
	});

const HistoryTable = () => {
	const theme = useTheme();
	const [openAction, setOpenAction] = React.useState(false);
	const [anchorEl, setAnchorEl] =
		React.useState<PopperProps["anchorEl"]>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setOpenAction((prev) => !prev);
		setAnchorEl(event.currentTarget);
	};

	const [columns] = React.useState<GridColDef[]>([
		{ field: "filename", headerName: "File Name", flex: 1, minWidth: 250 },
		{
			field: "date",
			headerName: "Date",
			width: 200,
		},
		{ field: "jobRole", headerName: "Job Role", width: 200 },
		{
			field: "actions",
			headerName: "Action",
			width: 100,
			align: "center",
			renderCell: (params: GridRenderCellParams) => (
				<IconButton
					onClick={handleClick}
					sx={{
						transform: "rotate(90deg)",
						color: "text.primary",
					}}
				>
					<More />
				</IconButton>
			),
		},
	]);

	const [rows, setRows] = React.useState<GridRowsProp>(generateRows(200));
	return (
		<CustomPaper
			sx={{
				borderRadius: 4,
				borderTop: `2px solid ${theme.palette.primary.main}`,
				height: 600,
				p: 2,
				my: 6,
			}}
		>
			<DataGrid
				rows={rows}
				columns={columns}
				getRowId={(row) => row._id}
				hideFooter
				disableSelectionOnClick
				density="comfortable"
				sx={{
					"&.MuiDataGrid-root, & .MuiDataGrid-columnHeaders, & .MuiDataGrid-cell":
						{
							border: "none",
						},
					"& .MuiDataGrid-columnSeparator": {
						display: "none",
					},
					"& .MuiDataGrid-columnHeaderTitle": {
						textTransform: "uppercase",
						color: "text.secondary",
						fontWeight: 700,
						fontSize: "12px",
					},
					"& .MuiDataGrid-cellContent": {
						color: "text.primary",
						fontSize: "16px",
					},
				}}
			/>
			<ClickAwayListener
				mouseEvent="onMouseDown"
				touchEvent="onTouchStart"
				onClickAway={() => setOpenAction(() => false)}
			>
				<Popper
					anchorEl={anchorEl}
					open={openAction}
					placement="top"
					transition
				>
					{({ TransitionProps }) => (
						<Grow {...TransitionProps} timeout={350}>
							<Box>
								<CustomPaper
									sx={{
										boxShadow:
											"0px 16px 49px -1px rgba(0, 0, 0, 0.1)",
										p: 1,
									}}
								>
									<Stack direction="row" gap={2}>
										<Button
											variant="text"
											color="primary"
											size="small"
											onClick={() =>
												setOpenAction(() => false)
											}
										>
											View
										</Button>
										<Button
											variant="text"
											color="error"
											size="small"
											onClick={() =>
												setOpenAction(() => false)
											}
										>
											Delete
										</Button>
									</Stack>
								</CustomPaper>
							</Box>
						</Grow>
					)}
				</Popper>
			</ClickAwayListener>
		</CustomPaper>
	);
};

export default HistoryTable;
