import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';
import ContactForm from '../components/ContactForm';


export default function Contact() {

  return (
    <motion.div>
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
                <Col lg={2}></Col>
                <Col lg={8}>
                    <ContactForm />
                </Col>
                <Col lg={2}></Col>
            </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
  )
}