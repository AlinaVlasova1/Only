import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from "./components/MainPage/MainPage";

const App: React.FC = () => {
    return <MainPage></MainPage>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);