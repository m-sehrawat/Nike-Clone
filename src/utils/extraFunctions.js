export function checkSize(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                return true;
            }
        }
    }
    return false;
}


export function convertObject(obj) {
    let ans = {};
    for (let k1 in obj) {
        ans[k1] = [];
        for (let k2 in obj[k1]) {
            obj[k1][k2] && ans[k1].push(k2);
        }
    }
    return ans;
}