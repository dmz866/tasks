import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([{ id: 1, text: 'Dosh 1', day: 'Day dosh 1', reminder: true },
  { id: 2, text: 'Dosh 2', day: 'Day dosh 2', reminder: false },
  { id: 3, text: 'Dosh 3', day: 'Day dosh 3', reminder: true }]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 10000);
    newTask.id = id;
    setTasks([...tasks, newTask]);
  };

  const toogleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, reminder: !task.reminder }
      }

      return task;
    }));
  };

  return (
    <div className="container">
      <Header title='Dosh' onShow={() => setShowAddTask(!showAddTask)} />
      { showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder}
        /> : 'No Tasks found.'
      }
    </div>
  );
}

export default App;
