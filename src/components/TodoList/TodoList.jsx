import React, { useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo/Todo';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        { id: '123', text: '장보기', status: 'active' },
        { id: '124', text: '공부하기', status: 'active' },
        { id: '125', text: '오후에 낮잠자기', status: 'completed' },
    ]);

    // 할 일을 추가하는 함수
    const handleAdd = todo => {
        setTodos([...todos, todo]);
        console.log('todo ', todo);
    };

    // 할 일을 업데이트하는 함수
    const handleUpdate = updatedItem => {
        console.log(updatedItem);
        setTodos(todos.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    };

    // 할 일을 삭제하는 함수
    const handleDelete = deletedItem => {
        setTodos(todos.filter(item => item.id !== deletedItem.id));
    };

    // todos에서 prop filter 값만 필터링해서 filteredTodos 변수에 저장한다.
    const filteredTodos = getFilteredItems(todos, filter);

    return (
        <section>
            {/* 할 일 목록을 표시하기 위하여 ul태그를 사용함. */}
            <ul>
                { // filteredTodos 값을 rendering한다.
                filteredTodos.map(item => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}

// filter값을 기준으로 필터링하는 함수
function getFilteredItems(todos, filter) {
    if (filter === 'all') {
        return todos;
    }

    return todos.filter(todo => todo.status === filter);
}