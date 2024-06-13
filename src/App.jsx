import { useState, useEffect } from 'react'

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts= async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`Data fetching failed`)
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message)}
    };
    fetchPosts();
  }, [])

  return (
    <>
      <div className='posts'>
        
        {error ? (<div className='error-message'>Data fetching failed...</div>) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <h1>Posts</h1>
            {posts.map((post, index) => (
              <li key={post.id}>
                <h2>{index + 1}. {post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

