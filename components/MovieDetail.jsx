import Image from 'next/image'
import { useRouter } from "next/router"
import { useState, useEffect } from 'react';
import Moment from 'react-moment'
import VideoModal from './VideoModal';
import ActorsSidebar from './ActorsSidebar';

import useTranslation from "next-translate/useTranslation"

import { BsPlayCircle } from "react-icons/bs";
import 'moment/locale/ru';



const MovieDetail = ({ movie, trailer, actors }) => {
	const [showModal, setShowModal] = useState(false)
	const { t } = useTranslation()
	const router = useRouter();
	const [dateLocale, setDateLocale] = useState(router.locale)
	let cropUrl = /(?:[\w-]+\.)+[\w-]+/

	useEffect(() => {
		setDateLocale(router.locale)
	},
		[router.locale])
	return (
		<>
			{!!trailer.length && <VideoModal
				showModal={showModal}
				setShowModal={setShowModal}
				videoPath={trailer[0].key}
			/>}
			<div className="container grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto px-2 py-6">
				<div className="lg:col-span-3">
					<div className="relative ">
						<Image height={608}
							key={movie.id}
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
					{!!movie.homepage && <p className="text-gray-600 dark:text-white text-sm mt-2">{t('common:website')}: <a href={movie.homepage} className="text-blue-400 underline" target="_blank">{cropUrl.exec(movie.homepage)}</a></p>}
					{!!trailer.length && <button onClick={() => setShowModal(true)} className="inline-flex bg-red-400 hover:bg-red-500 items-center text-white uppercase py-3 px-6 text-sm mt-4 rounded  visited:text-white transition-colors"
					><BsPlayCircle
							className="mr-2"
							size={20} /> {t('common:watch_trailer')}</button>
					}
				</div>
				<ActorsSidebar actors={actors}/>
			</div>
		</>
	)
}

export default MovieDetail