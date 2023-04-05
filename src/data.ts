export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todos = new Array(1000).fill(1).map((item, index) => ({
  userId: index,
  id: index,
  title: `delectus aut autem ${index}`,
  completed: false,
}));
