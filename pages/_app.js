import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
