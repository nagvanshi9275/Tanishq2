import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Main1 from "./Main1"

//import 'bootstrap/dist/css/bootstrap.min.css';

import Main2 from "./Main2"

import 'bootstrap/dist/css/bootstrap.min.css';

import Main3 from "./Main3";

import GroupExample from "./GroupExample";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Main3/>

     <GroupExample/>


 
    </>
  )
}

export default App
