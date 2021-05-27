import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}


export default function Projects () {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.id && `/api/projects/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.url}</h1>
            <h1>{data.image}</h1>
            <h1>{data.description}</h1>
        </div>
    )
}