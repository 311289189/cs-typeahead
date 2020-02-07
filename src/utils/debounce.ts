export const debounce = (callback: Function, wait: number, immediate = false) => {
    let timeout: NodeJS.Timeout | null = null
    return function(this: unknown, ...args: Parameters<any>) {
        const callNow = immediate && !timeout
        const next = () => callback.apply(this, args)
        clearTimeout(timeout as NodeJS.Timeout)
        timeout = setTimeout(next, wait)
        callNow && next();
    }
}


export default debounce;
