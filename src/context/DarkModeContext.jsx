/*  **************************************************************************************
    React에서 Context는 컴포넌트 간에 데이터를 공유하기 위한 메커니즘.
    Context를 사용하면 중첩된 컴포넌트 구조에서 props를 계속해서 전달하지 않고도 
    데이터를 전역적으로 공유할 수 있다.

    Context는 주로 애플리케이션의 테마, 사용자 로그인 상태, 언어 설정 등과 같은 
    전역적인 데이터를 관리하는 데 사용한다. 
    Context를 사용하면 데이터를 제공하는 컴포넌트(Provider)와 
    데이터를 소비하는 컴포넌트(Consumer)를 정의할 수 있다.
*   *************************************************************************************/
import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext(); // Dark Mode 관련 데이터를 제공하는 Context 생성

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false); // Dark Mode 상태값과 상태를 업데이트하는 함수 정의

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode); // Dark Mode 전환 함수 호출

        console.log("darkMode:", darkMode);
    };

    // 로딩시 한번만 읽어온다.
    useEffect(() => {
        const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches); // 로컬 스토리지에 저장된 테마 값이나 시스템 테마 설정을 기반으로 초기 Dark Mode 값 설정
        setDarkMode(isDark); // Dark Mode 상태값 업데이트
        updateDarkMode(isDark); // Dark Mode 업데이트 함수 호출

        console.log("When Program Loading, do run...");
        console.log("isDark:", isDark);
        console.log("localStorage.theme:", localStorage.theme);
    }, []);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider> // DarkModeContext.Provider를 사용하여 Dark Mode 데이터를 제공
    );
}

export const useDarkMode = () => useContext(DarkModeContext); // Dark Mode 데이터를 사용하기 위한 Custom Hook 정의

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark'); // 어두운 테마를 적용하기 위해 'dark' 클래스 추가
        localStorage.theme = 'dark'; // 로컬 스토리지의 테마 값을 'dark'로 설정
    } else {
        document.documentElement.classList.remove('dark'); // 어두운 테마 제거를 위해 'dark' 클래스 제거
        localStorage.theme = 'light'; // 로컬 스토리지의 테마 값을 'light'로 설정
    }
}
