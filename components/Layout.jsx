import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head';
import { useRouter } from "next/router"


const Layout = ({ children, title, description, ogImage }) => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="author" content="fivepost" />
				<meta property="og:title" content={title || 'NEXT APP TITLE'} />
				<meta property="og:description" content={description || 'NEXT APP DESCRIPTION'} />
				<meta property="og:image" content={`https://image.tmdb.org/t/p/w500${ogImage}`} />
			</Head>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}

Layout.defaultProps = {
	title: 'NEXT APP TITLE',
	description: 'NEXT APP DESCRIPTION',
	ogImage: '/blur-placeholder.jpg'
}

export default Layout