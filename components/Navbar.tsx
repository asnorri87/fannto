'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import Image from 'next/legacy/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const productLinks = [
    {
      name: 'Borðplötur',
      href: '/bordplotur',
      description: 'Sérsmíðum eftir óskum',
    },
    { name: 'Innréttingar', href: '/innrettingar' },
    { name: 'Munaskápar', href: '/munaskapar' },
    { name: 'Skilrúm', href: '/skilrum' },
    { name: 'Sérsmíði', href: '/sersmidi' },
    { name: 'Skápahurðir', href: '/skapahurdir' },
    { name: 'Innihurðir', href: '/innihurdir' },
    { name: 'Gólfefni', href: '/golfefni' },
    // Add more product links here...
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolling ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        } dark:bg-gray-900`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center w-1/5">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={193.5} height={29} />
            </Link>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <div className="hidden md:flex w-3/5 justify-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="text-xl">
                    Vörur
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="h-80 w-full flex">
                    <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[600px]">
                      {productLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild href={link.href}>
                            <a className=" text-gray-700 hover:text-gray-900">
                              <div className="text-lg font-medium leading-none">
                                {link.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xl">
                    Þjónusta
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 text-center">
                      <li>Uppsetningarþjónusta</li>
                      <li>Hvernig á að panta?</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xl">
                    Um okkur
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>Um okkur</li>
                      <li>Starfsfólk</li>
                      <li>Fréttir</li>
                      <li>Viltu starfa með okkur?</li>
                      <li>Hafa samband</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xl">
                    Verkin okkar
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-2 lg:w-[600px]">
                      <li>Eldhús</li>
                      <li>Baðherbergi</li>
                      <li>Sérsmíði</li>
                      <li>Munaskápar</li>
                      <li>Skilrúm</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex w-1/5 justify-end space-x-4">
            <button className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Sliding Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-800"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col items-center space-y-4 mt-16">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>

            <button className="px-4 py-2 border border-gray-800 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-100">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
