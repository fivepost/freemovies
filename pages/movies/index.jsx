import axios from "axios";
import Layout from './../../components/Layout';
import MovieList from './../../components/MovieList';
import useTransition from "next-translate/useTranslation"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Link from 'next/link'



export default function Movies({ movies, page }) {
	const { t } = useTransition()

	return (
		<Layout title={t('common:popular_movies')}>
			<MovieList movies={movies.results} />


			<div className="flex justify-center gap-3 mb-5">
				{!(page <= 1) && <Link href={{
					pathname: '/movies',
					query: { page: page - 1}
				}}>
					<a className="btn btn-primary flex items-center "><FiChevronLeft size={20} /> <span className="pr-2">{t('common:prev')}</span></a>
				</Link>}

				{page <=499 &&
					<Link href={{
						pathname: '/movies',
						query: { page: page + 1 }
					}}>
						<a className="btn btn-primary flex items-center "><span className="pl-2">{t('common:next')} </span><FiChevronRight size={20} /> </a>
					</Link>
				}

			</div>
		</Layout>
	)
}

export async function getServerSideProps(ctx) {

	const page = +ctx.query.page ? +ctx.query.page : 1
	const lang = ctx.locale == 'en' ? 'en-US' : "ru-RU"
	const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=${lang}S&page=${page}`)
	const totalPages = res.totalPages
	const movies = res.data
	console.log(res);
	return {
		props: { movies, page }
	}
}