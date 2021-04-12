import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';


export default function Resume() {

  return (
    <motion.div exit={{ y: "-100%" }} initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ duration: .4 }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <main className="main-subpage">
        <Container>
            <Row>
                <Col className="text-center"><h1 className="display-1">RESUME</h1></Col>
            </Row>
        </Container>
      </main>
      <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Link href="/" passHref><a><img src="/images/down-arrow.png" width={125} className="py-5 d-none d-lg-block" /></a></Link>
                </Col>
          </Row>
        </Container>
      <Footer></Footer>
    </motion.div>
  )
}