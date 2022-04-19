
import Link from 'next/link';
import  useTranslation  from 'next-translate/useTranslation';

const HeaderNav = () => {
	const { t } = useTranslation('common')

	return (
		<nav>
			<ul>
				<li>
					<Link href="/movies">
						<a className="ml-8 text-sm font-semibold text-white">
							{t('movies')}
						</a>
					</Link>
					<Link href="/series">
						<a className="ml-3 text-sm font-semibold text-white">
							{t('series')}
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav