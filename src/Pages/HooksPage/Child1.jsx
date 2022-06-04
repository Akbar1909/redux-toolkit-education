import React,{useEffect} from 'react'

export default function Child1({name,onUpdateName}) {

    // useEffect(() => {
    //     console.log("child 1 render")
    // });

  return (
    <div>Child1 {name}
    
    <button onClick={onUpdateName}>Update Name</button>

    </div>
  )
}
