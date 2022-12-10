import React from 'react';
import Button from '../Button/Button';

export default function Todo({todo, isDone, id, setTodos}) {

    const deleteTodo = () => {
        // 해당 todo를 제외한 todos 배열을 업데이트
        setTodos((prev) => prev.filter((t) => t.id !== id));
      };
    
    
      // todo를 완료하는 함수
      const doneTodo = () => {
        setTodos((prev) =>
          prev.map((t) => {
            // 해당 todo의 isDone을 true로 변경
            if (t.id === id) {
              return { ...t, isDone: true };
            }
            // 다른 todo는 그대로 반환
            return t;
          }),
        );
      };
    return (
        <div>
            <h2 className="simWork">Working.. &#128151;</h2>
      <div className="simTodo-1">
        <h2>{todo}</h2>
        <p>리액트 기초부터 숙련까지.</p>
        <div className="simBtn-2">
        <Button handleClick={deleteTodo} value='삭제' />
        <Button handleClick={doneTodo} value='완료' />
        </div>
      </div>
      <h2 className="simDone">Done..! &#128153;</h2>
      <div className="simTodo-2">
        <h2>{todo}</h2>
        <p>드림코딩 8챕터 보기.</p>
        <div className="simBtn-3">
        <Button handleClick={deleteTodo} value='삭제' />
        <Button handleClick={doneTodo} value='완료' />
        </div>
      </div>
        </div>
    );
}

