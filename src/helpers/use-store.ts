import { useContext } from "react";
import { storeContext } from "./store-provider";
import { TodoList } from "../stores/todo-list";

export const useStore = (): TodoList => useContext(storeContext);
