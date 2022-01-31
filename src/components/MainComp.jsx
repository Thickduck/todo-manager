import Header from "./Header";
import Button from "./Button";
import Tasks from "./Tasks";

function Main() {
  return (
    <div className="App">
      <div className="header-div">
        <Header title="Todo Manager" />
      </div>
      <div className="button-div">
        <Button content="Remove" />
        <Button content="Add" />
      </div>
      <Tasks />
    </div>
  );
}

export default Main;
