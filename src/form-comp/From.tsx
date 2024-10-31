import {useState,useRef} from 'react'
import {Mission} from '../Types/Mission'

const From = (props) => {
    const name = useRef<string>(null)
    const status = useRef<string>(null)
    const priority = useRef<string>(null)
    const description = useRef<string>(null)
    
  return (
    <div>
      <form>
        <input ref={name}/>
        <select ref={status}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <select ref={priority} >
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <input ref={description}/>
        <button
        onClick={(e)=> {
            const mission:Mission ={
                name :name.current as string,
                status : status.current as string,
                priority : priority.current as string,
                description : description.current as string
            }
            props.setMission(mission)
            
        }
        }
        >submit</button>
      </form>
      
    </div>
  )
}

export default From
