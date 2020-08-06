import { createContext } from "react";
import { TodoList } from "../stores/todo-list";

export const storeContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = storeContext.Provider;
