const checkDuplicate = (arr, target) => {
    for (let item of arr) {
        if (item._id === target._id || item.title === target.title) {
            return true;
        }
    }
    return false;
};


export const handleCartDuplicate = (arr, target, operation) => {

    const isPresent = checkDuplicate(arr, target);

    if (!isPresent) {
        arr.push(target);

    } else {
        arr = arr.map((item) => {
            if (item._id === target._id || item.title === target.title) {
                const singlePrice = item.price / item.quantity;
                return {
                    ...item,
                    price: operation === 'add' ? item.price + singlePrice : item.price - singlePrice,
                    quantity: operation === 'add' ? item.quantity + 1 : item.quantity - 1
                }
            }
            return item;
        });
    }
    return arr;
};


