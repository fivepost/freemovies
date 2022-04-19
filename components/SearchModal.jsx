import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import SearchCard from './SearchCard';


const SearchModal = ({ showModal, setShowModal }) => {

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
					className="fixed flex items-center justify-center top-0 left-0 bg-black/80 dark:bg-black/50 w-full h-full z-[111] backdrop-blur-sm"
					variants={overlay}
					animate="visible"
					initial="hidden"
					exit="hidden"
				>
					<div className="container   h-full p-2" onClick={(e) => e.stopPropagation()} >
						<input autoFocus={true} placeholder="Type some movie..." type="text" className="mt-10 mb-3 sticky top-8 z-40 	  w-full border border-slate-300 focus:border-slate-400  p-2 sm:p-3 rounded-md bg-transparent text-white"  />
						<div className="overflow-y-scroll no-scrollbar pt-4 h-full">
						<div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
							<SearchCard />
						</div>
						</div>
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

export default SearchModal