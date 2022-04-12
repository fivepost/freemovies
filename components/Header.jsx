import React from 'react'
import Link from 'next/link';
import Image from "next/image"

import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { BsSun, BsMoonStars } from "react-icons/bs";


const Header = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const { asPath, locale } = useRouter();

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null;
	}

	return (
		<header className="bg-gray-500 sticky top-0 z-50 dark:bg-gray-700 p-2 text-white">
			<div className="flex container mx-auto px-2 justify-between items-center">
				<Link href="/">
					<a>
						<Image src="/logo.png" width={50} height={40} />
					</a>
				</Link>
				<div className="flex items-center">
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