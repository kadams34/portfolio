import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'


export default function Portfolio() {

  return (
    <motion.div exit={{ y: "100%" }} initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: .4 }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <Container>
        <Row>
            <Col className="d-flex justify-content-center">
                <img src="/images/up-arrow.png" width={125} className="py-5 d-none d-lg-block" />
            </Col>
        </Row>
      </Container>
      <main className="main-subpage">
        <Container>
            <Row>
                <Col className="text-center"><h1 className="display-1">PORTFOLIO</h1></Col>
            </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
  )
}