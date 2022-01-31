import Header from "./Header";
import { useState } from "react";
import Button from "./Button";
import Tasks from "./Tasks";

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Need to learn React",
      date: "31/01/2022",
    },
    {
      id: 2,
      task: "Need to develop my website",
      date: "31/01/2022",
    },
    {
      id: 3,
      task: "Need to write classwork",
      date: "31/01/2022",
    },
  ]);

  return (
    <div className="App">
      <div className="header-div">
        <Header title="Todo Manager" />
      </div>
      <div className="button-div">
        <Button content="Remove" />
        <Button content="Add" />
      </div>
      <div className="tasks-div">
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default Main;
