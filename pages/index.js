import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import Header from "../components/Header";
import Image from 'next/image'


export default function Home() {

  function getCurrentYear() {
    return new Date().getFullYear()
}

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="images/doge.png" />
      </Head>
      <Header></Header>
      <main>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src="/images/up-arrow.png" width={125} className="py-5 d-none d-lg-block" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <img src="/images/left-arrow.png" className="img-fluid d-none d-lg-block" />
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
            <img src="/images/right-arrow.png" className="img-fluid d-none d-lg-block" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src="/images/down-arrow.png" width={125} className="py-5 d-none d-lg-block" />
          </Col>
        </Row>
      </Container>

      </main>

      <footer className="bg-dark text-white py-3">
        <p className="text-center mb-0">©<a className="text-white text-decoration-none" href="https://github.com/kadams34">Kevin Adams</a>&nbsp;|&nbsp;{getCurrentYear()}</p>
      </footer>
    </div>
  )
}
