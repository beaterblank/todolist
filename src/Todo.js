export default function Todo({ todo,toggle }){
    function handleToggle(){
        toggle(todo.id)
    }
    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleToggle}/>
                {todo.name}
            </label>
        </div>
    )
}