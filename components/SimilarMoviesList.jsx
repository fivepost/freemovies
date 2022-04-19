import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import MovieCard from './MovieCard';
import SeriesCard from './SeriesCard';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import useTranslation from "next-translate/useTranslation"


const SimilarMoviesList = ({ movies }) => {
	const { t } = useTranslation('common')

	return (
		<div className="container mx-auto px-0 md:px-2 mb-3">
			<h1 className='mt-8 mb-5 text-2xl px-2 md:px-0 color-black dark:color-white'>{t('similar_movies')}</h1>
			<Swiper
				spaceBetween={20}
				slidesPerView={1.2}
				draggable={true}
				loop={true}
				freeMode={true}
				centeredSlides={true}
				modules={[ Pagination, Autoplay]}
				breakpoints={{
					320: {
						slidesPerView: 1.5,
						spaceBetween: 12
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 15
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 15
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 6,
						spaceBetween: 20
					},
					1280: {
						slidesPerView: 6,
						spaceBetween: 20
					}
					
				}}
			>
				{movies.map(movie => (
					<SwiperSlide key={movie.id}>
						{movie.title ? <MovieCard movie={movie} /> :
							<SeriesCard serie={movie} />

						}
					</SwiperSlide>
				)
				)}
			</Swiper>
		</div>
	)
}

export default SimilarMoviesList