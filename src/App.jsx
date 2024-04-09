import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Canvas from './components/Canvas'
import Node from './components/Node'

function App() {
  const TOTAL_NUM_PLAYERS = 8;
  const nodeObjs = [];

  for(let i = 1; i < TOTAL_NUM_PLAYERS*2; i++) {
    nodeObjs.push({
      num: i,
      playerName: `Position ${i}`,
      score: '0'
    })
  }

  console.log(nodeObjs)
  
  return (
    <>
      <Canvas/>
      {nodeObjs.map((node) => {
        return (<Node num={node.num}/>)
      })}
    </>
  )
}

export default App
