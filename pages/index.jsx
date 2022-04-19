import axios from "axios";
import Hero from "../components/Hero";
import Layout from './../components/Layout';
import MovieList from './../components/MovieList';
import useTranslation from "next-translate/useTranslation"
import Link from 'next/link'



export default function Home({ movies }) {
  const { t } = useTranslation()

  return (
    <Layout title={ t('common:home_page') }>
      <Hero />
      <MovieList movies={movies.results} />
      <div className="text-center">
        <Link href="/movies">
          <a className="btn btn-primary mb-4 text-white inline-block">{t('common:more_movies')}</a>
        </Link>
      </div>
    </Layout>
  )
}
function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}
export async function getServerSideProps(ctx) {
  const lang = ctx.locale == 'en' ? 'en-US' : "ru-RU"
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=${lang}S&page=${randomNumber(1,11)}`)
  const movies = res.data
  return {
    props: { movies }
  }
}