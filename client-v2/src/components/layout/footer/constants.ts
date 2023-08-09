import { column } from "../../../interfaces/link";

const menu: column[] = [
	{
		title: "Product",
		links: [
			{
				title: "Documentation",
				href: "/docs",
			},
			{
				title: "FAQs",
				href: "/faqs",
			},
			{
				title: "Career",
				href: "/career",
			},
			{
				title: "Pricing",
				href: "/pricing",
			},
		],
	},
	{
		title: "Company",
		links: [
			{
				title: "About us",
				href: "/about",
			},
			{
				title: "Blog",
				href: "/blog",
			},
			{
				title: "Contact us",
				href: "/contact",
			},
		],
	},
	{
		title: "Activity",
		links: [
			{
				title: "Customer Stories",
				href: "/customer-stories",
			},
			{
				title: "Features",
				href: "/features",
			},
		],
	},
];

export { menu };
