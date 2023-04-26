// import { useState } from 'react'


import './App.css'
import Profile from './components/Profile.tsx'
import jsonData from "./JsonData.ts";
import Cards from "./components/Cards.tsx";

function App() {
  // const [count, setCount] = useState(0)


  return (
    <main>
      <Profile />
      <div className="cards">
        {jsonData.map((data, index) => {
          return <Cards key={index} json={data} />
        })}
      </div>
      {/* <Cards json={jsonData} /> */}
    </main>
  )
}

export default App
