export const setItem = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
};


export const getItem = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return undefined;
};

export const removeItem = (key)=>{
    return localStorage.removeItem(key);
};