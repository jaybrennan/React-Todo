import React from "react";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Styles from "./components/Todo.css";

const data = [
  {
    task: "Learn Class Components!",
    id: 1,
    completed: false
  },
  {
    task: "Get this project done!",
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      ourTasks: data // there's a property called things that has an initial state of data
    };
  }

  addItem = newTask => {
    const newTasks = {
      task: newTask,
      id: Date.now(),
      completed: false
    }; // every time we use addItem it will create a new item that has the above properties
    this.setState({
      ourTasks: [...this.state.ourTasks, newTasks]
    });
  };

  toggleComplete = id => {
    this.setState({
      ourTasks: this.state.ourTasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  clearDone = () => {
    this.setState({
      ourTasks: this.state.ourTasks.filter(task => !task.done)
    });
  };

  render() {
    return (
      <div>
        
        <h1>Todo List</h1>
        <TodoForm addItem={this.addItem} clearDone={this.clearDone} />
        <TodoList toggleComplete={this.toggleComplete} ourTasks={this.state.ourTasks} />
      </div>
    );
  }
}

export default App;