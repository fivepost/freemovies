import Image from 'next/image'
import { BsPlayCircle } from "react-icons/bs";

const SearchCard = () => {
	return (
		<div className="bg-white rounded-md grid grid-cols-6 overflow-hidden dark:bg-zinc-800 dark:text-white text-white">
			<div className="col-span-2">
				<Image className="w-full group-hover:scale-110 duration-500	ease-out transition-all"
					src='/mockposter.webp'
					alt="River"
					width="350"
					height="525"
					layout='responsive'
					placeholder="blur"
					blurDataURL="/blur-placeholder2.jpg" />
			</div>
			<div className="p-4 col-span-4">
				<h2 className="text-xl mb-2">Some movie ejji</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque repudiandae repellendus voluptatum vel minus ad perferendis deleniti et laboriosam.
				</p>
				<button className="inline-flex bg-red-400 hover:bg-red-500 items-center text-white uppercase py-3 px-6 text-sm mt-4 rounded  visited:text-white transition-colors"
				><BsPlayCircle
						className="mr-2"
						size={20} /> подробнее
				</button>
			</div>
		</div>
	)
}

export default SearchCard