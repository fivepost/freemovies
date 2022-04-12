import MovieCard from "./MovieCard"
import useTransition from "next-translate/useTranslation"


const MovieList = ({ movies }) => {
	const { t } = useTransition()

	return (
		<div className="bg-zinc-100 dark:bg-zinc-700 ">
			<div className="container mx-auto p-2">
				<h1 className='mt-8 mb-5 text-2xl color-black dark:color-white'>{t('common:popular_movies')}</h1>
				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
					{movies.map(movie => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieList