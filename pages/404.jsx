import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router"
import { useEffect } from 'react';
import useTranslation from "next-translate/useTranslation"
import  Head  from 'next/head';

const NotFound = () => {
	const router = useRouter();
	const { t } = useTranslation()
	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/')
		}, 5000)

		return () => clearTimeout(timer)
	},[])
	return (
		<>
			<Head>
				<title>404: Page Not Found</title>
				<meta name="description" content="Page Not Found" />
				<meta name="author" content="fivepost" />
			</Head>
		<div className="max-w-1xl text-center flex items-center h-screen mx-auto">
			<div>
				<img src="/404.svg" width="250px" className="block mx-auto mb-4" alt="not found" />
					<h1 className="text-4xl font-semibold"><span className="text-red-400">Oops!</span> {t('common:page_not_found')} </h1>
					<p>{t('common:page_not_found_descr')}</p>
				<Link href="/">
						<a className="btn btn-primary inline-block text-white">{t('common:back_home')}</a>
				</Link>
			</div>

			</div>
		</>
	)
}

export default NotFound