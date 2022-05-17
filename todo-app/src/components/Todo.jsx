import React,{useState} from 'react'
import styles from "./todo.modules.css"
import Todoitem from "./todoitem"


const Todo = ()=> {
    const [todos,setTodos] = useState([])
    const [value,setValue] = useState('abcd')
    const onDelete = (id)=>{
        let newtodo = todos.filter((todo)=>todo.id !==id)
        setTodos(newtodo)
    }
    
  return (
    <div> <h1>Todo</h1> 
        <input value={value} onChange={(e)=>setValue(e.target.value)} />
        <button onClick=
        {()=>{setTodos([
                ...todos,
                {id:Date.now(),value:value,isCompleted:false},
            ]);
            setValue('');
             }}>Add</button>

        <div className={styles.todoList}>
        {todos.map((todo)=>(
             <Todoitem key={todo.id} todo={todo} onDelete={onDelete} />
             
        ))}
        </div>
        
    </div>
  )
}

export default Todo