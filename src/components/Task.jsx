const Task = ({ task }) => {
  return (
    <div className="task-div">
      <h3>{task.task}</h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
