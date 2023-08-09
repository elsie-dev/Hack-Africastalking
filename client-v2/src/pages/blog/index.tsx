import React, { ReactElement, useRef } from "react";
import { Container, Stack, Box, InputAdornment, Grid, FormControl, InputLabel, OutlinedInput, Typography  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../interfaces/pages";
import { BlogCard } from "../../components/blog/BlogCard";



const CssFormField = styled(FormControl)({
	'& label.Mui-focused': {
	  color: 'blue',
	},
	'& .MuiInput-underlinoutline:e:after': {
	  borderBottomColor: 'blue',
	},
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: 'black',
	  },
	  '&:hover fieldset': {
		borderColor: 'blue',
	  },
	  '&.Mui-focused fieldset': {
		border: '2px solid blue',
	  },
	},
  });

  
  
  const AllBlogs: NextPageWithLayout = () => {
	const cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const myRef = useRef('');

	return( 
		<div>
			<Container maxWidth="lg">
				<Stack 
					direction={{xs: 'column', lg: 'row'}}
					sx = {{
						display: 'flex',
						flexDirection: { xs:'column', md:'row', lg: 'row' },
						justifyContent: 'space-between',
						alignItems: 'center',
						margin: '2rem 0 0 0'
					}}
				>
					<Typography sx={{ typography: { xs: 'h4', md: 'h4' , lg:'h3' } }} >Welcome to our blog!</Typography>	
					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: {xs:'70vw', md:'45vw', lg:'40vw'}},
						}}
						noValidate
						autoComplete="off"
					>
						<CssFormField variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								endAdornment={
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
								}
								label="Search"
							/>
						</CssFormField>
					</Box>
				</Stack>

				<Typography 
					variant='subtitle1'
					mt={2}
					sx={{
						textAlign: {xs:'center', md:'left', lg:'left'},
                        paddingX: { xs:'10%', md:'0%', lg:'0%' },

					}}
				>
					You&apos;ll find the best information about cover letters, career development and Coverly. With our expert&apos;s help, you will not only generate a job-winning cover letter, but also improve your interview skills.
				</Typography>
				</Container>
				<Container sx={{ py: 8 }} maxWidth="lg">
				<Grid container spacing={4}>
					{cardsArray.map((card) => (
						<Grid item xs={12} key={card} sm={6} md={4} sx={{ display :'flex', justifyContent: 'center', cursor: 'pointer'}}>
							<BlogCard 
								imgUrl='https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg' 
								title='nightMood' 
								description='The act of making a 2D image with a mobile phone camera. The display of the mobile phone shows the image being made.' 
								readDuration= {6}
								cardLink= '/blog/1'
							/>
						</Grid>
                    ))}
				</Grid>
			</Container>
		</div>
	);
};

AllBlogs.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default AllBlogs;
