import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export interface NextPageWithLayout {
	getLayout?: (page: ReactElement) => ReactNode;
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export interface NextPageWithLayoutProps {
	children: ReactElement;
	headerOnly?: boolean;
	pageIndex?: number;
}

export type MuiColorProps =
	| "success"
	| "error"
	| "warning"
	| "info"
	| "primary"
	| "secondary";
