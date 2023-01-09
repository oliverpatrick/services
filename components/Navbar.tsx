import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar({ path }: any) {
  console.log(path);
  return (
    <header className="fixed top-0 z-20 w-full p-2 backdrop-blur-md">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center gap-3 text-base">
          <Link href="/" className="group">
            <h2 className="p-2 text-lg font-semibold tracking-tighter font-mplus">
              CIO Development
            </h2>
          </Link>
          <div className="items-center hidden gap-6 md:flex">
            <Link href="https://www.opdev.co.uk">The Dev</Link>
          </div>
          <div className="flex-1"></div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
