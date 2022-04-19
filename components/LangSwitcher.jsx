import { useRouter } from "next/router";
import Link from 'next/link';


const LangSwitcher = () => {
	const { asPath, locale } = useRouter();

	return (
		<>
			<Link href={asPath} locale="ru" >
				<a className={`inline-block  text-sm text-white  rounded-l-md px-3 py-1  ${locale === 'ru' ? 'bg-red-400' : 'bg-slate-300 text-black/40'} `}>RU</a>
			</Link>
			<Link href={asPath} locale="en" >
				<a className={`inline-block  text-sm text-white  rounded-r-md px-3 py-1 ${locale === 'en' ? 'bg-red-400' : 'bg-slate-300 text-black/40'}`}>EN</a>
			</Link>
		</>
	)
}

export default LangSwitcher