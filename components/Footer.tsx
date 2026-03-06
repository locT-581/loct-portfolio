"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f1521] text-white pt-16 pb-12 w-full overflow-hidden relative font-sans">
      {/* Marquee Banner */}
      <div className="w-full flex overflow-hidden whitespace-nowrap mb-24 opacity-90 select-none">
         <div className="animate-marquee inline-block font-bold text-7xl md:text-[120px] tracking-tighter leading-none">
            DESIGNED & CODE &nbsp; DESIGNED & CODE &nbsp; DESIGNED & CODE &nbsp;
         </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-12 relative w-full">
          {/* Logo & Image Section (Left) */}
          <div className="md:col-span-4 flex flex-col justify-between h-full min-h-100">
             <h2 className="text-xl font-bold tracking-tight mb-8">Margon™</h2>
             
             {/* Profile image container at the bottom left */}
             <div className="w-48 h-64 overflow-hidden mt-auto">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
             </div>
          </div>

          {/* Links Section (Middle) */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4 pt-1">
             <Link href="#" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                <span className="text-xs">→</span> <span className="text-sm font-medium">Home,</span>
             </Link>
             <Link href="#about" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                <span className="text-xs">→</span> <span className="text-sm font-medium">About,</span>
             </Link>
             <Link href="#" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                <span className="text-xs">→</span> <span className="text-sm font-medium">Dribbble,</span>
             </Link>
             <Link href="#" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                <span className="text-xs">→</span> <span className="text-sm font-medium">Twitter</span>
             </Link>
          </div>

          {/* Contact & Copyright Section (Right) */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col justify-between h-full min-h-100">
             <div className="flex flex-col gap-8 text-xl md:text-2xl font-normal tracking-tight">
                <div className="flex flex-col gap-2">
                   <a href="mailto:hello@margon.me" className="hover:opacity-70 transition-opacity">hello@margon.me</a>
                   <a href="tel:+0137877288" className="hover:opacity-70 transition-opacity">(+01) 378-772-88</a>
                </div>
                
                <div className="flex flex-col">
                   <p>4140 Parker Rd. Allentown,</p>
                   <p>New Mexico 31134</p>
                </div>

                <div className="flex flex-col gap-2">
                   <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
                   <a href="#" className="hover:opacity-70 transition-opacity">Linkedin</a>
                </div>
             </div>

             {/* Footer Bottom Quote/Copyright aligning with the right column */}
             <div className="mt-auto flex flex-col lg:flex-row justify-between items-start lg:items-end text-lg opacity-90 pt-16">
                <p className="max-w-70 leading-snug">I design experiences that <br/> speak your users&apos; language</p>
                <p className="mt-4 lg:mt-0 font-medium">©2026</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
