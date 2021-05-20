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
    <motion.div>
      <Header></Header>
      <main>
        <Container>
          <Row>
            <Col lg={8} className="pt-5 px-5">
              <h1 className="display-1">Kevin Adams</h1>
              <h1 className="display-4">Full Stack web developer</h1>
              <p className="display-5">Albuquerque, NM</p>
            </Col>
            <Col lg={4}>
              <img src="/images/profile.jpeg" className="img-fluid rounded-circle" />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
    </>
  )
}
