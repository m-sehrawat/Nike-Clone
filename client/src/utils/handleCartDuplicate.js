export const handleCartDuplicate = (arr, target) => {

    const isPresent = arr.map((item) => item._id).includes(target._id);

    if (!isPresent) {
        arr.push(target);

    } else {
        arr = arr.map((item) => {
            if (item._id === target._id) {
                const singlePrice = item.price / item.quantity;
                return {
                    ...item,
                    price: item.price + singlePrice,
                    quantity: item.quantity + 1
                }
            }
            return item;
        });
    }
    return arr;
};


