import axios from 'axios';
import Layout from '../../../components/Layout';
import NotFound from '../../404';
import SimilarMoviesList from './../../../components/SimilarMoviesList';
import SeriesDetail from './../../../components/SeriesDetail';

const SeriesSingle = ({ movie, trailer, similarMovies, actors, error }) => {
	if (error) {
		return <NotFound />
	}


	return (
		<>
			
			<Layout title={movie.name} description={movie.overview} ogImage={movie.poster_path}>
				<SeriesDetail serie={movie} trailer={trailer} actors={actors} />
				<SimilarMoviesList movies={similarMovies} />
			</Layout>
		</>
	)
}


export async function getServerSideProps(ctx) {
	let movie, trailer, similarMovies, actors, error
	try {
		const lang = ctx.locale == 'en' ? 'en-US' : "ru-RU"
		const { id } = ctx.params
		const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=${lang}`)
		const youtubeCode = await axios(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}&language=${lang}`)
		const similar = await axios(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}&language=${lang}`)
		const actorsCredits = await axios(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.API_KEY}&language=${lang}`)
		movie = res.data
		similarMovies = similar.data.results
		trailer = youtubeCode.data.results
		actors = actorsCredits.data.cast
		error = false

	} catch (e) {
		actors = []
		movie = []
		trailer = []
		similarMovies = []
		error = true
	}

	return {
		props: { error, movie, trailer, actors, similarMovies }
	}
}


export default SeriesSingle