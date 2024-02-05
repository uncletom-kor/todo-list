import { useState } from 'react';
import './App.css';
import Header from './components/TodoList/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

// 필터 아이템을 가져오는 함수 호출
const filters = getFiltersItem();

export default function App() {
    // filter 상태와 해당 상태를 업데이트하는 setFilter 함수 선언
    const [filter, setFilter] = useState(filters[0]);

    return (
        <DarkModeProvider>
            {/* Header 컴포넌트에 필요한 props 전달 */}
            <Header
                filters={filters} // 필터 아이템 배열 전달
                filter={filter} // 현재 선택된 필터 전달
                onFilterChange={filter => setFilter(filter)} // 필터 변경 시 호출될 콜백 함수 전달
            />
            {/* TodoList 컴포넌트에 필요한 prop 전달 */}
            <TodoList filter={filter} /> 
        </DarkModeProvider>
    );
}

// 필터 아이템을 생성하고 반환하는 함수
function getFiltersItem() {
    let filterValues = ['all', 'active', 'completed'];
    return filterValues;
}
