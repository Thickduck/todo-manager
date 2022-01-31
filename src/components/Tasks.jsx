import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((tasks) => (
        <Task key={tasks.id} task={tasks} />
      ))}
    </div>
  );
};

export default Tasks;
