import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import MovieCard from './MovieCard';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import useTransition from "next-translate/useTranslation"


const SimilarMoviesList = ({ movies }) => {
	const { t } = useTransition()

	return (
		<div className="container mx-auto px-2 mb-3">
			<h1 className='mt-8 mb-5 text-2xl color-black dark:color-white'>{t('common:similar_movies')}</h1>
			<Swiper
				spaceBetween={20}
				slidesPerView={1.2}
				draggable={true}
				autoPlay={true}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				modules={[ Pagination, Autoplay]}
				breakpoints={{
					320: {
						slidesPerView: 1.2,
						spaceBetween: 12
					},
					480: {
						slidesPerView: 2.2,
						spaceBetween: 15
					},
					640: {
						slidesPerView: 3.2,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 4.2,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 5.2,
						spaceBetween: 20
					},
					1280: {
						slidesPerView: 6.2,
						spaceBetween: 20
					}
					
				}}
			>
				{movies.map(movie => (
					<SwiperSlide>
						<MovieCard movie={movie} key={movie.id} />
					</SwiperSlide>
				)
				)}
			</Swiper>
		</div>
	)
}

export default SimilarMoviesList