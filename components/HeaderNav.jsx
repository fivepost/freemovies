
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const HeaderNav = ({ showMenu, closeMenu }) => {
	const { t } = useTranslation('common')

	return (
		<nav onClick={closeMenu} className={`fixed top-0 left-0 overflow-hidden   ${!showMenu ? 'pointer-events-none bg-transparent' : ' pointer-events-auto bg-black/60' }  h-screen w-screen sm:static sm:bg-transparent sm:ml-2 sm:h-auto sm:w-auto`}>
			<ul onClick={(e) => e.stopPropagation()} className={`flex absolute top-0 right-0  ${!showMenu ? 'translate-x-full' : ''}  sm:translate-x-0 transition sm:transition-none bg-white w-64 h-full flex-col pt-20 sm:bg-transparent sm:p-0 sm:flex-row sm:gap-2 sm:static sm:h-auto sm:w-auto`} >
			<li className="border-b border-t sm:border-none">
				<Link href="/movies">
					<a onClick={closeMenu} className="md:ml-8 text-sm w-full font-semibold px-2 py-3 inline-block text-black sm:text-white sm:p-0">
						{t('movies')}
					</a>
				</Link>
			</li>
			<li className="border-b  sm:border-none">
				<Link href="/series">
					<a onClick={closeMenu} className="md:ml-4 text-sm w-full font-semibold px-2 py-3 inline-block text-black sm:text-white sm:p-0">
						{t('series')}
					</a>
				</Link>
			</li>

		</ul>
		</nav >
	)
}

export default HeaderNav