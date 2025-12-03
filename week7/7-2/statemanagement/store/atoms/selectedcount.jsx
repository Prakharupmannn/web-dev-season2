import { selector } from "recoil";
import { todoAtom, filterAtom } from "./count";

export const filteredTodoSelector = selector({
  key: "filteredTodoSelector",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom).toLowerCase();

    return todos.filter(todo =>
      todo.title.toLowerCase().includes(filter)
    );
  }
});