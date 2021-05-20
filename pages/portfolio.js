import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';


export default function Portfolio() {

  return (
    <motion.div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <Container>
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