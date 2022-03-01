import React,{useState,useRef,useEffect} from 'react';
import './index.css';
import TodoList from './TodoList';
var id = 0;
const key = 'todoapp.json'
export default function App(){
    const [todos,setTodos] = useState([])
    const inputRef = useRef();
    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem(key))
        if(stored){ 
            setTodos(stored)
            id = stored[stored.length-1].id
        }
    },[])
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(todos))
    },[todos])
    function addTodo(){
        id = id+1;
        var typed = inputRef.current.value;
        setTodos(prev =>{
            return [...prev, {id:id,name:typed,complete:false}]
        })
        inputRef.current.value = null;
    }

    function toggle(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id==id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }    
    function Left(){
        return todos.map(todo =>{return (todo.complete)?1:0}).reduce((a,b) => a+b ,0);
    }
    return(
        <>
            <TodoList todos={todos} toggle={toggle}/>
            <input ref={inputRef} type="text" />
            <button onClick={addTodo}>Add todo</button>
            <button>clear completed</button>
            <p>{Left()} left</p>
        </>
    )
}