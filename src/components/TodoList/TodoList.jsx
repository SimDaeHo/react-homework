import React from 'react';
import Todo from '../Todo/Todo';

export default function TodoList({name, todos, setTodos}) {
    const isActiveList = name === 'working' ? true : false;

    return (
        <div>
            
          
            
           {todos.filter((t) => isActiveList === !t.isDone)
           .map((t) => (
                <Todo
                todo={t.todo}
                isDone={t.isDone}
                setTodos={setTodos}
                key={t.id}
                id={t.id}
            />
           ))
           }
        </div>
    );
}

