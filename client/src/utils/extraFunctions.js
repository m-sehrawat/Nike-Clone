export const convertObject = (obj) => {
    let ans = {};
    for (let k1 in obj) {
        ans[k1] = [];
        for (let k2 in obj[k1]) {
            obj[k1][k2] && ans[k1].push(k2);
        }
    }
    return ans;
};


export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export const setToast = (toast, title, status, duration = 2000, description) => {
    toast({
        title,
        description,
        status,
        duration,
        isClosable: true,
        position: 'top'
    });
};


export const getGender = (gender) => {
    return !(gender === "men" || gender === "women" || gender === "kids");
};


export const shortString = (text, limit = 15) => {
    return text.slice(0, limit) + (text.length > limit ? "..." : "");
};

