import { useState } from "react";

const useTheme = () => {
    const [mode, setMode] = useState('light');
    const changeTheme = () => {
        const html = document.documentElement;
        if (mode === 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            setMode('dark');

        }
        else {
            html.classList.remove('dark');
            html.classList.add('light');
            setMode('light');
        }
    }
    return { changeTheme, mode };
};


export default useTheme;