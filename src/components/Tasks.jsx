import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "test1",
      date: "31/01/2022",
    },
    {
      id: 2,
      task: "test2",
      date: "31/01/2022",
    },
    {
      id: 3,
      task: "test3",
      date: "31/01/2022",
    },
  ]);

  return (
    <>
      {tasks.map((tasks) => (
        <h3 key={tasks.id}>{tasks.task}</h3>
      ))}
    </>
  );
};

export default Tasks;
