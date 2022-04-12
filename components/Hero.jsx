import Image from "next/image"
import Link from "next/link"

import  useTransition  from "next-translate/useTranslation"

const Hero = () => {
	const {t} = useTransition()
	return (
		<div className="text-center bg-white dark:bg-zinc-800 pb-10">
			<div className="w-60 mx-auto">
				<Image src="/movie-banner.svg" width={240} height={240} layout='responsive' />
			</div>
			<h1 className='text-2xl text-gray-700 uppercase font-bold dark:text-gray-200'>{t('common:greetings')}</h1>
			<p className='text-gray-500 dark:text-white'>{t('common:site_descr')}</p>
				<Link href='/contacts'>
				<a className='btn btn-primary text-white inline-block'>{t('common:contact_us')}</a>
				</Link>
		</div>
	)
}

export default Hero