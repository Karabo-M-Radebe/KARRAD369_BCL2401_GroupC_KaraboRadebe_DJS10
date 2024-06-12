import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => {setError(error)})
    
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
