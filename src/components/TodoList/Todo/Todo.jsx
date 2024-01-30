import React from 'react';

// FaTrashAlt 아이콘을 가져온다.
// 컴포넌트 추가 : yarn add react-icons;
// 'https://react-icons.github.io/react-icons/'에서 원하는 아이콘을 클릭
import { FaTrashAlt } from 'react-icons/fa';

/* 
Todo라는 이름의 React 컴포넌트를 정의.
props로 todo, onUpdate, onDelete를 전달받는다.
*/
export default function Todo({ todo, onUpdate, onDelete }) {
    // todo 객체에서 text와 status 속성을 추출한다.
    const { text, status } = todo;

    // 체크박스의 상태가 변경될 때 호출되는 함수
    const handleChange = e => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status });
    };

    // 제 버튼이 클릭될 때 호출되는 함수
    const handleDelete = () => {
        onDelete(todo);
    };

    return (
        /*  체크박스, 할 일 내용, 삭제 버튼을 포함하는 li 태그를 반환
            - 체크박스: 할 일의 완료 여부를 나타내며 체크박스의 상태가 변경되면 handleChange 함수가 호출되어 할 일의 상태를 업데이트
            - 삭제 버튼: 삭제 버튼을 클릭하면 handleDelete 함수가 호출되어 할 일을 삭제
        */
        <li>
            <input
                type="checkbox"
                id="checkbox"
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor="checkbox">{text}</label>
            <button onClick={handleDelete}>
                { /* react-icons */ }
                <FaTrashAlt />
            </button>
        </li>
    );
}
