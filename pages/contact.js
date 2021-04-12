import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';


export default function Contact() {

  return (
    <motion.div exit={{ x: "100%" }} initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: .4 }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <main>
      <Container>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">
                    <Link href="/" passHref><a><img src="/images/left-arrow.png" className="img-fluid d-none d-lg-block" /></a></Link>
                </Col>
                <Col lg={11} className="text-center"><h1 className="display-1">CONTACT</h1></Col>
            </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
  )
}