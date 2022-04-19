import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import useTranslation from "next-translate/useTranslation"


const Contacts = () => {
	const { t } = useTranslation()
	return (
		<Layout title={t('common:our_contacts')}>
			<div className="text-center bg-white dark:bg-zinc-800 pb-10">
				<h1 className='text-2xl mt-8 text-gray-700 dark:text-white uppercase font-bold'>{t('common:our_contacts')}</h1>
				<div className="w-60 mx-auto">
					<Image src="/contact.svg" width={240} height={240} layout='responsive' />
				</div>
				<Link href='/'>
					<a className="btn btn-secondary inline-block">{t('common:back_home')}</a>
				</Link>
			</div>
		</Layout>
	)
}
export default Contacts