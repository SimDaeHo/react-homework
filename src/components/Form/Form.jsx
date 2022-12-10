import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

export default function Form({setTodos}) {
    const [todoValue, setTodoValue] = useState('');

    const handleChange = (e) => {
        setTodoValue(e.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        const todo = todoValue.trim();
        if(!todo) {
            setTodoValue('');
            return;
        }

        setTodos((prev) => [...prev, {todo, isDone: false, id: uuid()}])
        setTodoValue('');
    }

    return (
        <div>
            <form className="simForm" onSubmit={addTodo}>
        <label className="simTitle">제목</label>
        <input type="text" className="simText" onChange={handleChange}
        autoFocus = {true} value={todoValue}
        >
        </input>
        <label className="simContent">내용</label>
        <input type="text" className="simText1"></input>
        <button className="simBtn">추가하기</button>
      </form>
        </div>
    );
}

