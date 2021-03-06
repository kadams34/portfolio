import { projects } from '../../../data'

export default function projectHandler({ query: { id } }, res) {
    const filtered = projects.filter((project) => project.id === id)
  
    // User with id exists
    if (filtered.length > 0) {
      res.status(200).json(filtered[0])
    } else {
      res.status(404).json({ message: `Project with id: ${id} not found.` })
    }
  }