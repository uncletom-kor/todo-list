import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../../context/DarkModeContext';
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
            <ul className={styles.filters}>
                {filters.map((val, id) => (
                    <li key={id}>
                        {
                            // 버튼을 클릭하면 onFilterChange 함수가 호출되고,
                            // onFilterChange 함수에서 setFilter 함수를 호출하여 filter 상태 변수의 값을 업데이트
                        }
                        <button
                            className={`${styles.filter} ${filter === val && styles.selected}`}
                            onClick={() => onFilterChange(val)}>
                            {val}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
