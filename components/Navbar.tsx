"use client";
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'vi' ? 'en' : 'vi';
    let newPath = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    } else {
      newPath = `/${nextLocale}${pathname}`;
    }
    const searchParams = typeof window !== 'undefined' ? window.location.search : '';
    router.replace(`${newPath}${searchParams}`);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold tracking-tighter">
          Velissa™
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href={`/${locale}#about`} onClick={(e) => handleScroll(e, 'about')} className="hover:opacity-70 transition-opacity">About</a>
            <a href={`/${locale}#projects`} onClick={(e) => handleScroll(e, 'projects')} className="hover:opacity-70 transition-opacity">Projects</a>
            <a href={`/${locale}#contact`} onClick={(e) => handleScroll(e, 'contact')} className="hover:opacity-70 transition-opacity">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="text-xs font-bold uppercase hover:opacity-70">
              {locale === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
               aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
