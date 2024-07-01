import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'
import { TwitterFollow } from './TwitterFollow'



function App() {
  const formatUsername = (username) => `@${username}`

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title />
      <div className="card">
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Editar <code>src/App.jsx</code> y guardar cambios para ver.
        </p>
      </div>
      <p className="read-the-docs">
        Los logos no redireccionan a las paginas. Sepanlon.
      </p>
    <section className="twitter-widget">
    <TwitterFollow isFollowing formatUsername={formatUsername} userName={'PersNoDiestra'} name={'Personas No Diestras'} />
    <TwitterFollow isFollowing formatUsername={formatUsername} userName={'midudev'} name={'Miguel Angel Duran'} />
    </section>
    </>
  )
}

export default App
