import Image from 'next/image'
const ActorCard = ({ actor }) => {


	return (
		<div className="text-center" >
			<Image className="object-cover rounded-md border border-slate-500"
				src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : '/no_photo.jpg'}
				alt="River"
				width="300"
				height="300"
				placeholder="blur"
				layout="responsive"
				blurDataURL="/blur-placeholder2.jpg"

			/>
			<h5 className="text-sm mt-2">{actor.name}</h5>
			<p className="text-xs  dark:text-white/75 italic text-black/75">{actor.character}</p>
		</div>
	)
}

export default ActorCard