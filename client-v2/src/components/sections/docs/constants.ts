import doc01 from "../../../../public/assets/img/svg/doc01.svg";
import doc02 from "../../../../public/assets/img/svg/doc02.svg";
import doc03 from "../../../../public/assets/img/svg/doc03.svg";
import doc04 from "../../../../public/assets/img/svg/doc04.svg";
import doc05 from "../../../../public/assets/img/svg/doc05.svg";
import doc06 from "../../../../public/assets/img/svg/doc06.svg";
import doc07 from "../../../../public/assets/img/svg/doc07.svg";
import doc08 from "../../../../public/assets/img/svg/doc08.svg";
import doc09 from "../../../../public/assets/img/svg/doc09.svg";
import doc10 from "../../../../public/assets/img/svg/doc10.svg";
import { sideImageSectionProps } from "../../../interfaces/sections";

export const HOW_IT_WORKS: sideImageSectionProps[] = [
	{
		heading: "Upload CV/ Resume",
		body: "Individuals who would like to change their resume into cover letter would use the upload page on the landing page",
		img: doc01,
		align: "right",
	},
	{
		heading: "Personalize the cover letter",
		body: "Give us more relevant details by filling  in all questions on this page. It helps us accurately generate a Cover Letter tailored to your job.",
		img: doc02,
		align: "left",
	},
	{
		heading: "Preview the cover letter",
		body: "Preview the Cover Letter generated before downloading. If you want to make changes to the Cover Letter, hit the back button at the top-left part of the screen and edit. If not, get ready for download , you are almost there!",
		img: doc03,
		align: "right",
	},
	{
		heading: "Download cover letter",
		body: "Click the download button to start downloading directly and save to PDF, DOCX, OR Text format",
		img: doc04,
		align: "left",
	},
	{
		heading: "Save to Profile",
		body: "You can save the Cover letter to your Dashboard by clicking on the Save to Profile button. For your document to Save, you have to be a registered user.",
		img: doc05,
		align: "right",
	},
];

export const AUTHENTICATION_PROCESS: sideImageSectionProps[] = [
	{
		heading: "Step 1: Create a New Account",
		body: `Click on the Register button to create an account.
 Fill in your name, and email address and Create a New Password. 
Create your password with a combination of letters, numbers, and symbols to make a strong password. Click on the Signup button to continue.
`,
		img: doc06,
	},
	{
		heading: "Step 2: Verification",
		body: "After creating your account, a verification code will be sent to the provided Email address. Input the code and click on the verify button to continue.",
		img: doc07,
	},
	{
		heading: "Step 3: Log-in",
		body: "After successful verification, you will be redirected to the login page. Log into your account with your email address and generated password. Click on the log-in button.",
		img: doc08,
	},
	{
		heading: "Step 4: Home Page",
		body: "After successful Sign-in your dashboard is opened.",
		disableBound: true,
	},
];

export const EXTRA_PEATURES: sideImageSectionProps[] = [
	{
		heading:
			"Get  accessible features when you sign up to our PRICING PACKAGE.",
		img: doc09,
	},
	{
		heading:
			"The History Feature is  available for  you so you can have  your  experience  journey documented  and pick up where you stopped.",
		img: doc10,
	},
];
