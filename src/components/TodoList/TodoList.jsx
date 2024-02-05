import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    // 로컬스토리지에서 todos data를 읽어온다.
    // 콜백 함수를 사용해서 기존에 todos data가 있으면 콜백 내의 함수를 실행하지 않는다.
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

    /* Callback함수 위와 같은 내용이라는 것을 보여주기 위해서 풀어서 코딩해 봄.
    const [todos, setTodos] = useState(function () {
        return readTodosFromLocalStorage();
    });
    */

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

    // todos가 변경될 때 로컬스토리지에 저장
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // todos에서 prop filter 값만 필터링해서 filteredTodos 변수에 저장한다.
    const filteredTodos = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            {/* 할 일 목록을 표시하기 위하여 ul태그를 사용함. */}
            <ul className={styles.list}>
                {
                    // filteredTodos 값을 rendering한다.
                    filteredTodos.map(item => (
                        <Todo
                            key={item.id}
                            todo={item}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))
                }
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

// 로컬스토리지에서 값을 읽어와서 json 데이터를 parsing 하여 리턴함.
function readTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    console.log('todos from Local Storage:', todos);
    return todos ? JSON.parse(todos) : [];
}
