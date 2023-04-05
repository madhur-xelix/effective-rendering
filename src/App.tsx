import { useAppDispatch } from "./hooks";
import Item from "./Item";
import { updateAllRows } from "./todoSlice";
import { todos } from "./data";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useAppDispatch();
  const [initialData, setInitialData] = useState<any>(null);

  useEffect(() => {
    const reducedTodos = todos.reduce((acc, item) => {
      return { ...acc, [item.id]: item };
    }, {});
    setInitialData(reducedTodos);
    dispatch(updateAllRows(reducedTodos));
  }, [dispatch]);

  if (!initialData) {
    return <h1>Loading</h1>;
  }
  const todoKeys = initialData ? Object.keys(initialData) : [];

  return (
    <>
      {todoKeys.map((todoId: any) => {
        return <Item key={todoId} id={todoId} />;
      })}
    </>
  );
}

export default App;
