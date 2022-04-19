import React from 'react'
import Link from 'next/link';
import Image from "next/image"

import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { BsSun, BsMoonStars } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import HeaderNav from './HeaderNav';


const Header = () => {
	const [mounted, setMounted] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const { theme, setTheme } = useTheme();
	const { asPath, locale } = useRouter();

	const closeMenu = () => {
		setShowMenu(false)
	}


	const openMenu = () => {
		setShowMenu(true)
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null;
	}

	return (
		<header className="bg-gray-500/80 sticky top-0 z-50 backdrop-blur-md	 dark:bg-gray-700/80 p-2 text-white">
			<div className="flex container mx-auto   items-center">
				<button onClick={openMenu} className='sm:hidden text-white mr-3 hover:bg-slate-300/30 rounded-sm p-1 transition' >
					<HiOutlineMenuAlt1 size={24} />
				</button>
				<Link href="/">
					<a>
						<Image src="/logo.png" width={50} height={40} />
					</a>
				</Link>

				<HeaderNav showMenu={showMenu} closeMenu={closeMenu} />

				<div className="flex items-center ml-auto">
					<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="mr-5 inline-block">
						{
							theme === 'light' ?
								<BsSun color="white" fontSize="24px" />
								: <BsMoonStars color="white" fontSize="20px" />
						}
					</button>
					<Link href={asPath} locale="ru" >
						<a className={`inline-block  text-sm text-white  rounded-l-md px-3 py-1  ${locale === 'ru' ? 'bg-red-400' : 'bg-slate-300 text-black/40'} `}>RU</a>
					</Link>
					<Link href={asPath} locale="en" >
						<a className={`inline-block  text-sm text-white  rounded-r-md px-3 py-1 ${locale === 'en' ? 'bg-red-400' : 'bg-slate-300 text-black/40'}`}>EN</a>
					</Link>
				</div>
			</div>

		</header>
	)
}

export default Header