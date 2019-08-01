import {useEffect} from 'react';

export const useBeforeLeave = (onBeforeLeave) => {
    useEffect(() => {
        if(typeof onBeforeLeave === 'function'){
            const handle = (event) =>{
                const {clientY} = event;
                if(clientY <= 0){

                }
                onBeforeLeave();
            };
            document.addEventListener('mouseleave', handle);
            return () => {
                document.removeEventListener('mouseleave', handle);
            };
        }
    }, []);
}