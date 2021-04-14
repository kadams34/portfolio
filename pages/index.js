import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function Home() {

  return (
    <>
      <Head>
        <title>Kevin Adams</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
    <motion.div exit={{ scale: 0, opacity: 0 }} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1  }} transition={{ duration: .4 }}>
      <Header></Header>
      <main>
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link href="/resume" passHref><a><img src="/images/up-arrow.png" width={75} className="py-5 d-none d-lg-block" /></a></Link>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Link href="/about" passHref><a><img src="/images/left-arrow.png" width={37} className="img-fluid d-none d-lg-block" /></a></Link>
            </Col>
            <Col lg={6} className="pt-5">
              <h1 className="display-1">Kevin Adams</h1>
              <h1 className="display-4">Full Stack web developer</h1>
              <p className="display-5">Albuquerque, NM</p>
            </Col>
            <Col lg={4}>
              <img src="/images/profile.jpeg" className="img-fluid rounded-circle" />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Link href="/contact" passHref><a><img src="/images/right-arrow.png" width={37} className="img-fluid d-none d-lg-block" /></a></Link>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link href="/portfolio" passHref><a><img src="/images/down-arrow.png" width={75} className="py-5 d-none d-lg-block" /></a></Link>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
    </>
  )
}
