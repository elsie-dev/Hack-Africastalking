import React, { ReactElement } from "react";
import {Typography, Container, Stack, Avatar} from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";

const SingleBlog: NextPageWithLayout = () => {
	return (
		<Container maxWidth="lg">
			 <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
			  sx={{ mt: 5}}

            >
              How to write a good cover letter
            </Typography>

			<Stack
              sx={{ pt:2, alignItems: "center" }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Avatar alt="Sadiq Abdulbasit Damilola" src="/static/images/avatar/1.jpg" />
			  <Stack 
			  	direction="column"
				spacing={0}
			  >
				<Typography variant="h6">
					Sadiq Abdulbasit Damilola
				</Typography>
				<Typography 
					variant="subtitle2"
					sx={{ color: "text.secondary" }}

				>
					November 15, 2022
				</Typography>
			  </Stack>
            </Stack>

			<Stack
				sx={{ pt:2, alignItems: "center" }}
				direction="column"
				spacing={2}
				justifyContent="center"
			>
				<Typography variant="h1">
                    Content
                </Typography>
               
			</Stack>
			

		</Container>	
	);
};

SingleBlog.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default SingleBlog;
