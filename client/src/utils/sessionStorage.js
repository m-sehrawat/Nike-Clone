export const setItemSession = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
};


export const getItemSession = (key) => {
    if (sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    return undefined;
};


export const removeItemSession = (key) => {
    return sessionStorage.removeItem(key);
};