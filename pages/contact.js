import Head from 'next/head'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from "../components/Header";
import { motion } from 'framer-motion'
import Link from 'next/link';
import emailjs from 'emailjs-com'


export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('adamke_contact', 'contact_form', e.target, 'user_7moDwUlcYDRp8dkut2iTr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

  return (
    <motion.div exit={{ x: "100%", opacity: .5 }} initial={{ x: "100%", opacity: .5 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .4 }}>
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
                <Col lg={1}></Col>
                <Col lg={8}>
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="user_name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" name="user_email" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" name="subject" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" />
                        </Form.Group>
                        <div className="text-center">
                        <button type="submit" value="Send" className="btn btn-primary btn-lg m-3">Send</button>
                        <button type="reset" className="btn btn-secondary btn-lg m-3">Reset</button>
                        </div>
                    </Form>
                </Col>
                <Col lg={2}></Col>
            </Row>
        </Container>
      </main>
      <Footer></Footer>
    </motion.div>
  )
}