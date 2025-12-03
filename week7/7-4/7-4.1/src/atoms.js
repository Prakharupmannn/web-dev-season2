import { atom, atomFamily } from "recoil";
import { TODOS } from "./todos"


export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id => {
        return TODOS.find(x => x.id === id)
    },
});

const todoAtom = atom({
    key: "todoAtom",
    default: 1
})