import React from 'react';

const TodoItem = ({ text, completed, toggle, Delete }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggle} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={Delete}>Delete</button>
    </li>
  );
};

export default TodoItem;

