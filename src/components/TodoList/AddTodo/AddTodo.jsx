import React, { useState } from 'react';

// Terminal에서 'yarn add uuid'를 통해 uuid 컴포넌트를 설치후 import한다.
// 자세한 내용은 uuid 사이트를 참조
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        let newTodo = text.trim();

        if (newTodo.length === 0) {
            alert('할일을 입력하세요');
            return;
        }

        onAdd({ id: uuidv4(), text: newTodo, status: 'active' });
        setText('');
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="할일을 입력하세요."
                className={styles.input}
                value={text}
                onChange={handleChange}
            />
            <button className={styles.button}>추가</button>
        </form>
    );
}
