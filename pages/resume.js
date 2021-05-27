import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion'


export default function Resume() {

  return (
    <motion.div>
      <Head>
        <title>Resume</title>
      </Head>
      <main className="main-subpage">
        <Container>
            <Row>
                <Col className="text-center"><h1 className="display-1">RESUME</h1></Col>
            </Row>
        </Container>
      </main>
    </motion.div>
  )
}