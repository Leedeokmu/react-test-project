import { useRef } from 'react';

export const useFullscreen = () => {
    const element = useRef();
    const triggerFullscreen = () => {
        if(element.current){
            element.current.requestFullscreen();
        }
    }
    const exitFullscreen = () => {
        document.exitFullscreen();
    }

    return {element, triggerFullscreen, exitFullscreen};
}