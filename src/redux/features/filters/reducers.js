// import { SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes";

// const init = { products: [] };

// export const filterReducer = (state = init, { type, payload }) => {
//     switch (type) {
//         case SORT_LOW_TO_HIGH:
//             return { ...state, products: state.products.sort((a, b) => a.price - b.price) };
//         case SORT_HIGH_TO_LOW:
//             return { ...state, products: state.products.sort((a, b) => b.price - a.price) };
//         default:
//             return state;
//     }
// }