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

export type MediaType = "image" | "video";
export type MediaSize = "full" | "half" | "landscape" | "portrait" | "square";

export type ProjectMedia = {
	type: MediaType;
	src: string;
	size: MediaSize;
	poster?: string;
	alt?: string;
};

export type Project = {
	id: string;
	categoryId: CategoryId;
	image: string; // Used in grid/list
	gallery: ProjectMedia[]; // Used in detail page
	detailsImage: string; // The detail image
	portalImage: string; // The portal image
	squareImage: string; // The square image
	panoramaImage?: string; // The panorama image
	appStoreLink?: string; // Link to the App Store
	liveLink?: string; // Link to live site or documentation
	figmaLink?: string; // Link to Figma design
};

export const PROJECTS: Project[] = [
	{
		id: "short-video-feed-sdk",
		categoryId: "architecture",
		image: "/assets/images/sdk-short.png",
		portalImage: "/assets/images/sdk-short.png",
		squareImage: "/assets/images/projects/short/square.png",
		gallery: [
			{
				type: "image",
				src: "/assets/images/sdk-short.png",
				size: "portrait",
			},
			{
				type: "image",
				src: "/assets/images/projects/short/a.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/short/b.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/short/c.png",
				size: "landscape",
			},
		],
		detailsImage: "/assets/images/projects/short/detail.png",
		liveLink: "https://xhub-short-document.vercel.app/",
	},
	{
		id: "yaah-connect",
		categoryId: "mobile-app",
		image: "/assets/images/booking-sport.png",
		portalImage: "/assets/images/booking-sport.png",
		squareImage: "/assets/images/booking-square.png",
		gallery: [
			{
				type: "image",
				src: "/assets/images/projects/yaah/a.png",
				size: "portrait",
			},
			{
				type: "image",
				src: "/assets/images/projects/yaah/c.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/yaah/d.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/yaah/e.png",
				size: "portrait",
			},
			{
				type: "image",
				src: "/assets/images/projects/yaah/f.png",
				size: "portrait",
			},
			{
				type: "image",
				src: "/assets/images/projects/yaah/b.png",
				size: "portrait",
			},
		],
		detailsImage: "/assets/images/projects/yaah/detail.png",
		appStoreLink: "https://apps.apple.com/vn/app/yaah-connect/id6757145656",
	},
	{
		id: "rainydays-wallpaper",
		categoryId: "web-app",
		image: "/assets/images/rainydays-wallpaper.png",
		portalImage: "/assets/images/rainydays-wallpaper.png",
		squareImage: "/assets/images/rainydays-wallpaper.png",
		gallery: [
			{
				type: "image",
				src: "/assets/images/booking-sport.png",
				size: "full",
			},
			{
				type: "image",
				src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
				size: "portrait",
			},
			{
				type: "image",
				src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
				size: "square",
			},
			{
				type: "image",
				src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
				size: "landscape",
			},
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
			{
				type: "image",
				src: "/assets/images/mimic-mcp.png",
				size: "full",
			},
			{
				type: "image",
				src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
				size: "portrait",
			},
			{
				type: "image",
				src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
				size: "square",
			},
			{
				type: "image",
				src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
				size: "landscape",
			},
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
			{
				type: "image",
				src: "/assets/images/projects/sudoku/c.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/sudoku/b.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/sudoku/a.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/sudoku/d.png",
				size: "square",
			},
			{
				type: "video",
				src: "/assets/images/projects/sudoku/video.mp4",
				size: "full",
			},
		],
		detailsImage: "/assets/images/sudoku-game.jpeg",
		liveLink: "https://github.com/locT-581/Sudoku-game/releases/tag/v1.0.0",
		figmaLink:
			"https://www.figma.com/file/ZDgSiACwATcaH5BQl1Jq4M/Sudoku-Game?type=design&mode=design&t=VlKN4Wjy4fPhS1zt-1",
	},
	{
		id: "graph-builder",
		categoryId: "web-app",
		image: "/assets/images/graph-builder.jpeg",
		portalImage: "/assets/images/graph-builder.jpeg",
		squareImage: "/assets/images/graph-builder.jpeg",
		gallery: [
			{
				type: "image",
				src: "/assets/images/graph-builder.jpeg",
				size: "full",
			},
		],
		detailsImage: "/assets/images/graph-builder.jpeg",
	},
	{
		id: "uni-portal",
		categoryId: "mobile-app",
		image: "/assets/images/projects/uniportal/square.png",
		portalImage: "/assets/images/square.png",
		squareImage: "/assets/images/projects/uniportal/square.png",
		panoramaImage: "/assets/images/projects/uniportal/panoramic.png",
		gallery: [
			{
				type: "image",
				src: "/assets/images/projects/uniportal/a.png",
				size: "portrait",
			},
			{
				type: "image",
				src: "/assets/images/projects/uniportal/b.png",
				size: "square",
			},
			{
				type: "image",
				src: "/assets/images/projects/uniportal/c.png",
				size: "portrait",
			},
			{
				type: "image",
				src: "/assets/images/projects/uniportal/h.png",
				size: "portrait",
			},
		],
		detailsImage: "/assets/images/projects/uniportal/detail.png",
		appStoreLink: "https://apps.apple.com/vn/app/uniportal/id6749141245",
	},
];

export const getProjectById = (id: string) => PROJECTS.find((p) => p.id === id);

export const FEATURED_PROJECT_IDS = [
	"short-video-feed-sdk",
	"yaah-connect",
	"sudoku-game",
];

export const DISCOVER_PROJECT_IDS = ["mimic-mcp", "rainydays-wallpaper"];

export const PORTFOLIO_PROJECT_IDS = [
	"uni-portal",
	"short-video-feed-sdk",
	"yaah-connect",
	"sudoku-game",
	"rainydays-wallpaper",
	"mimic-mcp",
	"graph-builder",
];

export const getRelatedProjectIds = (currentId: string) => {
	const others = PORTFOLIO_PROJECT_IDS.filter((id) => id !== currentId);
	// Return up to 3 items
	return others.slice(0, 3);
};
