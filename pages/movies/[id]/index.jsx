
import axios from 'axios';
import Image from 'next/image'
import Moment from 'react-moment'
import { useState, useEffect } from 'react';
import { BsPlayCircle } from "react-icons/bs";
import Layout from '../../../components/Layout';
import useTransition from "next-translate/useTranslation"
import { useRouter } from "next/router"
import 'moment/locale/ru';
import VideoModal from '../../../components/VideoModal';
import NotFound from '../../404';
import SimilarMoviesList from './../../../components/SimilarMoviesList';

const Movie = ({ movie, trailer, similarMovies, error }) => {


	const router = useRouter();
	const { t } = useTransition()
	const [dateLocale, setDateLocale] = useState(router.locale)
	const [showModal, setShowModal] = useState(false)


	useEffect(() => {
		setDateLocale(router.locale)
	},
		[router.locale])
	if (error) {
		return <NotFound />
	}

	return (
		<>
			{!!trailer.length && <VideoModal
				showModal={showModal}
				setShowModal={setShowModal}
				videoPath={trailer[0].key}
			/>}
			<Layout title={movie.title} description={movie.overview} ogImage={movie.poster_path}>
				<div className="max-w-4xl mx-auto px-2 py-6">
					<div className="relative mx-auto">
						<Image height={608}
							width={1080}
							layout='responsive'
							className="rounded-md"
							placeholder="blur"
							blurDataURL="/blur-placeholder.jpg"
							src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						/>
						{!!trailer.length && <button onClick={() => setShowModal(true)}
							className="bg-transparent block absolute w-full h-full left-0 top-0 z-25"></button>}
					</div>
					<h1 className="font-bold text-xl mb-2 mt-3">{movie.title}</h1>
					<p className="text-gray-600 dark:text-white text-sm mb-4">
						{movie.overview}
					</p>
					<p className="text-gray-600 dark:text-white text-sm mt-4">
						{t('common:genres')}: <span className="font-semibold">
							{movie.genres.map(genre => genre.name).join(', ')}
						</span>
					</p>
					<p className="text-gray-600 dark:text-white text-sm ">
						{t('common:rating')}:
						<span className="font-semibold"> {movie.vote_average}
						</span>
					</p>
					<p className="text-gray-600 dark:text-white text-sm ">{t('common:release_date')}:  <span className="font-semibold"><Moment locale={dateLocale} format='LL'>{movie.release_date}</Moment></span></p>
					{!!movie.homepage && <p className="text-gray-600 dark:text-white text-sm mt-2">{t('common:website')}: <a href={movie.homepage} className="text-blue-400 underline" target="_blank">{movie.homepage}</a></p>}
					{!!trailer.length && <button onClick={() => setShowModal(true)} className="inline-flex bg-red-400 hover:bg-red-500 items-center text-white uppercase py-3 px-6 text-sm mt-4 rounded  visited:text-white transition-colors"
					><BsPlayCircle
							className="mr-2"
							size={20} /> {t('common:watch_trailer')}</button>
					}
				</div>

				<SimilarMoviesList movies={similarMovies} />
			</Layout>
		</>
	)
}


export async function getServerSideProps(ctx) {
	let movie, trailer, similarMovies, error
	try {
		const lang = ctx.locale == 'en' ? 'en-US' : "ru-RU"
		const { id } = ctx.params
		const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=${lang}`)
		const youtubeCode = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=${lang}`)
		const similar = await axios(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=${lang}`)
		movie = res.data
		similarMovies = similar.data.results
		trailer = youtubeCode.data.results
		error = false

	} catch (e) {
		console.log(e);
		movie = []
		trailer = []
		similarMovies = []
		error = true
	}

	return {
		props: { error, movie, trailer, similarMovies }
	}
}


export default Movie