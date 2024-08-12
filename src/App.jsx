import { useEffect } from "react"

function App() {

  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(data => console.log(data))
  },[])

  return (
    <>
    </>
  )
}

export default App
