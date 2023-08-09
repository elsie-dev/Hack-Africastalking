import React, { ReactElement } from "react";
import LandingPageHero from "../components/sections/hero/landingPageHero";
import { NextPageWithLayout } from "../interfaces/pages";
import MainLayout from "../components/layout/MainLayout";

const Home: NextPageWithLayout = () => {
	return <LandingPageHero />;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
