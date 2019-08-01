
export const useConfirm = (message, onConfirm, onReject) => {
    if(onConfirm && typeof onConfirm !== 'function'){
        return;
    }
    if(onReject  && typeof onReject !== 'function'){
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        }else{
            onReject();
        }
    };
    return confirmAction;
}
