import { flushSync } from 'react-dom';
import React , {useState} from 'react'

export default function Test() {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const handleClick=()=>{
    
     setCounter1(counter=>counter+1)
     setCounter2(counter=>counter+1)
  }


  return (
    <div>
        <button onClick={handleClick}>
             vcounter1 {counter1} counter2 : {counter2}
        </button>
    </div>
  )
}
