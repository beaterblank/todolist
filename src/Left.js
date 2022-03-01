import React from "react";
export default function Left({todos,text}){
    const left = todos.map(todo =>{return (todo.complete)?1:0}).reduce((a,b) => a+b ,0);
    return(
        <p>{left} {text}</p>
    )
}