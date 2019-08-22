import { useState, useEffect } from 'react';
export const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    })

    const changeScroll = () => {
        setState({x: window.scrollX, y: window.scrollY});
        console.log('x: ', window.scrollX, ', y:', window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScroll);
        return () => {
            window.removeEventListener('scroll', changeScroll);
        }
    }, [])

    return state;
}