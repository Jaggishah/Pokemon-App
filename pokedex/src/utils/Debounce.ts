export const debounce = (fn: Function, timeout: number) => {
    let timer : ReturnType<typeof setTimeout>;
    return (...args:any) =>{
        clearInterval(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        },timeout)
    };
};