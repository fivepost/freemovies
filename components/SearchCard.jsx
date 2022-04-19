import Image from 'next/image'
import { BsPlayCircle } from "react-icons/bs";
import TextTruncate from 'react-text-truncate'

const SearchCard = () => {
	return (
		<div className="bg-white rounded-md grid grid-cols-6 overflow-hidden dark:bg-zinc-800 dark:text-white text-gray-600 dark:text-white">
			<div className="col-span-2 relative">
				<Image 
					src='/mockposter.webp'
					alt="River"
					width="350"
					height="525"
					layout="fill"
					objectFit="cover"
					placeholder="blur"
					blurDataURL="/blur-placeholder2.jpg" />
			</div>
			<div className="p-4 col-span-4 h-full  justify-center flex flex-col">
				<h2 className="text-xl font-semibold mb-2">Some movie ejji</h2>
				<TextTruncate
					className="text-sm"
						line={4}
						element="p"
						truncateText="…"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque repudiandae repellendus voluptatum vel minus ad perferendis deleniti et laboriosam."
					/>
				<p className="text-sm mt-1">Год: <span className="font-bold">2022</span> </p>
				<button className="inline-flex ml-auto bg-red-400 hover:bg-red-500 items-center text-white uppercase py-3 px-6 text-sm mt-4 rounded  visited:text-white transition-colors"
				><BsPlayCircle
						className="mr-2"
						size={20} /> подробнее
				</button>
			</div>
		</div>
	)
}

export default SearchCard