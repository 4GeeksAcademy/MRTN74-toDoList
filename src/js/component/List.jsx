import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos de Font Awesome

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h1>LISTA DE TAREAS</h1>
      <p className="task-count">
        Total de Tareas: <span>{tasks.length}</span>
      </p>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed-task' : ''}>
            <button onClick={() => toggleComplete(index)}>
              <FontAwesomeIcon icon={faCheckCircle} /> {/* Siempre muestra el icono de verificación de Font Awesome */}
            </button>
            <span className={task.completed ? 'completed-text' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
