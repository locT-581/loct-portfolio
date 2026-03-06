import Image from "next/image";
import Link from "next/link";

// Using dummy data for demonstration. In a real app, you would fetch this by ID.
const PROJECT_DETAIL = {
  id: 1,
  title: "ECOMMERCE REDESIGN",
  client: "Duck Studio",
  date: "Apr 8, 2022",
  category: "UI/UX Design",
  heroImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
  overview: "An introduction serves as the preliminary section of any work, be it written, spoken, or presented, offering an initial glimpse or overview of the subject matter. It acts as a guide, providing context and laying the foundation for what is to follow, ensuring the audience gains a fundamental understanding of the topic or content that will be further explored or discussed.",
  problems: "A description of the challenges a client is facing entails a detailed overview of specific difficulties or obstacles encountered by the customer. This involves a profound understanding of the nature, impact, and context of the issue. Analyzing these challenges can aid in designing appropriate solutions and providing suitable support to meet the client's needs and expectations.",
  solution: "A description of the solution to a client's problem involves a detailed explanation of the steps or strategies planned to address the issues faced by the customer. This includes specifics about the proposed solution, including features or services to be provided, as well as the expected benefits after the implementation of the solution. The explanation of the solution aims to provide a comprehensive overview of how the product or service can offer an effective resolution to the client's issues.",
  conclusion: "The conclusion of a product summarizes the final outcomes of its development and evaluation. It provides a brief overview of the features, benefits, and strengths of the product, often accompanied by recommendations or next steps for users. This conclusion can reinforce the overall impression of the product and guide users in making informed and appropriate decisions.",
  colors: [
    { name: "Primary Color", hex: "#9b724e" },
    { name: "Secondary Color", hex: "#2b2b2b" }
  ]
};

export default function ProjectDetail() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0a0f18] text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Breadcrumb / Back button */}
        <div className="mb-12">
          <Link href="/#projects" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 w-fit">
            <span>←</span> Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-16 uppercase">
          {PROJECT_DETAIL.title}
        </h1>

        {/* Metadata Row */}
        <div className="border-t border-b border-white/20 py-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-2 font-medium">Client:</p>
            <p className="text-xl md:text-2xl font-medium">{PROJECT_DETAIL.client}</p>
          </div>
          <div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-2 font-medium">Date:</p>
            <p className="text-xl md:text-2xl font-medium">{PROJECT_DETAIL.date}</p>
          </div>
          <div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-2 font-medium">Category:</p>
            <p className="text-xl md:text-2xl font-medium">{PROJECT_DETAIL.category}</p>
          </div>
        </div>

        {/* Main Showcase Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-24">
          <Image 
            src={PROJECT_DETAIL.heroImage} 
            alt={PROJECT_DETAIL.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Blocks */}
        <div className="space-y-24 max-w-3xl">
          {/* Overview */}
          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Overview</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {PROJECT_DETAIL.overview}
            </p>
          </section>

          {/* Problems */}
          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Problems</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {PROJECT_DETAIL.problems}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Solution</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {PROJECT_DETAIL.solution}
            </p>
          </section>

          {/* Color Palette */}
          <section className="w-full max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Color Palatte</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12">
              A color palette is a prearranged selection of colors used in design to maintain visual consistency and harmony throughout various elements of a project, ensuring an aesthetic coherence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECT_DETAIL.colors.map((color, index) => (
                <div key={index}>
                  <div 
                    className="w-full aspect-4/3 rounded-3xl mb-4" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-xl font-medium">{color.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Conclusion</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {PROJECT_DETAIL.conclusion}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
