export type CategoryId =
	| "web-app"
	| "mobile-app"
	| "architecture"
	| "motion-ui";

export const CATEGORY_IDS: ("all" | CategoryId)[] = [
	"all",
	"web-app",
	"mobile-app",
	"architecture",
	"motion-ui",
];

export type Project = {
	id: string;
	categoryId: CategoryId;
	image: string; // Used in grid/list
	gallery: string[]; // Used in detail page, hero is gallery[0] usually
	detailsImage: string; // The detail image
	portalImage: string; // The portal image
	squareImage: string; // The square image
};

export const PROJECTS: Project[] = [
	{
		id: "short-video-feed-sdk",
		categoryId: "architecture",
		image: "/assets/images/sdk-short.png",
		portalImage: "/assets/images/sdk-short.png",
		squareImage: "/assets/images/short-square.png",
		gallery: [
			"/assets/images/sdk-short.png",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "hybrid-mobile-sports-booking",
		categoryId: "mobile-app",
		image: "/assets/images/booking-sport.png",
		portalImage: "/assets/images/booking-sport.png",
		squareImage: "/assets/images/booking-square.png",
		gallery: [
			"/assets/images/booking-sport.png",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "rainydays-wallpaper",
		categoryId: "web-app",
		image: "/assets/images/rainydays-wallpaper.png",
		portalImage: "/assets/images/rainydays-wallpaper.png",
		squareImage: "/assets/images/rainydays-wallpaper.png",
		gallery: [
			"/assets/images/booking-sport.png",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "mimic-mcp",
		categoryId: "architecture",
		image: "/assets/images/mimic-mcp.png",
		portalImage: "/assets/images/mimic-mcp.png",
		squareImage: "/assets/images/mimic-mcp.png",
		gallery: [
			"/assets/images/mimic-mcp.png",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "sudoku-game",
		categoryId: "web-app",
		image: "/assets/images/sudoku-game.jpeg",
		portalImage: "/assets/images/sudoku-game.jpeg",
		squareImage: "/assets/images/sudoku-game.jpeg",
		gallery: [
			"/assets/images/sudoku-game.jpeg",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "graph-builder",
		categoryId: "web-app",
		image: "/assets/images/graph-builder.jpeg",
		portalImage: "/assets/images/graph-builder.jpeg",
		squareImage: "/assets/images/graph-builder.jpeg",
		gallery: [
			"/assets/images/graph-builder.jpeg",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "uni-portal",
		categoryId: "mobile-app",
		image: "/assets/images/uni-portal.jpeg",
		portalImage: "/assets/images/uni-portal.jpeg",
		squareImage: "/assets/images/uniportal-square.png",
		gallery: [
			"/assets/images/uni-portal.jpeg",
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
		],
		detailsImage:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
];

export const getProjectById = (id: string) => PROJECTS.find((p) => p.id === id);

export const FEATURED_PROJECT_IDS = [
	"short-video-feed-sdk",
	"hybrid-mobile-sports-booking",
];

export const DISCOVER_PROJECT_IDS = [
	"sudoku-game",
	"mimic-mcp",
	"rainydays-wallpaper",
];

export const PORTFOLIO_PROJECT_IDS = [
	"uni-portal",
	"short-video-feed-sdk",
	"hybrid-mobile-sports-booking",
	"sudoku-game",
	"rainydays-wallpaper",
	"mimic-mcp",
	"graph-builder",
];

export const getRelatedProjectIds = (currentId: string) => {
	const others = PORTFOLIO_PROJECT_IDS.filter((id) => id !== currentId);
	// Return up to 2 items
	return others.slice(0, 2);
};
