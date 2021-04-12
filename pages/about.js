import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';


export default function About() {

  return (
    <motion.div exit={{ x: "-100%" }} initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: .4 }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <main>
        <Container>
            <Row>
                <Col className="text-center mb-5"><h1 className="display-1">ABOUT</h1></Col>
            </Row>
            <Row>
                <Col lg={4}><img src="/images/doge.png" className="img-fluid rounded-circle" /></Col>
                <Col lg={7} className="text-end px-5 mt-5"><p>Doggo ipsum waggy wags you are doin me a concern very good spot, lotsa pats. Wrinkler heck noodle horse porgo ruff snoot yapper, shibe long water shoob fat boi aqua doggo. Such treat extremely cuuuuuute ur givin me a spook he made many woofs aqua doggo yapper, fluffer you are doin me a concern such treat aqua doggo, shibe stop it fren long water shoob very jealous pupper. Fat boi heckin dat tungg tho mlem dat tungg tho, wow such tempt dat tungg tho. long bois. wow such tempt puggorino he made many woofs. Stop it fren aqua doggo most angery pupper I have ever seen borkf ruff he made many woofs bork, shooberino borking doggo vvv boofers doing me a frighten. Sub woofer floofs pupperino clouds length boy, shooberino puggo big ol pupper. Smol extremely cuuuuuute heckin good boys heckin big ol pupper extremely cuuuuuute, corgo long woofer long bois blop. Such treat doggorino doing me a frighten borkdrive, waggy wags woofer.</p></Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Link href="/" passHref><a><img src="/images/right-arrow.png" className="img-fluid d-none d-lg-block" /></a></Link>
                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
  )
}