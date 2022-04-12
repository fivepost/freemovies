import axios from 'axios';
import Layout from '../../../components/Layout';
import NotFound from '../../404';
import SimilarMoviesList from './../../../components/SimilarMoviesList';
import MovieDetail from './../../../components/MovieDetail';

const Movie = ({ movie, trailer, similarMovies, actors, error }) => {
	if (error) {
		return <NotFound />
	}


	return (
		<>
			
			<Layout title={movie.title} description={movie.overview} ogImage={movie.poster_path}>
				<MovieDetail movie={movie} trailer={trailer} actors={actors} />
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
		const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=${lang}`)
		const youtubeCode = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=${lang}`)
		const similar = await axios(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=${lang}`)
		const actorsCredits = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=${lang}`)
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


export default Movie