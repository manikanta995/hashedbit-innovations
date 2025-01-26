import React, { useState } from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      updateTask(id, editText.trim());
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {tasks.length === 0 ? (
        <p>No tasks to display!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                margin: '10px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {editId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{ padding: '5px', fontSize: '16px', flexGrow: 1 }}
                  />
                  <button
                    onClick={() => handleUpdate(task.id)}
                    style={{ marginLeft: '10px', padding: '5px 10px' }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '16px', flexGrow: 1 }}>{task.text}</span>
                  <button
                    onClick={() => handleEdit(task.id, task.text)}
                    style={{ marginLeft: '10px', padding: '5px 10px' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      marginLeft: '10px',
                      padding: '5px 10px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
