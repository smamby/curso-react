import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: -20, y: -20 })


  useEffect(() => {
    console.log('effect', {enabled})
    const handleMove = (event) => {
      const { clientX, clientY } = event
      //console.log('move', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])


  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])


  useEffect(() => {
    const ball = document.querySelector('.ball')
    const handleMouseDown =() => {
      ball.classList.add('click-cursor')
      console.log('push click')
    }
    const handleMouseUp =() => {
      ball.classList.remove('click-cursor')
      console.log('release click')
    }
    if (enabled && ball) {
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      if (ball) {
        window.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [enabled])

  return (
    <>
      <div className="ball"
        style={{ left: position.x -20,
                 top: position.y + 30,
                 display: enabled ? 'block' : 'none' }}>
      </div>
      <h3>Mouse follower</h3>
      <button className="button-enabler"
        onClick={() => setEnabled(enabled => !enabled)}>
        { enabled ? 'Disable' : 'Enable' } cursor follower
      </button>
    </>
  )
}

export default App
