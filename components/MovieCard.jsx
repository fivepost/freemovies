
import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router"

import { AiTwotoneStar } from "react-icons/ai";

import 'moment/locale/ru';

const MovieCard = ({ movie }) => {

	const router = useRouter();
	const [dateLocale, setDateLocale] = useState('router.locale')
	useEffect(() => {
		setDateLocale(router.locale)
	},
		[router.locale])
	return (
		<Link href={{
			pathname: '/movies/[id]',
			query: { id: movie.id },
		}}>
			<a>
				<div className="relative rounded group overflow-hidden shadow-lg bg-white text-black">
					<Image className="w-full group-hover:scale-110 duration-500	ease-out transition-all"
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="River"
						width="700"
						height="1050"
						layout='responsive'
						placeholder="blur"
						blurDataURL="/blur-placeholder2.jpg"/>
					<div className="px-4 py-4 absolute right-0 bottom-0 backdrop-blur-md bg-black/25 w-full duration-400 ease-out  bg-opacity-50 transition-all translate-y-full group-hover:translate-y-0">
						<h1 className="font-bold text-sm md:text-xl mb-2 text-white">{movie.title}</h1>
						<p className="text-white text-xs   md:text-sm">
							<Moment locale={dateLocale} format='LL'>{movie.release_date}</Moment>
						</p>
					</div>
					<span className="flex rounded-l-sm font-semibold items-center text-center transition-all opacity-0 translate-x-full group-hover:translate-x-0 ease-out group-hover:opacity-100 duration-500 bg-yellow-300 px-5 py-2 text-sm absolute right-0 top-5">
						<AiTwotoneStar className="mr-1" size="16" />
						{+movie.vote_average.toFixed(1)}</span>
				</div>
			</a>
		</Link>
	)
}

export default MovieCard