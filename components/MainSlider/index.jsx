import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import styles from './MainSlider.module.css'

const MainSlider = () => {
	return (
		
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
				<div className={styles.slide}>
					<div className="container mx-auto p-2">
						<Image
							width={1080}
							height={608}
							layout='fill'
							className="rounded-md object-cover 	h-full w-full  "
							placeholder="blur"
							blurDataURL="/blur-placeholder.jpg"
							src={`/placeholder-slider.webp`} />
						<div className="absolute lg:p-10 mx-auto  z-50 w-full h-full grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-white">
							<div className="flex flex-col self-center">
								<h2 className="text-3xl uppercase font-semibold mb-2">Человек Паук: возвращение домой</h2>
								<p className="text-lg">Turn your world upside down</p>
								<a className="bg-red-400 self-start	text-white uppercase py-3 px-6 text-sm mt-4 rounded" href="#">О сериале</a>
							</div>
							<div className="  md:flex-col sm:hidden md:flex  self-center content-center">
								<div className="w-5/12">
								<Image
									width={334}
									height={500}
									layout="responsive"
									className="rounded-md "
									placeholder="blur"
									blurDataURL="/blur-placeholder2.jpg"
										src={`/placeholder-poster.webp`} />
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				
			</Swiper>

	)
}

export default MainSlider