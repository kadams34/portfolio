import Link from 'next/link'
import { Col, Card } from 'react-bootstrap'

export default function Project({ project }) {
  return (
    <div>
        <Col xs={6}>
            <Card className="border-0">
                <Link href="/portfolio/[id]" as={`/portfolio/${project.id}`}>
                    <a><Card.Img variant="top" src={project.image} alt={project.name} height={200} width={200} /></a>
                </Link>
                <Card.Body>
                    <Card.Title><p>{project.name}</p></Card.Title>
                </Card.Body>
            </Card>
        </Col>
        
    </div>
  )
}