// 필요한 모듈과 구성 요소를 가져온다.
import './App.css'; // App.css 파일에서 스타일을 가져온다.
import Button1 from './components/Button1'; // Button1 컴포넌트를 가져온다.
import Button2 from './components/Button2'; // Button2 컴포넌트를 가져온다.
import StyleComponents from './components/Style-component';
import TailwindComponent from './components/Tailwind-component';

export default function App() {
    return (
        <>
            <Button1 />
            <Button2 />
            <StyleComponents />
            <TailwindComponent />
        </>
    );
}
