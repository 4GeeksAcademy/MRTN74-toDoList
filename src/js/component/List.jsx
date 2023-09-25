import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const taskCount = tasks.length;

  return (
    <div className="todo-container">
      <h1>Todos :)</h1>
      <p>Total de Tareas: {taskCount}</p> {/* Nuevo contador */}
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
              <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
                <FontAwesomeIcon icon={faTrash} /> {/* Icono de basurero */}
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;
