import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

const useTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark':'light';
        setTheme(newTheme)
    }
    console.log(theme)
  return [theme, toggleTheme];
}

export default useTheme