import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence>
        <Head>
          <link rel="icon" href="images/doge.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <motion.div key={router.route} exit={{ backgroundColor: 'white', filter: `invert()`, opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1  }} transition={{ duration: .4 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
