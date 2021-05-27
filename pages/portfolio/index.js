import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion'
import Project from '../../components/Project';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Portfolio() {
  const { data, error } = useSWR('/api/projects', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <motion.div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Container>
      </Container>
      <main className="main-subpage">
        <Container>
            <Row>
                <Col className="text-center"><h1 className="display-1">PORTFOLIO</h1></Col>
            </Row>
        </Container>
        <Container>
            <Row>
              {data.map((p, i) => (
                <Project key={i} project={p} />
              ))}
            </Row>
        </Container>
      </main>
    </motion.div>
  )
}