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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-inner">
        <Link href={`/${locale}`} className="navbar-logo">
          Velisse®
        </Link>

        <nav className="navbar-menu">
          <Link href={`/${locale}`} className="navbar-link active">Home</Link>
          <a href={`/${locale}#about`} onClick={(e) => handleScroll(e, 'about')} className="navbar-link">About</a>
          <a href={`/${locale}#projects`} onClick={(e) => handleScroll(e, 'projects')} className="navbar-link">Project</a>
          <a href={`/${locale}#details`} onClick={(e) => handleScroll(e, 'details')} className="navbar-link">Details</a>
          <a href={`/${locale}#contact`} onClick={(e) => handleScroll(e, 'contact')} className="navbar-link">Contact</a>
        </nav>

        <div className="navbar-actions">
          <button onClick={toggleLanguage} className="navbar-lang-btn">
            {locale === 'vi' ? 'EN' : 'VI'}
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="navbar-theme-btn"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="h-5 w-5 hidden dark:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
