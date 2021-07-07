import {useEffect} from 'react';
import {useLocalStorage } from './useLocalStorage';

export const useDarkMode2 = () => {
    const [darkMode2, setDarkMode2] = useLocalStorage('mode');
    useEffect(() => {
const page = window.document.body

//string 'dark-mode' needs to correlate with css

if ( darkMode2 === true){
    page.classList.add('dark-mode2')
    
}else{
    page.classList.remove('dark-mode2')
   
}


},[darkMode2]);

return[darkMode2, setDarkMode2];

};


