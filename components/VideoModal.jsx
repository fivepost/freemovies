import { motion, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player'
import { IoMdClose } from "react-icons/io";
import { useEffect } from 'react';



const VideoModal = ({ showModal, setShowModal, videoPath }) => {

	useEffect(() => {
		let body = document.body
		if (showModal) {
			body.classList.add('lock')
		}
		return () => body.classList.remove('lock')
	}, [showModal])

	const overlay = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	}

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<AnimatePresence exitBeforeEnter>
			{showModal &&
				<motion.div
					className="fixed flex items-center justify-center top-0 left-0 bg-black/50 w-full h-full z-[111] backdrop-blur-sm"
					variants={overlay}
					animate="visible"
					initial="hidden"
					exit="hidden"
					onClick={closeModal}
				>

					<div className=" aspect-video relative w-full scale-[0.95] lg:scale-[0.65]  " onClick={(e) => e.stopPropagation()} >
						<ReactPlayer width="100%" height="100%" controls url={`https://www.youtube.com/watch?v=${videoPath}`} />
					</div>
					<button
						onClick={closeModal}
						className="fixed top-0 right-0 text-white/60 p-3 bg-black/40"
					> <IoMdClose size={16} /></button>
				</motion.div>

			}
		</AnimatePresence>
	)
}

export default VideoModal