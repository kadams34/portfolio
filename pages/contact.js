import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';


export default function Contact() {

  return (
    <motion.div exit={{ x: "100%", opacity: .3 }} initial={{ x: "100%", opacity: .3 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .4 }}>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <main>
      <Container>
            <Row>
                <Col className="text-center mb-5">
                    <h1 className="display-1">Contact</h1>
                    <p>Smol extremely cuuuuuute heckin good boys heckin big ol pupper extremely cuuuuuute, corgo long woofer long bois blop.<br />Wrinkler heck noodle horse porgo ruff snoot yapper, shibe long water shoob fat boi aqua doggo.</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">
                    <Link href="/" passHref><a><img src="/images/left-arrow.png" className="img-fluid d-none d-lg-block" /></a></Link>
                </Col>
                <Col lg={10}>

                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
  )
}