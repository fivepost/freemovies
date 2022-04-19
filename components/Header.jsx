import React from 'react'
import Link from 'next/link';
import Image from "next/image"

import { useState, useEffect } from "react";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";


import HeaderNav from './HeaderNav';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import SearchModal from './SearchModal';


const Header = () => {
	const [mounted, setMounted] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

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
		<>
			<SearchModal />
			<header className="bg-gray-500/80 sticky top-0 z-50 backdrop-blur-md	 dark:bg-gray-700/80 p-2 text-white">
				<div className="flex container mx-auto   items-center">
					<button onClick={openMenu} className='sm:hidden text-white mr-3 bg-slate-100/10 hover:bg-slate-300/30 rounded-md p-2 transition' >
						<HiOutlineMenuAlt1 size={20} />
					</button>
					<Link href="/">
						<a>
							<Image src="/logo.png" width={50} height={40} />
						</a>
					</Link>
					<HeaderNav showMenu={showMenu} closeMenu={closeMenu} />
					<div className="flex items-center ml-auto">
						<button className='mr-1  text-white hover:bg-slate-300/30 rounded-md p-2 transition'>
							<FiSearch size={20} />
						</button>
						<ThemeSwitcher />
						<LangSwitcher />
					</div>
				</div>
			</header>
		</>
	)
}

export default Header