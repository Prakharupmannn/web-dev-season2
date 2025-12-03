import { atom, selector } from "recoil";

// // export const countAtom = atom({
//     key: "countAtom",
//     default: 0
// });

// //selector is defined
// export const evenSelector = selector({
//     key: "evenSelector",
//     get: ({get}) => {
//         const count = get(countAtom);
//         return count % 2 == 0;
//     }
// })







//assignment


export const todoAtom = atom({
  key: "todoAtom",
  default: [],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});