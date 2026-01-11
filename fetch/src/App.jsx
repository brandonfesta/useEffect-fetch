import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchPosts(){
      setLoading(true)
      setError(false)
      try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        setPosts(data)
      } catch{
        setError(true)
      } finally{
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])
  return (
    <div>
      <h1>Post:</h1>
      {loading && <p>loading...</p>}
      {error && <p>Errore!</p>}
      {posts.length > 0 ?(
        <ul>
          {posts.map((post) => (<li>{post.title}</li>))}
        </ul>) : (
          <p>Non ci sono post per questo utente</p>
        )}
    </div>
  )
}

export default App
