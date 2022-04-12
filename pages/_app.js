import Router from 'next/router';
import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import NProgress from 'nprogress'; //nprogress module
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </Hydrate>
  </QueryClientProvider>
    ;
}

export default MyApp
